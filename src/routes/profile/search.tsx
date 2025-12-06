import { createFileRoute } from '@tanstack/react-router';
import { Clock, Coins03, LinkExternal01, Calendar, SearchMd } from "@scottylabs/corgi";
import { fakeCourses } from '@/util/fakeinfo';
import React from 'react';
import ProfileLayout from '@/components/ProfileLayout';

export const Route = createFileRoute('/profile/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const numOfResults = 15;
  const COURSES = fakeCourses(numOfResults); // Make a variable for the number of results you get from searching
  const [query, setQuery] = React.useState("");
  const filtered = COURSES.filter((course) =>
    `${course.code} ${course.title} ${course.department}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <div className="pt-5 w-[1125px] pr-[0pxs] min-h-screen w-full overflow-y-auto">

      <div className="flex-shrink-0  py-[4px] px-[16px] items-center gap-2 flex-[1_0_0] self-stretch"> {/* Search bar */}
        <div className='pt-4'><h4 className="font-medium leading-[1.4] mb-4 flex items-center gap-2 text-[#7A8FA3] font-family-Inter text-[20px]">
          <SearchMd className="flex-shrink-0 w-[20px] h-[20px]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses by ID, description, name or keyword..."
            className="w-full border-none outline-none bg-transparent text-fg-s-primary placeholder:text-fg-brandNeutral-secondary-enabled font-family-Inter text-[20px] line-height-28px"
          />

        </h4>

          {/* Course search functionality to be implemented here */}
          <div className="w-[1028px] h-[1px] bg-stroke-brandNeutral-1"></div>
          {/*Result number*/}
        </div>
        <div className="">
          <p className="text-fg-brandNeutral-secondary text-14px font-semibold font-weight-600 mt-5">{filtered.length} results</p>
        </div>
        <div>
          <select
            className="border mb-5 border-bg-brandNeutral-secondary-enabled  bg-bg-brandNeutral-secondary-enabled p-2 rounded-md mt-2"
          >
            <option value="show" className="text-fg-brandNeutral-primary">Show</option>
            <option value="option2" className="text-fg-brandNeutral-primary">NA 1</option>
            <option value="option3" className="text-fg-brandNeutral-primary">NA 2</option>
            <option value="option4" className="text-fg-brandNeutral-primary">NA 3</option>
            <option value="option5" className="text-fg-brandNeutral-primary">NA 4</option>
          </select>
        </div>
      </div>
      <div className="border border-bg-brandNeutral-secondary-enabled  bg-bg-brandNeutral-secondary-enabled p-6">
        {filtered.map((course, index) => (
          <div key={index} className="border border-bg-brandNeutral-secondary-pressed p-5 rounded-md bg-bg-neutral-primary hover:bg-bg-brandNeutral-subtle-pressed transition mt-4">
            <p className="text-sm font-mono text-fg-brandNeutral-primary mb-2">{course.code}</p>
            <p className="text-lg font-medium text-fg-brandNeutral-primary mb-2">{course.title}</p>
            <p className="text-sm text-fg-brandNeutral-primary mb-2">{course.department}</p>
            <div className="flex gap-1 mb-2">
            </div>
          </div>

        ))}

      </div>
    </div >
  )
}