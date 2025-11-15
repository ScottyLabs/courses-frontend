import { createFileRoute } from '@tanstack/react-router'
import { Button, ChevronDown, Edit02, SearchMd, XClose } from '@scottylabs/corgi'
import { fakeSchedule } from '@/util/fakeinfo'
import React from 'react'

export const Route = createFileRoute('/schedules')({
  component: RouteComponent,
})

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const TIME_LABELS = [
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM'
]

function RouteComponent() {
  const [query, setQuery] = React.useState('')
  const [visibleCourseCodes, setVisibleCourseCodes] = React.useState<string[]>([])

  const schedule = React.useMemo(() => {
    const [first] = fakeSchedule(1)
    return first
  }, [])

  React.useEffect(() => {
    if (schedule && schedule.courses.length) {
      setVisibleCourseCodes(schedule.courses.map((course) => course.code))
    }
  }, [schedule])

  const totalUnits = React.useMemo(
    () => schedule?.courses.reduce((sum, course) => sum + course.units, 0) ?? 0,
    [schedule],
  )

  const totalHours = React.useMemo(
    () => schedule?.courses.reduce((sum, course) => sum + course.fce, 0) ?? 0,
    [schedule],
  )

  return (
    <div className="flex-1 bg-bg-brandNeutral-secondary-enabled px-10 py-8 overflow-y-auto">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl font-semibold text-fg-brandNeutral-primary">
            {schedule?.name ?? 'Untitled'}
          </h1>
          <button
            type="button"
            aria-label="Rename schedule"
            className="p-1 rounded-full text-fg-brandNeutral-secondary hover:bg-bg-brandNeutral-secondary-enabled cursor-pointer"
          >
            <Edit02 className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-bg-neutral-primary border border-stroke-brandNeutral-1 rounded-lg">
              <SearchMd className="h-5 w-5 text-fg-brandNeutral-secondary" />
              <input
                type="search"
                placeholder="Search courses by ID, description, name or keyword..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent outline-none border-none text-fg-brandNeutral-primary placeholder:text-fg-brandNeutral-secondary text-[15px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {schedule?.courses
                .filter((course) => visibleCourseCodes.includes(course.code))
                .map((course) => (
                  <div
                    key={course.code}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-stroke-brandNeutral-1 bg-bg-neutral-primary text-xs text-fg-brandNeutral-primary"
                  >
                    <span className="font-medium">{course.code}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${course.code} from filters`}
                      className="flex items-center justify-center text-fg-brandNeutral-secondary hover:text-fg-brandNeutral-primary"
                      onClick={() =>
                        setVisibleCourseCodes((prev) =>
                          prev.filter((code) => code !== course.code),
                        )
                      }
                    >
                      <XClose className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
            </div>

            <Button
              size="sm"
              theme="neutral"
              icon={<ChevronDown className="h-4 w-4" />}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-bg-neutral-primary border border-stroke-brandNeutral-1 text-fg-brandNeutral-primary"
            >
              Show
            </Button>
          </div>
        </div>

        <div className="mt-2 mb-4">
          <p className="text-xs text-fg-brandNeutral-secondary">Total Workload</p>
          <p className="mt-1 text-sm text-fg-brandNeutral-primary">
            {totalUnits} Units <span className="mx-1 text-stroke-brandNeutral-1">|</span>
            {totalHours.toFixed(2)} hrs/week
          </p>
        </div>

        <ScheduleCalendar />
      </div>
    </div>
  )
}

function ScheduleCalendar() {
  return (
    <div className="border border-stroke-brandNeutral-1 rounded-lg bg-bg-neutral-primary overflow-hidden">
      <div className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] bg-bg-brandNeutral-secondary-enabled/40 border-b border-stroke-brandNeutral-1 text-xs text-fg-brandNeutral-secondary">
        <div className="px-3 py-2" />
        {DAYS.map((day) => (
          <div key={day} className="px-3 py-2 text-center">
            {day}
          </div>
        ))}
      </div>

      <div>
        {TIME_LABELS.map((label) => (
          <div
            key={label}
            className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] text-xs"
          >
            <div className="px-3 py-2 border-t border-stroke-brandNeutral-1 text-fg-brandNeutral-secondary">
              {label}
            </div>
            {DAYS.map((day) => (
              <div
                key={`${day}-${label}`}
                className="border-t border-l border-stroke-brandNeutral-1 h-10"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
