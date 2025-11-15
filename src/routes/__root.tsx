import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import Header from '@/components/Header'
import CourseHeader from '@/components/CourseHeader'
import Sidebar from '@/components/ProfileSidebar'
import ScheduleSidebar from '@/components/ScheduleSidebar'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => {
    const pathname = useRouterState({ select: (s) => s.location.pathname })

    const header = pathname.startsWith('/course')
      ? <CourseHeader />
      : <Header />;

    const isSchedulePage = pathname.startsWith('/schedules')
    const leftSidebar = isSchedulePage ? (<ScheduleSidebar isOpen={true} onClose={() => { }} />) : (<Sidebar isOpen={true} onClose={() => { }} />)

    return (
      <>
        <div className="App min-h-screen flex flex-col ">
          {header}
          <div className="md:flex flex-1 min-h-0">
            {leftSidebar}
            <Outlet />
          </div>
          <Footer/>
      </div>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </>
    );
  },
})
