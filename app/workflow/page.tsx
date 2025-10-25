'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { demoContent } from '@/data/demoData'
import { CheckCircle, XCircle, Edit, Send } from 'lucide-react'

export default function WorkflowPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Human Approval Workflow</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Review and approve AI-generated content before publishing
          </p>
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Content Queue
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Title</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Type</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Quality</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Status</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {demoContent.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3 text-slate-900 dark:text-white">{item.title}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{item.type}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} filled={i < Math.floor(item.quality)} />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item.quality}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                        item.status === 'approved'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        {item.status === 'pending' && (
                          <>
                            <button className="rounded-lg p-1.5 hover:bg-green-50 dark:hover:bg-green-900/20" title="Approve">
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </button>
                            <button className="rounded-lg p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20" title="Edit">
                              <Edit className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </button>
                            <button className="rounded-lg p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20" title="Reject">
                              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Content Editor
          </h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                AI Generated Version
              </label>
              <textarea
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                rows={8}
                defaultValue="Enterprise Software Solutions for Growing Businesses\n\nDiscover how our cutting-edge enterprise software can transform your business operations..."
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Human Edited Version
              </label>
              <textarea
                className="w-full rounded-lg border border-slate-200 bg-white p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                rows={8}
                placeholder="Edit the content here..."
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button>
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve
            </Button>
            <Button variant="secondary">
              <Edit className="h-4 w-4 mr-2" />
              Edit & Approve
            </Button>
            <Button variant="outline">
              <Send className="h-4 w-4 mr-2" />
              Send Back
            </Button>
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg className={`h-4 w-4 ${filled ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700'}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
