'use client'

import AppLayout from '@/components/AppLayout'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { socialPostTemplates } from '@/data/demoData'
import { Instagram, Facebook, Linkedin, Twitter, Mail, Video, Hash } from 'lucide-react'

export default function MarketingSuitePage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Digital Marketing Suite</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create engaging marketing content across all platforms
          </p>
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Social Media Post Creator
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                <Instagram className="h-4 w-4" />
                Instagram
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                <Facebook className="h-4 w-4" />
                Facebook
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                <Twitter className="h-4 w-4" />
                Twitter
              </button>
            </div>
            <textarea
              placeholder="Describe your post idea..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              rows={4}
            />
            <Button>Generate Post</Button>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {socialPostTemplates.map((template, idx) => (
            <Card key={idx}>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{template.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{template.content}</p>
              <Button variant="outline" size="sm" className="w-full">Use Template</Button>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email Marketing</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  placeholder="Generate compelling subject line..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
              <Button variant="outline">Generate Email Copy</Button>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4">
              <Video className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Video Script Generator</h3>
            </div>
            <div className="space-y-4">
              <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option>Product Demo</option>
                <option>Customer Testimonial</option>
                <option>Feature Highlight</option>
                <option>Tutorial</option>
              </select>
              <Button variant="outline">Generate Script</Button>
            </div>
          </Card>
        </div>

        <Card>
          <div className="flex items-center gap-3 mb-4">
            <Hash className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Hashtag Research</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['#EnterpriseSoftware', '#BusinessTech', '#DigitalTransformation', '#CloudComputing', '#ITServices', '#SaaS', '#BusinessAutomation', '#TechSolutions'].map((tag, idx) => (
              <span key={idx} className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </AppLayout>
  )
}
