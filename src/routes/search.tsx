import { createFileRoute } from '@tanstack/react-router';
import { Clock, Coins03, LinkExternal01, Calendar, SearchMd} from "@scottylabs/corgi";
import { fakeCourses } from '@/util/fakeinfo';
import React from 'react';

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const COURSES = fakeCourses(10);
  const [query, setQuery] = React.useState("");
  const filtered = COURSES.filter((course) =>
    `${course.code} ${course.title} ${course.department}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <div className="p-6 w-[1094px] p-[50px] pr-[33px] min-h-screen w-full overflow-y-auto">
      <div className="flex-shrink-0  py-[4px] px-[16px] items-center gap-2 flex-[1_0_0] self-stretch"> {/* Search bar */}
        <h4 className="font-medium leading-[1.4] mb-4 flex items-center gap-2 text-[#7A8FA3] font-family-Inter text-[20px]">
          <SearchMd className="flex-shrink-0 w-[20px] h-[20px]"/>
          <input
            type="search"
            value = {query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder = " Search courses by ID, description, name or keyword..."
            className = "w-full border-none outline-none bg-transparent text-fg-brandNeutral-primary placeholder:text-fg-brandNeutral-secondary-enabled font-family-Inter text-[20px]"
          />
         
        </h4>
        
        {/* Course search functionality to be implemented here */}
        <div className="w-[1028px] h-[1px] bg-bg-brandNeutral-primary"></div>
        {filtered.map((course, index) => (
          <div key={index} className="border border-bg-brandNeutral-secondary-pressed p-5 rounded-md shadow-md bg-bg-neutral-primary hover:bg-bg-brandNeutral-subtle-pressed transition mt-4">
            <p className="text-sm font-mono text-fg-brandNeutral-primary mb-2">{course.code}</p>
            <h3 className="text-lg font-medium text-fg-brandNeutral-primary mb-2">{course.title}</h3>
            <p className="text-sm text-fg-brandNeutral-primary mb-2">{course.department}</p>
            <div className="flex gap-1 mb-2">
            </div>
          </div>
        ))}

        <div>
          
        </div>
      </div>
    </div>
  )
}
