import { createFileRoute } from '@tanstack/react-router'
import { Button, SearchMd, Upload01, Download01, Calendar, Clock, MarkerPin01, BookClosed } from '@scottylabs/corgi'
import { fakeFinals } from '@/util/fakeinfo';
import React from 'react'

const sampleFinals = fakeFinals(5);

export const Route = createFileRoute('/finals')({
  component: RouteComponent,
})

function RouteComponent() {
  const [query, setQuery] = React.useState('')

  const filtered = React.useMemo(() => {
    if (!query.trim()) return sampleFinals
    const q = query.toLowerCase()
    return sampleFinals.filter(
      (row) =>
        row.code.toLowerCase().includes(q) ||
        row.day.toLowerCase().includes(q) ||
        row.location.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="flex-1 bg-bg-brandNeutral-secondary-enabled px-10 py-8 overflow-y-auto">
      <div className="max-w-[1120px] mx-auto">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-fg-brandNeutral-primary mb-3">
          Final Schedule
        </h1>

        {/* Steps */}
        <div className="text-sm text-gray-700 mb-6">
          <p>1. Download Calendar Export From SIO</p>
          <p>2. Import the .ics file below</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            size="md"
            theme="brand"
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-full"
            icon={<Upload01 className="h-4 w-4" />}
          >
            Upload Schedule
          </Button>

          <Button
            size="md"
            theme="neutral"
            className="bg-white text-black border border-stroke-brandNeutral-1 rounded-full hover:bg-bg-brandNeutral-secondary-enabled/40"
            icon={<Download01 className="h-4 w-4" />}
          >
            SIO Export
          </Button>
        </div>

        {/* Search + result count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-bg-neutral-primary border border-stroke-brandNeutral-1 rounded-lg max-w-[600px]">
            <SearchMd className="h-5 w-5 text-fg-brandNeutral-secondary" />
            <input
              type="search"
              placeholder="Search courses by ID, description, name or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-fg-brandNeutral-primary placeholder:text-fg-brandNeutral-secondary text-[15px]"
            />
          </div>

          <p className="text-sm text-fg-brandNeutral-secondary ml-4">
            {filtered.length} results
          </p>
        </div>

        {/* Table */}
        <div className="border border-stroke-brandNeutral-1 rounded-sm bg-bg-neutral-primary overflow-hidden">
          <div className="grid grid-cols-[140px_240px_140px_140px_1fr] border-b border-stroke-brandNeutral-1 text-base text-gray-700 py-4">
            <HeaderCell icon={<BookClosed />} text="Course" />
            <HeaderCell icon={<Calendar />} text="Day" />
            <HeaderCell icon={<Clock />} text="Start Time" />
            <HeaderCell icon={<Clock />} text="End Time" />
            <HeaderCell icon={<MarkerPin01 />} text="Location" />
          </div>

          {filtered.map((row) => (
            <div
              key={row.code + row.start}
              className="grid grid-cols-[140px_240px_140px_140px_1fr] text-sm"
            >
              <div className="px-3 py-5 text-blue-500 underline cursor-pointer">
                {row.code}
              </div>
              <div className="px-3 py-5 text-gray-700">
                {row.day}
              </div>
              <div className="px-3 py-5 text-gray-700">
                {row.start}
              </div>
              <div className="px-3 py-5 text-gray-700">
                {row.end}
              </div>
              <div className="px-3 py-5 text-gray-700">
                {row.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeaderCell({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="px-3 py-2 flex items-center gap-3">
      <span className="h-5 w-5">{icon}</span>
      {text}
    </div>
  )
}