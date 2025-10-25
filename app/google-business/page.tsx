'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { CheckCircle, Image, MessageSquare, BarChart } from 'lucide-react'

export default function GoogleBusinessPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Google Business Profile</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage your Google Business Profile and local presence
          </p>
        </div>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Status</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Your profile is verified and active</p>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Create Google Post</h3>
            </div>
            <textarea
              placeholder="What's new with your business? Share updates, offers, or events..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              rows={4}
            />
            <div className="mt-4 flex gap-3">
              <Button>Generate with AI</Button>
              <Button variant="outline">Add Image</Button>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Image className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Photo Manager</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-slate-100 dark:bg-slate-700"></div>
              ))}
            </div>
            <Button className="mt-4 w-full" variant="outline">Upload Photos</Button>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Performance Analytics</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">2,847</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Views this month</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">412</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Customer actions</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">89</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Direction requests</p>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
