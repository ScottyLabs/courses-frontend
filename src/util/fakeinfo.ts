import type { Course } from "@/types";

export function fakeCourses(count: number, section: boolean = false) {
  let base: Course = {
    code: `15-122`,
    title: `Principles of Imperative Computation`,
    department: 'Computer Science',
    units: 12,
    fce: 15.5,
    instructors: ['Anne Kohlbrenner', 'Iliano Cervesato']
  };
  if (section) {
    base.section = 'F';
    base.time = '10:00AM - 10:50AM';
  }
  const COURSES = Array.from({ length: count }, () => ({ ...base }));

  return COURSES;
}

export function fakeSchedule(count: number) {
  const SCHEDULE = Array.from({ length: count }, (_, i) => ({
    name: `Schedule ${i + 1}`,
    semester: 'Fall 2023',
    units: 12,
    fce: 15.5,
    courses: fakeCourses(4, true)
  }));

  return SCHEDULE;
}

export function fakeFriends(count: number) {
  const FRIENDS = Array.from({ length: count }, (_, i) => ({
    name: `Andrew Carnegie`,
    department: 'Computer Science',
    sharedCourses: fakeCourses(1)
  }));
  
  return FRIENDS;
}

export function fakeFinals(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    code: `48${300 + i}A`,
    day: 'Monday, December 67',
    start: '8:30 AM',
    end: '11:30 AM',
    location: 'In Person To Be Scheduled after the Mini-2 Add Deadline'
  }));
}