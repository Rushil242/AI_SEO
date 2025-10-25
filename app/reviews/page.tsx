'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { demoReviews } from '@/data/demoData'
import { Star, ThumbsUp, MessageCircle, TrendingUp } from 'lucide-react'

export default function ReviewsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Review Management</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Monitor and respond to customer reviews across platforms
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-3">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">4.8</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Average Rating</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <ThumbsUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">127</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Total Reviews</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">95%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Response Rate</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          {demoReviews.map((review) => (
            <Card key={review.id}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{review.author}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{review.company}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{review.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span>{review.platform}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
                {!review.replied && (
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Generate Response
                  </Button>
                )}
                {review.replied && (
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Replied</span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            AI Response Generator
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Review Type
              </label>
              <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option>Positive Review</option>
                <option>Negative Review</option>
                <option>Neutral Review</option>
              </select>
            </div>
            <textarea
              placeholder="AI-generated response will appear here..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              rows={4}
            />
            <div className="flex gap-3">
              <Button>Generate Response</Button>
              <Button variant="outline">Edit & Send</Button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
