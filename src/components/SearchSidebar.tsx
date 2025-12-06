import { ChevronLeft, ChevronDown, GlobeSlated01, GlobeSlated02, Calendar, BookOpen02, GraduationHat01, Coins03 }
    from '@scottylabs/corgi';
import { useState } from 'react';

interface SearchSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchSidebar({ isOpen, onClose }: SearchSidebarProps) {
    if (!isOpen) return null;

    // State
    const [deptOpen, setDeptOpen] = useState(true);
    const [unitsOpen, setUnitsOpen] = useState(true);
    const [offeredOpen, setOfferedOpen] = useState(false);
    const [levelOpen, setLevelOpen] = useState(false);
    const [genEdOpen, setGenEdOpen] = useState(false);
    const [units, setUnits] = useState(12);
    const [fceSemester, setFceSemester] = useState('None');
    const [fceSpring, setFceSpring] = useState(true);
    const [fceSummer, setFceSummer] = useState(false);
    const [fceFall, setFceFall] = useState(true);
    const [fcesOpen, setFcesOpen] = useState(false);

    return (
        <aside className="w-[418px] bg-white border-r border-stroke-brandNeutral-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-[18px] leading-[26px] font-medium text-fg-brandNeutral-primary">
                    Filter by
                </h2>

                <button
                    onClick={onClose}
                    className="flex items-center gap-1 text-fg-brandNeutral-primary hover:bg-bg-brandNeutral-secondary-enabled px-2 py-1 rounded-md cursor-pointer"
                >
                    Hide
                    <ChevronLeft className="h-4 w-4" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">

                {/* Department */}
                <div>
                    <button
                        className="flex items-left w-full text-left text-fg-brandNeutral-primary font-medium"
                        onClick={() => setDeptOpen(!deptOpen)}
                    >
                        <div className='flex items-center gap-2'>
                            <GraduationHat01 className="h-5 w-5" />
                            <span>Department</span>

                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${deptOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {deptOpen && (
                        <div className="mt-3">
                            <select className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-sm">
                                <option>None</option>
                                <option>CS</option>
                                <option>MATH</option>
                                <option>PHYS</option>
                                <option>CIT</option>
                            </select>
                        </div>
                    )}
                </div>

                {/* Units */}
                <div>
                    <button
                        className="flex items-center justify-between w-full text-left text-fg-brandNeutral-primary font-medium"
                        onClick={() => setUnitsOpen(!unitsOpen)}
                    >
                        <div className='flex items-center gap-2'>
                            <Coins03 className="h-5 w-5" />
                            <span>Units</span>
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${unitsOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {unitsOpen && (
                        <div className="mt-4">
                            <div className='flex items-center justify-between gap-5 mt-2'>
                                {/* Slider */}
                                <input
                                    type="range"
                                    min="0"
                                    max="24"
                                    value={units}
                                    onChange={(e) => setUnits(Number(e.target.value))}
                                    className="w-full"
                                />

                                <div className="text-[14px] text-fg-brandNeutral-primary whitespace-nowrap">
                                    <span>0-24</span>
                                    {/* <span>24</span> */}
                                </div>
                            </div>
                            {/* Unit pills */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {[6, 9, 12, 15].map((u) => (
                                    <button
                                        key={u}
                                        className={`px-3 py-1 rounded-full border text-sm ${units === u
                                            ? "bg-bg-brandNeutral-subtle-pressed border-none"
                                            : "border-stroke-brandNeutral-1"
                                            }`}
                                        onClick={() => setUnits(u)}
                                    >
                                        {u} Units
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Offered in */}
                <div>
                    <button
                        className="flex items-center justify-between w-full text-left text-fg-brandNeutral-primary font-medium"
                        onClick={() => setOfferedOpen(!offeredOpen)}
                    >
                        <div className='flex items-center gap-2'>
                            <Calendar className="h-5 w-5" />
                            Offered in
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${offeredOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {offeredOpen && (
                        <div className="mt-3">
                            <select className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-sm">
                                <option>Fall</option>
                                <option>Spring</option>
                                <option>Summer</option>
                            </select>
                        </div>
                    )}
                </div>

                {/* Course level*/}
                <div>
                    <button
                        className="flex items-center justify-between w-full text-left text-fg-brandNeutral-primary font-medium"
                        onClick={() => setLevelOpen(!levelOpen)}
                    >
                        <div className='flex items-center gap-2'>
                            <BookOpen02 className="h-5 w-5" />
                            Course Level
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${levelOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {levelOpen && (
                        <div className="mt-3">
                            <select className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-sm">
                                <option>None</option>
                                <option>100-level</option>
                                <option>200-level</option>
                                <option>300-level</option>
                                <option>400-level</option>
                            </select>
                        </div>
                    )}
                </div>


                {/* Gened */}
                <div>
                    <button
                        className="flex items-center justify-between w-full text-left text-fg-brandNeutral-primary font-medium"
                        onClick={() => setGenEdOpen(!genEdOpen)}
                    >
                        <div className='flex items-center gap-2'>
                            <GlobeSlated02 className="h-5 w-5" />
                            GenEd
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${genEdOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {genEdOpen && (
                        <div className="mt-3 space-y-3">
                            <select className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-sm">
                                <option>Select College</option>
                                <option>SCS</option>
                                <option>CIT</option>
                            </select>

                            <select className="w-full bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-sm">
                                <option>Select GenEd Category</option>
                                <option>Humanities</option>
                                <option>Science</option>
                                <option>Society</option>
                            </select>
                        </div>
                    )}
                    <button
                        className="w-full bg-bg-brandNeutral-secondary-enabled rounded-[100px] py-2 mt-[24px] text-sm"
                        onClick={() => {
                            setDeptOpen(true);
                            setUnits(12);
                            setOfferedOpen(false);
                            setLevelOpen(false);
                            setGenEdOpen(false);
                            setFcesOpen(false);
                            // Reset FCE values
                            setFceSemester("None");
                            setFceSpring(true);
                            setFceSummer(false);
                            setFceFall(true);

                        }}
                    >
                        Reset
                    </button>

                </div>
                {/* aggregate FCEs */}

                <div className="pt-6 border-t border-stroke-brandNeutral-1">
                    <h3 className="text-[18px] leading-[26px] font-medium text-fg-brandNeutral-primary mb-4">Aggregate FCEs</h3>
                    <div className='flex items-center justify-between gap-5 mt-2'>
                        <label className="block text-[14px] leading-[20px] font-semibold text-fg-brandNeutral-primary mb-2 whitespace-nowrap">
                            Semesters to show
                        </label>
                        <select
                            value={fceSemester}
                            onChange={(e) => setFceSemester(e.target.value)}
                            className="w-full px-[14px] bg-white border border-stroke-brandNeutral-1 rounded-lg px-3 py-2 text-fg-brandNeutral-primary focus:outline-none mb-4"
                        >

                            <option>None</option>
                            <option>Spring</option>
                            <option>Summer</option>
                            <option>Fall</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-6 text-sm'>
                        <label className='inline-flex items-center gap-2 cursor-pointer'>
                            <input
                                className="h-4 w-4 accent-fg-brand-primary"
                                type="checkbox"
                                checked={fceSpring}
                                onChange={(e) => setFceSpring(e.target.checked)}
                            />
                            <span>Spring</span>
                        </label>

                        <label className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                                className="h-4 w-4 accent-fg-brand-primary"
                                type="checkbox"
                                checked={fceSummer}
                                onChange={(e) => setFceSummer(e.target.checked)}
                            />
                            <span>Summer</span>
                        </label>

                        <label className="inline-flex items-center gap-2 cursor-pointer">
                            <input
                                className="h-4 w-4 accent-fg-brand-primary"
                                type="checkbox"
                                checked={fceFall}
                                onChange={(e) => setFceFall(e.target.checked)}
                            />
                            <span>Fall</span>
                        </label>
                    </div>
                </div>


            </div>
        </aside>
    );
}