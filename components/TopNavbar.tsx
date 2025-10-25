'use client'

import { Search, Bell, Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function TopNavbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden"
        >
          <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
        </button>

        <div className="relative w-96 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          ) : (
            <Sun className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          )}
        </button>

        <button className="relative rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
          <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent"></span>
        </button>

        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-1.5 dark:border-slate-700">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-900 dark:text-white">John Doe</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}
