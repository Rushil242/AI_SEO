'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { Bot, FileText, Palette, Link as LinkIcon, Sliders } from 'lucide-react'

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">AI Settings & Configuration</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Configure AI models, prompts, and automation rules
          </p>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Bot className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI Model Selection</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Content Generation Model
              </label>
              <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option>GPT-4 Turbo</option>
                <option>GPT-4</option>
                <option>Claude 3.5 Sonnet</option>
                <option>Gemini Pro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                SEO Optimization Model
              </label>
              <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option>GPT-4 Turbo</option>
                <option>Claude 3.5 Sonnet</option>
                <option>Gemini Pro</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Prompt Templates</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Blog Post Template', usage: 247 },
                { name: 'Social Media Template', usage: 189 },
                { name: 'Service Description', usage: 134 },
              ].map((template, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{template.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{template.usage} uses</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              ))}
            </div>
            <Button className="mt-4 w-full" variant="outline">Create New Template</Button>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Palette className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Brand Guidelines</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Brand Voice
                </label>
                <textarea
                  placeholder="Describe your brand voice and tone..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Industry Focus
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  <option>Software & Technology</option>
                  <option>IT Services</option>
                  <option>Business Consulting</option>
                  <option>Cloud Solutions</option>
                </select>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <LinkIcon className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Integration Management</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Google Business Profile', status: 'Connected', color: 'green' },
              { name: 'Facebook Pages', status: 'Connected', color: 'green' },
              { name: 'LinkedIn Company', status: 'Not Connected', color: 'slate' },
              { name: 'Twitter/X', status: 'Not Connected', color: 'slate' },
            ].map((integration, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800"></div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{integration.name}</p>
                    <p className={`text-xs ${integration.color === 'green' ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {integration.status}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {integration.status === 'Connected' ? 'Manage' : 'Connect'}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Sliders className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Quality & Automation Rules</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Minimum Quality Score for Auto-Publish
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  defaultValue="4"
                  className="flex-1"
                />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">4.0</span>
              </div>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-accent focus:ring-accent" defaultChecked />
                <span className="text-sm text-slate-700 dark:text-slate-300">Auto-respond to 5-star reviews</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-accent focus:ring-accent" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Auto-publish social media posts</span>
              </label>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-3">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </AppLayout>
  )
}
