import { createFileRoute } from '@tanstack/react-router'
import { ChevronDown } from '@scottylabs/corgi';
import CourseListing from '@/components/CourseListing';
import {fakeCourses} from '@/util/fakeinfo';
import ProfileLayout from '@/components/ProfileLayout';

export const Route = createFileRoute('/profile/current')({
  component: RouteComponent,
})

const courses = fakeCourses(10, true);


const DEPARTMENTS = ['48XXX Architecture', '60XXX Art', '18 Electrical & Computer Engineering'];
const LEVELS = ['0XX-2XX', '3XX-4XX', '5XX-6XX', '7XX-9XX'];

function RouteComponent() {
    return (
        <ProfileLayout>
        <div className="flex flex-col w-full">
            <div className="p-6 bg-white">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">Currently Taking</h1>

                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Department</option>
                            {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>

                    <div className="relative flex-1">
                        <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="">Course Level</option>
                            {LEVELS.map((level) => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>
            <CourseListing courses={courses} />
        </div>
        </ProfileLayout>
    );
}