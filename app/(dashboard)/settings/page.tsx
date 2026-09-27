import { Settings, Shield, CreditCard, Lock, Bell, Moon, MessageSquare, HelpCircle, Star, LogOut, Download, Trash2, ChevronRight } from 'lucide-react'

export default function SettingsPage() {
  const sections = [
    { icon: Settings, title: 'Account', description: 'Profile, login, security' },
    { icon: Bell, title: 'Preferences', description: 'Notifications, theme, language' },
    { icon: CreditCard, title: 'Billing', description: 'Plan, usage, payment' },
    { icon: Lock, title: 'Data & Privacy', description: 'Export, delete, policies' },
    { icon: MessageSquare, title: 'Support & Feedback', description: 'Help, reviews, contact' },
    { icon: HelpCircle, title: 'About', description: 'Version, credits, contact' },
  ]

  return (
    <div className="content">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Settings</p>
          <h1>Account & preferences</h1>
          <p className="muted">Manage your profile, billing, privacy, and more.</p>
        </div>
      </div>

      <div className="settings-grid">
        {sections.map(({ icon: Icon, title, description }) => (
          <button key={title} className="settings-card">
            <span className="settings-icon">
              <Icon size={20} />
            </span>
            <div className="settings-content">
              <strong>{title}</strong>
              <small>{description}</small>
            </div>
            <ChevronRight size={16} className="muted" />
          </button>
        ))}
      </div>

      <div className="settings-section">
        <h2>Quick actions</h2>
        <div className="quick-actions">
          <button className="quick-action">
            <Download size={16} />
            <div>
              <strong>Export my data</strong>
              <small>Download resumes, applications, and chat</small>
            </div>
          </button>
          <button className="quick-action danger">
            <Trash2 size={16} />
            <div>
              <strong>Delete account</strong>
              <small>Irreversible — removes all data</small>
            </div>
          </button>
          <button className="quick-action">
            <LogOut size={16} />
            <div>
              <strong>Log out</strong>
              <small>Sign out of your current session</small>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
