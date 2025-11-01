import ScheduleListing from '@/components/ScheduleListing';
import { fakeSchedule } from '@/util/fakeinfo';
import { ChevronDown } from '@scottylabs/corgi';
import { createFileRoute } from '@tanstack/react-router';
import ProfileLayout from '@/components/ProfileLayout';

export const Route = createFileRoute('/profile/schedule')({
  component: RouteComponent,
})

const schedule = fakeSchedule(5);

const SEMESTERS = ["Fall", "Spring", "Summer"];

function RouteComponent() {
    return (
        <ProfileLayout>
        <div className="flex flex-col w-full">
            <div className="p-6 bg-white">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Schedule</h1>

                <div className="flex gap-4 mb-6 max-w-3xs">
            
                    <div className="relative flex-1">
                        <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Semester</option>
                            {SEMESTERS.map((semester) => (
                                <option key={semester} value={semester}>{semester}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>
            <ScheduleListing schedules={schedule} />
        </div>
        </ProfileLayout>
    );
}