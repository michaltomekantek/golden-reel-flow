import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { audioBase64 } = await req.json();
    
    if (!audioBase64) {
      throw new Error('No audio data provided');
    }

    console.log('Processing audio transcription with Lovable AI...');

    // Decode base64 to binary
    const binaryString = atob(audioBase64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Create a simple text representation for demo
    // Note: Real audio transcription would need proper audio processing
    const mockTranscription = "Transkrypcja audio (demo mode)";
    
    console.log('Transcription completed');

    return new Response(
      JSON.stringify({ text: mockTranscription }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in speech-to-text:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
