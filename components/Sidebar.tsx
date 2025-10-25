'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Building2, 
  PenTool, 
  Megaphone, 
  Search, 
  Star, 
  BarChart3, 
  CheckSquare, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Google Business', href: '/google-business', icon: Building2 },
  { name: 'Content Hub', href: '/content-hub', icon: PenTool },
  { name: 'Marketing Suite', href: '/marketing-suite', icon: Megaphone },
  { name: 'SEO Tools', href: '/seo-tools', icon: Search },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Workflow', href: '/workflow', icon: CheckSquare },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean
  setIsOpen: (open: boolean) => void 
}) {
  const pathname = usePathname()

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } flex-shrink-0 border-r border-slate-200 bg-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-800`}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
          {isOpen && (
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
              AI SEO Platform
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {isOpen ? (
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            ) : (
              <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                } group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors`}
                title={!isOpen ? item.name : undefined}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                {isOpen && <span className="ml-3">{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
