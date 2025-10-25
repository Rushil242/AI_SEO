'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { demoClients } from '@/data/demoData'
import { Plus, UserPlus, Settings, CreditCard } from 'lucide-react'

export default function ClientsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Client Management</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Manage client accounts and business profiles
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">24</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Active Clients</p>
          </Card>
          <Card>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$18,500</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Monthly Revenue</p>
          </Card>
          <Card>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">91%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Avg Profile Complete</p>
          </Card>
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Client Directory
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Client Name</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Industry</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Status</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Completeness</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Monthly Value</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {demoClients.map((client) => (
                  <tr key={client.id}>
                    <td className="py-3 text-slate-900 dark:text-white">{client.name}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{client.industry}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        {client.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-slate-100 rounded-full dark:bg-slate-700">
                          <div className="h-2 bg-accent rounded-full" style={{ width: `${client.completeness}%` }}></div>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{client.completeness}%</span>
                      </div>
                    </td>
                    <td className="py-3 font-semibold text-slate-900 dark:text-white">{client.monthlyValue}</td>
                    <td className="py-3">
                      <button className="rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700">
                        <Settings className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Team Management</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: 'John Doe', role: 'Admin', email: 'john@example.com' },
                { name: 'Sarah Smith', role: 'Editor', email: 'sarah@example.com' },
                { name: 'Mike Johnson', role: 'Viewer', email: 'mike@example.com' },
              ].map((member, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{member.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{member.email}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
            <Button className="mt-4 w-full" variant="outline">Add Team Member</Button>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Billing Plans</h3>
            </div>
            <div className="space-y-3">
              {[
                { plan: 'Professional', clients: 12, price: '$299/mo' },
                { plan: 'Business', clients: 8, price: '$199/mo' },
                { plan: 'Starter', clients: 4, price: '$99/mo' },
              ].map((tier, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{tier.plan}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{tier.clients} clients</p>
                  </div>
                  <p className="font-semibold text-accent">{tier.price}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
