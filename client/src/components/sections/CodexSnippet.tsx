import { cn } from "@/lib/utils";

interface CodexSnippetProps {
  title: string;
  fileLabel: string;
  lines: string[];
  accentColor?: string;
  className?: string;
}

export function CodexSnippet({
  title,
  fileLabel,
  lines,
  accentColor = "#C140FF",
  className,
}: CodexSnippetProps) {
  return (
    <div
      className={cn(
        "bg-[#080c1a] border border-white/[0.08] rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden",
        className,
      )}
      data-testid="codex-snippet"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${accentColor}10, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/40" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <div className="h-2 w-2 rounded-full bg-green-500/40" />
          <span className="ml-2 text-[10px] font-mono text-white/30">{fileLabel}</span>
        </div>

        <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>

        <div className="rounded-xl border border-white/[0.08] bg-black/30 overflow-x-auto">
          <pre className="p-4 text-[12px] leading-6 font-mono">
            {lines.map((line, index) => (
              <div key={`${fileLabel}-${index}`} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="text-right text-white/20 select-none">{index + 1}</span>
                <code
                  className={cn(
                    "text-white/75 whitespace-pre",
                    line.includes("agent.") && "text-white/90",
                  )}
                >
                  {line}
                </code>
              </div>
            ))}
          </pre>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
          <span className="text-[10px] font-mono text-white/25">Execution mode: guarded</span>
          <span className="text-[10px] font-mono" style={{ color: `${accentColor}CC` }}>
            Audit logging enabled
          </span>
        </div>
      </div>
    </div>
  );
}
