import Link from 'next/link'
import { Activity, BriefcaseBusiness, BrainCircuit, Compass, FileText, GraduationCap, LayoutDashboard, ListChecks, MessageSquare, Settings, Sparkles, Target } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Skills', href: '/skills', icon: GraduationCap },
  { label: 'AI Career', href: '/ai-career', icon: BrainCircuit },
  { label: 'Roadmap', href: '/roadmap', icon: Target },
  { label: 'Resume', href: '/resume', icon: FileText },
  { label: 'Live Jobs', href: '/jobs', icon: BriefcaseBusiness },
  { label: 'Applications', href: '/applications', icon: ListChecks },
  { label: 'Interviews', href: '/interviews', icon: MessageSquare },
  { label: 'AI Hub', href: '/ai-hub', icon: Sparkles },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="shell">
    <aside className="sidebar">
      <Link href="/dashboard" className="brand"><span className="brand-mark"><Compass size={19} /></span><span>Career<span className="brand-accent">OS</span></span></Link>
      <div className="workspace"><span className="avatar">JD</span><div><strong>Jordan Davis</strong><small>Personal workspace</small></div><span className="chevron">⌄</span></div>
      <nav className="nav">{navigation.map(({ label, href, icon: Icon }) => <Link key={href} href={href} className={href === '/dashboard' ? 'nav-link active' : 'nav-link'}><Icon size={18} /><span>{label}</span></Link>)}</nav>
      <div className="sidebar-bottom"><Link href="/settings" className="nav-link"><Settings size={18} /><span>Settings</span></Link><div className="upgrade"><Sparkles size={18}/><strong>Unlock your edge</strong><p>Get unlimited AI career tools and insights.</p><button>Upgrade to Pro</button></div><div className="help"><Activity size={16}/> <span>All systems operational</span></div></div>
    </aside>
    <main className="main"><header className="topbar"><div className="breadcrumbs">Workspace <span>/</span> <strong>Overview</strong></div><div className="top-actions"><button className="icon-button">⌕</button><button className="icon-button notification">♢<i /></button><div className="top-avatar">JD</div></div></header>{children}</main>
  </div>
}
