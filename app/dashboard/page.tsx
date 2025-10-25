'use client'

import AppLayout from '@/components/AppLayout'
import MetricCard from '@/components/MetricCard'
import Card from '@/components/Card'
import { FileText, Megaphone, Star, TrendingUp } from 'lucide-react'
import { demoMetrics } from '@/data/demoData'

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Welcome back! Here's your business performance overview.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Content Generated"
            value={demoMetrics.contentGenerated}
            change="+12% from last month"
            icon={FileText}
            trend="up"
          />
          <MetricCard
            title="Active Campaigns"
            value={demoMetrics.activeCampaigns}
            change="+3 this week"
            icon={Megaphone}
            trend="up"
          />
          <MetricCard
            title="Reviews Responded"
            value={demoMetrics.reviewsResponded}
            change="+23% response rate"
            icon={Star}
            trend="up"
          />
          <MetricCard
            title="Monthly Growth"
            value={demoMetrics.monthlyGrowth}
            change="Excellent performance"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { action: 'New blog post generated', time: '2 hours ago', type: 'content' },
                { action: 'Campaign "Q4 Product Launch" updated', time: '5 hours ago', type: 'campaign' },
                { action: 'Responded to 3 Google reviews', time: '1 day ago', type: 'review' },
                { action: 'Client profile completed', time: '2 days ago', type: 'client' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 dark:border-slate-700">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{item.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.time}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Performance Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">SEO Score</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">85%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full dark:bg-slate-700">
                  <div className="h-2 bg-accent rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Content Quality</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">92%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full dark:bg-slate-700">
                  <div className="h-2 bg-accent rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Engagement Rate</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">78%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full dark:bg-slate-700">
                  <div className="h-2 bg-accent rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
