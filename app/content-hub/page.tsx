'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { Sparkles, Target, Volume2, Calendar } from 'lucide-react'

export default function ContentHubPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Content Creation Hub</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Generate AI-powered content optimized for your business
          </p>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI Content Generator</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Content Topic
              </label>
              <input
                type="text"
                placeholder="e.g., Enterprise Software Solutions for Growing Businesses"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Content Type
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  <option>Blog Post</option>
                  <option>Service Description</option>
                  <option>Product Page</option>
                  <option>Case Study</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Target Keywords
                </label>
                <input
                  type="text"
                  placeholder="e.g., business software, ERP system"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
            <Button className="w-full sm:w-auto">Generate Content</Button>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Keyword Optimizer</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">SEO Score</span>
                  <span className="text-sm font-semibold text-accent">87%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full dark:bg-slate-700">
                  <div className="h-2 bg-accent rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Suggested keywords: enterprise software, cloud ERP, business automation
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Brand Voice Settings</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Tone
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Technical</option>
                  <option>Persuasive</option>
                </select>
              </div>
              <Button variant="outline" className="w-full">Save Preferences</Button>
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Content Library</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Title</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Type</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Status</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { title: 'Enterprise Software Solutions', type: 'Blog', status: 'Published', date: 'Oct 20' },
                  { title: 'IT Support Services Overview', type: 'Service', status: 'Draft', date: 'Oct 22' },
                  { title: 'Cloud ERP Implementation', type: 'Case Study', status: 'Published', date: 'Oct 18' },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 text-slate-900 dark:text-white">{item.title}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{item.type}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                        item.status === 'Published' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
