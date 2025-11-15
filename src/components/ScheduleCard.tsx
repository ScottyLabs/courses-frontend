import type { Schedule } from "@/types";
import { Clock, Coins03, LinkExternal01 } from "@scottylabs/corgi";

interface ScheduleProps {
    schedule: Schedule
}

export default function ScheduleCard({ schedule }: ScheduleProps) {
    return (
        <div className="border border-bg-brandNeutral-secondary-pressed p-5 rounded-md shadow-md bg-bg-neutral-primary hover:bg-bg-brandNeutral-subtle-pressed transition">
            <div className="flex justify-between gap-1">
                <div className="flex gap-2 items-center text-fg-brandNeutral-primary">
                    <h2 className="text-lg font-medium">{schedule.name}</h2>
                </div>
                <LinkExternal01 className="cursor-pointer text-fg-brandNeutral-primary mt-[-4px] hover:text-fg-brand-secondary" />
            </div>
            <div className="my-1 flex align-center align-self-stretch items-center justify-center md:justify-between gap-2">
                <p className="text-sm text-fg-brandNeutral-primary text-fg-brandNeutral-secondary">{schedule.semester}</p>
                <div className="mt-2 text-fg-brandNeutral-primary flex gap-2 font-semibold">
                    <span className="flex items-center justify-center text-sm pr-2 border-r-2 border-bg-brandNeutral-secondary-hover"><Coins03 className="h-5" />{schedule.units} units</span>
                    <span className="flex items-center justify-center text-sm"><Clock className="h-5" /> {schedule.fce} hrs/week</span>
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                {schedule.courses.map((course) => (
                    <div 
                        key={course.code} 
                        className="mt-2 border rounded-lg p-1 border-stroke-brandNeutral-1 text-xs font-[450] cursor-pointer"
                        title={course.title}
                    >
                        <p className="text-fg-brandNeutral-primary">{course.code}</p>
                    </div>
                ))}
            </div>
            

        </div>
    );
}