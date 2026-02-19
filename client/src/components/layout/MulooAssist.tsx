import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MulooAssist() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button 
        className="h-14 w-14 rounded-full bg-brand-teal text-background hover:bg-brand-teal/90 shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
        <MessageSquareText className="h-6 w-6 relative z-10" />
      </Button>
      <div className="absolute bottom-full right-0 mb-4 bg-card border border-white/10 p-4 rounded-xl shadow-xl w-64 origin-bottom-right scale-0 opacity-0 transition-all pointer-events-none">
        <p className="text-sm font-medium mb-2">Muloo Assist</p>
        <p className="text-xs text-muted-foreground">Chat with our AI agent to learn more about our services.</p>
      </div>
    </div>
  );
}
