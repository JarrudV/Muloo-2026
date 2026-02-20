import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  Brain,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Eye,
  GitBranch,
  HardDrive,
  HeadphonesIcon,
  Laptop,
  Layers,
  LineChart,
  Lock,
  RefreshCw,
  Rocket,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Terminal,
  TrendingUp,
  UserCheck,
  Users,
  Webhook,
  Workflow,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const serviceIconMap: Record<string, ComponentType<LucideProps>> = {
  activity: Activity,
  alertTriangle: AlertTriangle,
  barChart3: BarChart3,
  bot: Bot,
  brain: Brain,
  brainCircuit: BrainCircuit,
  building2: Building2,
  checkCircle2: CheckCircle2,
  clipboardCheck: ClipboardCheck,
  cloud: Cloud,
  code2: Code2,
  creditCard: CreditCard,
  database: Database,
  eye: Eye,
  gitBranch: GitBranch,
  hardDrive: HardDrive,
  headphones: HeadphonesIcon,
  laptop: Laptop,
  layers: Layers,
  lineChart: LineChart,
  lock: Lock,
  refreshCw: RefreshCw,
  rocket: Rocket,
  server: Server,
  settings: Settings,
  shield: Shield,
  shieldCheck: ShieldCheck,
  terminal: Terminal,
  trendingUp: TrendingUp,
  userCheck: UserCheck,
  users: Users,
  webhook: Webhook,
  workflow: Workflow,
  wrench: Wrench,
  zap: Zap,
};

export function ServiceIcon({
  icon,
  className,
  color,
}: {
  icon?: string;
  className?: string;
  color?: string;
}) {
  if (!icon) {
    return null;
  }

  const Icon = serviceIconMap[icon];
  if (!Icon) {
    return null;
  }

  return <Icon className={className} style={color ? { color } : undefined} />;
}
