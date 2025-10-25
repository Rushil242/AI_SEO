'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { BarChart3, TrendingUp, Users, FileText } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analytics & Reports</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Track performance metrics and generate client reports
            </p>
          </div>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-4">
          <Card>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">2,847</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Website Visits</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">23%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">412</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">New Leads</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">89</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Content Pieces</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
          {['SEO Performance', 'Social Media', 'Google Business', 'Competitor'].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 text-sm font-medium ${
                idx === 0
                  ? 'border-b-2 border-accent text-accent'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Traffic Overview
          </h3>
          <div className="h-64 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">Chart Visualization Area</p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Top Performing Keywords
            </h3>
            <div className="space-y-3">
              {[
                { keyword: 'enterprise software', position: 3, clicks: 1247 },
                { keyword: 'IT consulting', position: 5, clicks: 892 },
                { keyword: 'business automation', position: 7, clicks: 645 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{item.keyword}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Position #{item.position}</p>
                  </div>
                  <p className="text-sm font-semibold text-accent">{item.clicks} clicks</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Social Media Engagement
            </h3>
            <div className="space-y-3">
              {[
                { platform: 'LinkedIn', engagement: '12.5K', growth: '+18%' },
                { platform: 'Facebook', engagement: '8.2K', growth: '+12%' },
                { platform: 'Twitter', engagement: '5.7K', growth: '+8%' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{item.platform}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.engagement} interactions</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">{item.growth}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
