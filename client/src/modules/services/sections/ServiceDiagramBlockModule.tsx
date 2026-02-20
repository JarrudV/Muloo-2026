import { Activity, Shield, Terminal, Workflow, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { CodexSnippet } from "@/components/sections/CodexSnippet";
import { ServiceIcon } from "@/modules/services/sections/service-icon-map";
import type { DiagramBlockSectionModule } from "@/types/modules";

interface ServiceDiagramBlockModuleProps {
  module: DiagramBlockSectionModule;
}

type HubCrmDiagramModule = Extract<
  DiagramBlockSectionModule,
  { diagramVariant: "hubCrmStructure" }
>;
type BuildArchitectureDiagramModule = Extract<
  DiagramBlockSectionModule,
  { diagramVariant: "buildArchitectureFlow" }
>;
type AiWorkflowDiagramModule = Extract<
  DiagramBlockSectionModule,
  { diagramVariant: "aiWorkflowLoop" }
>;
type ProductDashboardDiagramModule = Extract<
  DiagramBlockSectionModule,
  { diagramVariant: "productDashboard" }
>;
type CodexSnippetDiagramModule = Extract<
  DiagramBlockSectionModule,
  { diagramVariant: "codexSnippet" }
>;

function assertNever(value: never): never {
  throw new Error(`Unhandled diagram variant: ${JSON.stringify(value)}`);
}

function FlowDivider({ color }: { color: string }) {
  return (
    <div className="flex justify-center py-0.5">
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-3" style={{ backgroundColor: color }} />
        <div className="h-1 w-1 rounded-full" style={{ backgroundColor: color }} />
        <div className="w-px h-3" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

function HubCrmDiagram({ module }: { module: HubCrmDiagramModule }) {
  const data = module.diagramData;

  return (
    <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-crm-structure">
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, rgba(244, 118, 33, 0.04), transparent)` }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/40" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <div className="h-2 w-2 rounded-full bg-green-500/40" />
          <span className="ml-3 text-[10px] font-mono text-white/20">{data.headerLabel}</span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">
              {data.pipelineLabel}
            </span>
            <div className="flex gap-1.5">
              {(data.pipelineStages ?? []).map((stage, i, arr) => (
                <div
                  key={stage}
                  className="flex-1 py-2 rounded-md text-center text-[10px] font-mono"
                  style={{
                    backgroundColor:
                      i === arr.length - 1
                        ? `rgba(244, 118, 33, 0.12)`
                        : `rgba(255, 255, 255, 0.03)`,
                    border:
                      i === arr.length - 1
                        ? `1px solid rgba(244, 118, 33, 0.25)`
                        : `1px solid rgba(255, 255, 255, 0.05)`,
                    color:
                      i === arr.length - 1
                        ? module.accentColor
                        : `rgba(255, 255, 255, 0.35)`,
                  }}
                >
                  {stage}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
              <span className="text-[9px] font-mono text-white/20 block mb-1">
                {data.reportingLabels?.conversion}
              </span>
              <span className="text-sm font-mono font-medium text-white/50">
                {data.reportingValues?.conversion}
              </span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
              <span className="text-[9px] font-mono text-white/20 block mb-1">
                {data.reportingLabels?.velocity}
              </span>
              <span className="text-sm font-mono font-medium text-white/50">
                {data.reportingValues?.velocity}
              </span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
              <span className="text-[9px] font-mono text-white/20 block mb-1">
                {data.reportingLabels?.winRate}
              </span>
              <span className="text-sm font-mono font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>
                {data.reportingValues?.winRate}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div
              className="p-3 rounded-lg flex items-center gap-3"
              style={{
                backgroundColor: `rgba(244, 118, 33, 0.04)`,
                border: `1px solid rgba(244, 118, 33, 0.12)`,
              }}
            >
              <Shield className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(244, 118, 33, 0.5)` }} />
              <div>
                <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>
                  {data.permission?.title}
                </span>
                <span className="text-[9px] text-white/20 block font-mono">{data.permission?.sub}</span>
              </div>
            </div>
            <div
              className="p-3 rounded-lg flex items-center gap-3"
              style={{
                backgroundColor: `rgba(244, 118, 33, 0.04)`,
                border: `1px solid rgba(244, 118, 33, 0.12)`,
              }}
            >
              <Workflow className="h-3.5 w-3.5 shrink-0" style={{ color: `rgba(244, 118, 33, 0.5)` }} />
              <div>
                <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(244, 118, 33, 0.7)` }}>
                  {data.automation?.title}
                </span>
                <span className="text-[9px] text-white/20 block font-mono">{data.automation?.sub}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-white/25">{data.statusLeft}</span>
          </div>
          <span className="text-[10px] font-mono text-white/20">{data.statusRight}</span>
        </div>
      </div>
    </div>
  );
}

function BuildArchitectureDiagram({ module }: { module: BuildArchitectureDiagramModule }) {
  const data = module.diagramData;

  return (
    <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-architecture">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: `radial-gradient(circle at top right, rgba(21, 93, 252, 0.05), transparent)` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/40" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <div className="h-2 w-2 rounded-full bg-green-500/40" />
          <span className="ml-3 text-[10px] font-mono text-white/20">{data.headerLabel}</span>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">
              {data.sourceLabel}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(data.sourceSystems ?? []).map((s) => (
                <div key={s.label} className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                  <ServiceIcon icon={s.icon} className="h-3.5 w-3.5 text-white/20" />
                  <span className="text-[11px] font-mono text-white/40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <FlowDivider color="rgba(21, 93, 252, 0.2)" />

          <div className="p-3.5 rounded-xl flex items-center gap-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.04)`, border: `1px solid rgba(21, 93, 252, 0.15)` }}>
            <Shield className="h-4 w-4 shrink-0" style={{ color: `rgba(21, 93, 252, 0.6)` }} />
            <div>
              <span className="font-mono text-xs font-medium" style={{ color: `rgba(21, 93, 252, 0.8)` }}>
                {data.apiGatewayTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.apiGatewaySub}</span>
            </div>
          </div>

          <FlowDivider color="rgba(21, 93, 252, 0.2)" />

          <div className="grid grid-cols-2 gap-2">
            <div className="p-3.5 rounded-xl flex items-center gap-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.06)`, border: `1px solid rgba(21, 93, 252, 0.25)`, boxShadow: `0 0 20px -8px rgba(21, 93, 252, 0.15)` }}>
              <Terminal className="h-4 w-4 shrink-0" style={{ color: module.accentColor }} />
              <div>
                <span className="font-mono text-xs font-medium" style={{ color: module.accentColor }}>
                  {data.middlewareTitle}
                </span>
                <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.middlewareSub}</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl flex items-center gap-3" style={{ backgroundColor: `rgba(21, 93, 252, 0.04)`, border: `1px solid rgba(21, 93, 252, 0.15)` }}>
              <Activity className="h-4 w-4 shrink-0" style={{ color: `rgba(21, 93, 252, 0.6)` }} />
              <div>
                <span className="font-mono text-xs font-medium" style={{ color: `rgba(21, 93, 252, 0.8)` }}>
                  {data.queueTitle}
                </span>
                <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.queueSub}</span>
              </div>
            </div>
          </div>

          <FlowDivider color="rgba(21, 93, 252, 0.2)" />

          <div>
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block">
              {data.targetLabel}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(data.targetSystems ?? []).map((t) => (
                <div key={t.label} className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
                  <ServiceIcon icon={t.icon} className="h-3.5 w-3.5 text-white/20" />
                  <span className="text-[11px] font-mono text-white/40">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-white/25">{data.statusLeft}</span>
          </div>
          <div className="flex items-center gap-4">
            {(data.statusMetrics ?? []).map((m) => (
              <span key={m} className="text-[10px] font-mono text-white/20">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AiWorkflowDiagram({ module }: { module: AiWorkflowDiagramModule }) {
  const data = module.diagramData;

  return (
    <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="diagram-ai-workflow">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: `radial-gradient(circle at top right, rgba(193, 64, 255, 0.04), transparent)` }} />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/40" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <div className="h-2 w-2 rounded-full bg-green-500/40" />
          <span className="ml-3 text-[10px] font-mono text-white/20">{data.headerLabel}</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: `rgba(193, 64, 255, 0.03)`, border: `1px solid rgba(193, 64, 255, 0.1)` }}>
            <Zap className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
            <div>
              <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>
                {data.triggerTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.triggerSub}</span>
            </div>
          </div>

          <FlowDivider color="rgba(193, 64, 255, 0.15)" />

          <div className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: `rgba(193, 64, 255, 0.06)`, border: `1px solid rgba(193, 64, 255, 0.25)`, boxShadow: `0 0 20px -8px rgba(193, 64, 255, 0.15)` }}>
            <ServiceIcon icon="brain" className="h-5 w-5 shrink-0" color={module.accentColor} />
            <div>
              <span className="font-mono text-xs font-medium" style={{ color: module.accentColor }}>
                {data.agentTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.agentSub}</span>
            </div>
          </div>

          <FlowDivider color="rgba(193, 64, 255, 0.15)" />

          <div className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: `rgba(193, 64, 255, 0.03)`, border: `1px solid rgba(193, 64, 255, 0.1)` }}>
            <Activity className="h-5 w-5 shrink-0" style={{ color: `rgba(193, 64, 255, 0.5)` }} />
            <div>
              <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.7)` }}>
                {data.actionTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.actionSub}</span>
            </div>
          </div>

          <FlowDivider color="rgba(193, 64, 255, 0.15)" />

          <div className="p-4 rounded-xl flex items-center gap-4" style={{ backgroundColor: `rgba(193, 64, 255, 0.04)`, border: `1px solid rgba(193, 64, 255, 0.15)` }}>
            <ServiceIcon icon="barChart3" className="h-5 w-5 shrink-0" color="rgba(193, 64, 255, 0.6)" />
            <div>
              <span className="font-mono text-xs font-medium" style={{ color: `rgba(193, 64, 255, 0.8)` }}>
                {data.reportingTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono mt-0.5">{data.reportingSub}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-white/25">{data.statusLeft}</span>
          </div>
          <span className="text-[10px] font-mono text-white/20">{data.statusRight}</span>
        </div>
      </div>
    </div>
  );
}

function ProductDashboardDiagram({ module }: { module: ProductDashboardDiagramModule }) {
  const data = module.diagramData;

  return (
    <div className="bg-[#080c1a] border border-white/[0.08] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden" data-testid="mock-dashboard">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ background: `radial-gradient(circle at top right, rgba(89, 191, 150, 0.04), transparent)` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/5">
          <div className="h-2 w-2 rounded-full bg-red-500/40" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
          <div className="h-2 w-2 rounded-full bg-green-500/40" />
          <span className="ml-3 text-[10px] font-mono text-white/20">{data.headerLabel}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {(data.metrics ?? []).map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-3">
              <span className="text-[9px] font-mono text-white/20 block mb-1">{metric.label}</span>
              <span className="text-lg font-mono font-medium text-white/50">{metric.value}</span>
              {metric.trend ? <span className="text-[9px] font-mono text-green-400/50 ml-1.5">{metric.trend}</span> : null}
            </div>
          ))}
        </div>

        <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 mb-4">
          <span className="text-[9px] font-mono text-white/20 block mb-3">{data.usageLabel}</span>
          <div className="h-20 flex items-end justify-between gap-1.5">
            {(data.usageBars ?? []).map((h, i, bars) => (
              <div
                key={i}
                className="w-full rounded-t-sm transition-colors"
                style={{
                  height: `${h}%`,
                  backgroundColor:
                    i >= bars.length - 2
                      ? `rgba(89, 191, 150, 0.5)`
                      : `rgba(89, 191, 150, 0.2)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
            <ServiceIcon icon="users" className="h-3.5 w-3.5 shrink-0" color="rgba(89, 191, 150, 0.5)" />
            <div>
              <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>
                {data.tenantsTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono">{data.tenantSub}</span>
            </div>
          </div>
          <div className="p-3 rounded-lg flex items-center gap-3" style={{ backgroundColor: `rgba(89, 191, 150, 0.04)`, border: `1px solid rgba(89, 191, 150, 0.12)` }}>
            <ServiceIcon icon="creditCard" className="h-3.5 w-3.5 shrink-0" color="rgba(89, 191, 150, 0.5)" />
            <div>
              <span className="font-mono text-[11px] font-medium" style={{ color: `rgba(89, 191, 150, 0.7)` }}>
                {data.subscriptionsTitle}
              </span>
              <span className="text-[9px] text-white/20 block font-mono">{data.subscriptionSub}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            <span className="text-[10px] font-mono text-white/25">{data.statusLeft}</span>
          </div>
          <span className="text-[10px] font-mono text-white/20">{data.statusRight}</span>
        </div>
      </div>
    </div>
  );
}

function CodexSnippetDiagram({ module }: { module: CodexSnippetDiagramModule }) {
  const data = module.diagramData;

  return (
    <CodexSnippet
      title={data.title}
      fileLabel={data.fileLabel}
      lines={data.lines}
      accentColor={module.accentColor}
    />
  );
}

export function ServiceDiagramBlockModule({ module }: ServiceDiagramBlockModuleProps) {
  const renderDiagram = () => {
    switch (module.diagramVariant) {
      case "hubCrmStructure":
        return <HubCrmDiagram module={module} />;
      case "buildArchitectureFlow":
        return <BuildArchitectureDiagram module={module} />;
      case "aiWorkflowLoop":
        return <AiWorkflowDiagram module={module} />;
      case "productDashboard":
        return <ProductDashboardDiagram module={module} />;
      case "codexSnippet":
        return <CodexSnippetDiagram module={module} />;
      default:
        return assertNever(module);
    }
  };

  return (
    <Section className={module.sectionClassName ?? "py-20 md:py-[120px] border-t border-white/5"}>
      <div className={cn("grid lg:grid-cols-2 gap-16 items-start", module.containerClassName)}>
        <div className="max-w-xl">
          <span className={cn("text-sm font-mono uppercase tracking-widest mb-4 block", module.labelClassName)} style={{ color: module.accentColor }}>
            {module.sectionLabel}
          </span>
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-white", module.headlineClassName)}>
            {module.headline}
          </h2>
          <p className={cn("text-muted-foreground leading-[1.8] mb-8 max-w-lg", module.bodyClassName)}>
            {module.body}
          </p>
          {module.checklist ? (
            <ul className="space-y-4">
              {module.checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: module.accentColor }} />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {renderDiagram()}
      </div>
    </Section>
  );
}
