import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, Loader2, Settings } from 'lucide-react';
import AnimatedFace from '@/components/AnimatedFace';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Expression = 'idle' | 'listening' | 'thinking' | 'speaking' | 'happy';

const Index = () => {
  const [expression, setExpression] = useState<Expression>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const { isRecording, startRecording, stopRecording } = useVoiceRecording();
  const { toast } = useToast();

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pl-PL';
      utterance.onend = () => {
        setExpression('happy');
        setTimeout(() => setExpression('idle'), 2000);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMicClick = async () => {
    if (isRecording) {
      setExpression('thinking');
      const audioBase64 = await stopRecording();
      
      if (!audioBase64) {
        setExpression('idle');
        return;
      }

      setIsProcessing(true);
      setTranscript('Słucham...');

      try {
        // Transcribe audio
        const { data: transcriptionData, error: transcriptionError } = await supabase.functions.invoke('speech-to-text', {
          body: { audioBase64 }
        });

        if (transcriptionError) throw transcriptionError;

        const userText = transcriptionData.text || 'Test pytanie';
        setTranscript(`Ty: ${userText}`);

        // Get AI response
        const { data: chatData, error: chatError } = await supabase.functions.invoke('chat', {
          body: { message: userText }
        });

        if (chatError) throw chatError;

        const aiReply = chatData.reply;
        setTranscript(`Ty: ${userText}\n\nAsystent: ${aiReply}`);

        // Speak response
        setExpression('speaking');
        speak(aiReply);

        toast({
          title: 'Odpowiedź gotowa',
          description: aiReply.substring(0, 100) + '...',
        });

      } catch (error) {
        console.error('Error:', error);
        toast({
          title: 'Błąd',
          description: 'Wystąpił problem podczas przetwarzania',
          variant: 'destructive',
        });
        setExpression('idle');
        setTranscript('');
      } finally {
        setIsProcessing(false);
      }
    } else {
      setExpression('listening');
      setTranscript('');
      await startRecording();
    }
  };

  const saveApiKey = () => {
    localStorage.setItem('google_api_key', apiKey);
    setShowSettings(false);
    toast({
      title: 'Klucz zapisany',
      description: 'Twój klucz API został zapisany lokalnie',
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center space-y-6 p-8 max-w-2xl w-full">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold text-primary">Asystent Głosowy AI</h1>
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Ustawienia API</DialogTitle>
                  <DialogDescription>
                    Opcjonalnie: wprowadź swój klucz Google API
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    type="password"
                    placeholder="Twój klucz Google API (opcjonalnie)"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                  <Button onClick={saveApiKey} className="w-full">
                    Zapisz klucz
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    💡 Aplikacja domyślnie używa darmowego Lovable AI (Google Gemini)
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-muted-foreground">Naciśnij przycisk i zadaj pytanie</p>
        </div>

        <AnimatedFace expression={expression} />

        {transcript && (
          <div className="bg-card border rounded-lg p-4 text-left max-h-40 overflow-y-auto">
            <p className="text-sm whitespace-pre-wrap">{transcript}</p>
          </div>
        )}

        <div className="space-y-4">
          <Button
            onClick={handleMicClick}
            disabled={isProcessing}
            size="lg"
            className="rounded-full w-20 h-20"
            variant={isRecording ? 'destructive' : 'default'}
          >
            {isProcessing ? (
              <Loader2 className="h-8 w-8 animate-spin" />
            ) : isRecording ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </Button>
          
          <p className="text-sm text-muted-foreground">
            {isProcessing
              ? 'Przetwarzam...'
              : isRecording
              ? 'Nagrywam... Naciśnij ponownie aby zatrzymać'
              : 'Naciśnij aby rozpocząć nagrywanie'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
