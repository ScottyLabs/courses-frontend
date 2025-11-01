import { PlusCircle, ChevronDown, ChevronLeft } from '@scottylabs/corgi'
import { useEffect, useMemo, useState } from 'react'
import type { Schedule } from '@/types'
import { fakeSchedule } from '@/util/fakeinfo'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const SEMESTERS = ['Fall', 'Spring', 'Summer']

export default function ScheduleSidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null

  const [schedules] = useState<Schedule[]>(() => fakeSchedule(4))
  const [activeSchedule, setActiveSchedule] = useState<string>(
    schedules[0]?.name ?? 'Untitled',
  )
  const [semesterFilter, setSemesterFilter] = useState<string>('')
  const [showSpring, setShowSpring] = useState(true)
  const [showSummer, setShowSummer] = useState(false)
  const [showFall, setShowFall] = useState(true)

  const active = useMemo(
    () => schedules.find((s) => s.name === activeSchedule) ?? schedules[0],
    [activeSchedule, schedules],
  )

  useEffect(() => {
    setSemesterFilter(active?.semester || '')
  }, [active])

  const semesterOptions = useMemo(() => {
    const u = new Set<string>()
    schedules.forEach((s) => u.add(s.semester))
    return u.size ? Array.from(u) : SEMESTERS
  }, [schedules])

  return (
    <aside className="w-80 bg-white border-r border-bg-brandNeutral-subtle-pressed flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-stroke-brandNeutral-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-fg-brandNeutral-primary">Schedule</span>
          <button
            aria-label="Add schedule"
            className="flex items-center justify-center h-6 w-6 rounded-full border border-stroke-brandNeutral-1 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-secondary-enabled cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-secondary-enabled px-2 py-1 rounded-md cursor-pointer"
        >
          Hide
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      
      <div className="px-4 pt-4">
        <label className="block text-sm text-fg-brandNeutral-secondary mb-2">Schedule</label>
        <div className="relative">
          <select
            className="w-full appearance-none bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 pr-8 text-fg-brandNeutral-primary focus:outline-none"
            value={activeSchedule}
            onChange={(e) => setActiveSchedule(e.target.value)}
          >
            {schedules.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-brandNeutral-secondary pointer-events-none" />
        </div>
      </div>

      
      <div className="px-4 pt-6">
        <h4 className="text-sm font-medium text-fg-brandNeutral-primary mb-3">Schedule Calendar</h4>
        <label className="block text-sm text-fg-brandNeutral-secondary mb-2">Semester</label>
        <div className="relative">
          <select
            className="w-full appearance-none bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 pr-8 text-fg-brandNeutral-primary focus:outline-none"
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="">Select Semester</option>
            {semesterOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-brandNeutral-secondary pointer-events-none" />
        </div>
      </div>

      {/* Selected courses within active schedule */}
      <div className="px-4 pt-6">
        {active?.courses?.map((c) => {
          const pills = ['A', 'B', 'C', 'D', 'E']
          if (c.section && !pills.includes(c.section)) pills.push(c.section)
          return (
            <div key={c.code} className="mb-3">
              <div className="flex items-center gap-3 border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 bg-bg-brandNeutral-secondary-enabled">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-fg-brand-primary"
                  defaultChecked
                  aria-label={`Toggle ${c.code}`}
                />
                <div className="flex-1 text-sm text-fg-brandNeutral-primary font-medium">
                  {c.code} (Select Section)
                  <div className="text-xs font-normal text-fg-brandNeutral-secondary">{c.title}</div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {pills.map((sec) => (
                  <button
                    key={sec}
                    className={`text-sm px-3 py-1 rounded-md border border-stroke-brandNeutral-1 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-subtle-pressed ${
                      c.section === sec ? 'bg-bg-brandNeutral-subtle-pressed' : ''
                    }`}
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Aggregate FCEs */}
      <div className="px-4 pt-6">
        <h4 className="text-sm font-medium text-fg-brandNeutral-primary mb-3">Aggregate FCEs</h4>
        <label className="block text-sm text-fg-brandNeutral-secondary mb-2">Semesters to show</label>
        <input
          className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-fg-brandNeutral-secondary"
          placeholder="None"
          readOnly
        />
        <div className="flex items-center gap-6 mt-3 text-sm">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 accent-fg-brand-primary" checked={showSpring} onChange={(e) => setShowSpring(e.target.checked)} />
            <span>Spring</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 accent-fg-brand-primary" checked={showSummer} onChange={(e) => setShowSummer(e.target.checked)} />
            <span>Summer</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 accent-fg-brand-primary" checked={showFall} onChange={(e) => setShowFall(e.target.checked)} />
            <span>Fall</span>
          </label>
        </div>
      </div>

      <div className="mt-auto p-4 text-xs text-fg-brandNeutral-secondary">
        Designed, developed and maintained with ❤️ by ScottyLabs.
      </div>
    </aside>
  )
}
