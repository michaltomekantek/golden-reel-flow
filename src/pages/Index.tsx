import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import AnimatedFace from '@/components/AnimatedFace';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type Expression = 'idle' | 'listening' | 'thinking' | 'speaking' | 'happy';

const Index = () => {
  const [expression, setExpression] = useState<Expression>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const { isRecording, startRecording, stopRecording } = useVoiceRecording();
  const { toast } = useToast();

  const handleMicClick = async () => {
    if (isRecording) {
      // Stop recording and process
      setExpression('thinking');
      const audioBase64 = await stopRecording();
      
      if (!audioBase64) {
        setExpression('idle');
        return;
      }

      setIsProcessing(true);

      try {
        // Transcribe audio
        const { data: transcriptionData, error: transcriptionError } = await supabase.functions.invoke('speech-to-text', {
          body: { audio: audioBase64 }
        });

        if (transcriptionError) throw transcriptionError;

        const userText = transcriptionData.text;
        console.log('Transcribed:', userText);

        // Get AI response
        const { data: chatData, error: chatError } = await supabase.functions.invoke('chat', {
          body: { message: userText }
        });

        if (chatError) throw chatError;

        const aiReply = chatData.reply;
        console.log('AI Reply:', aiReply);

        // Convert to speech
        setExpression('speaking');
        const { data: ttsData, error: ttsError } = await supabase.functions.invoke('text-to-speech', {
          body: { text: aiReply }
        });

        if (ttsError) throw ttsError;

        // Play audio
        const audio = new Audio(`data:audio/mp3;base64,${ttsData.audioContent}`);
        
        audio.onended = () => {
          setExpression('happy');
          setTimeout(() => setExpression('idle'), 2000);
        };

        await audio.play();

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
      } finally {
        setIsProcessing(false);
      }
    } else {
      // Start recording
      setExpression('listening');
      await startRecording();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Asystent Głosowy AI</h1>
          <p className="text-muted-foreground">Naciśnij przycisk i zadaj pytanie</p>
        </div>

        <AnimatedFace expression={expression} />

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
