import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 min-h-0">
      {/* Sidebar */}
      <aside className="w-64 border-r border-stroke-brandNeutral-1 bg-white p-4 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-3">
          <label className="block text-sm text-fg-brandNeutral-secondary">Department</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>All</option>
            <option>Computer Science</option>
            <option>Electrical & Computer Engineering</option>
          </select>

          <label className="block text-sm text-fg-brandNeutral-secondary">Level</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>All</option>
            <option>100-200</option>
            <option>300-400</option>
          </select>

          <label className="block text-sm text-fg-brandNeutral-secondary">Semester</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>All</option>
            <option>Fall</option>
            <option>Spring</option>
          </select>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-3xl">
          <div className="mb-6">
            <label htmlFor="course-search" className="sr-only">Search courses</label>
            <div className="relative">
              <input id="course-search" className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10" placeholder="Search courses, instructors, or keywords" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-fg-brandNeutral-primary text-fg-neutral-onInverse rounded-md">Search</button>
            </div>
          </div>

          <div className="text-sm text-fg-brandNeutral-secondary">No results yet. Use the search bar to find courses.</div>
        </div>
      </main>
    </div>
  )
}
