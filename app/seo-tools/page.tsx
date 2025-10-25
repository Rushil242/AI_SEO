'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { demoKeywords } from '@/data/demoData'
import { Search, TrendingUp, Users, MapPin } from 'lucide-react'

export default function SEOToolsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Local SEO Tools</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Optimize your local search presence and rankings
          </p>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Keyword Research</h3>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter industry or service keywords..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <Button>Research Keywords</Button>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Keyword</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Volume</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Difficulty</th>
                  <th className="pb-3 font-medium text-slate-900 dark:text-white">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {demoKeywords.map((kw, idx) => (
                  <tr key={idx}>
                    <td className="py-3 text-slate-900 dark:text-white">{kw.keyword}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-400">{kw.volume}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                        kw.difficulty === 'Low' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : kw.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {kw.difficulty}
                      </span>
                    </td>
                    <td className="py-3">
                      <TrendingUp className={`h-4 w-4 ${kw.trend === 'up' ? 'text-green-600' : 'text-slate-400'}`} />
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
              <Users className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Competitor Analysis</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: 'TechSolutions Inc', ranking: 3, traffic: '12.5K' },
                { name: 'Digital Services Pro', ranking: 7, traffic: '8.2K' },
                { name: 'CloudTech Systems', ranking: 11, traffic: '5.7K' },
              ].map((comp, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{comp.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Ranking: #{comp.ranking}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-accent">{comp.traffic}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">monthly visits</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Maps Optimization</h3>
            </div>
            <div className="aspect-video rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">Map View Placeholder</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Local Ranking</span>
                <span className="font-semibold text-slate-900 dark:text-white">#4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Visibility Score</span>
                <span className="font-semibold text-accent">82%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
