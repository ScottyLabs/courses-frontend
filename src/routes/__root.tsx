import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import Header from '@/components/Header'
// import CourseHeader from '@/components/CourseHeader'
import Sidebar from '@/components/ProfileSidebar'
import ScheduleSidebar from '@/components/ScheduleSidebar'
import SearchSidebar from '@/components/SearchSidebar'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => {
    const pathname = useRouterState({ select: (s) => s.location.pathname })
    // The reason why there was a problem with the search.tsx in the course folder was becuase
    // of the line below, which was the CourseHeader having the wrong formatting.
    // So basically everything but the search.tsx file was using the Header component,
    // while the search.tsx file was using the CourseHeader component, which caused a conflict.
    const header = pathname.startsWith('/course')
      ? <Header /> // Just changed CourseHeader to Header
      : <Header />;

    const isSchedulePage = pathname.startsWith('/schedules')
    const isSearchPage = pathname.includes('search')

    let leftSidebar; //= isSchedulePage ? (<ScheduleSidebar isOpen={true} onClose={() => { }} />) : (<Sidebar isOpen={true} onClose={() => { }} />)

    if (isSearchPage) {
      leftSidebar = <SearchSidebar isOpen = {true} onClose={()=> { }} />;
    } else if (isSchedulePage) {
      leftSidebar = <ScheduleSidebar isOpen={true} onClose={() => { }} />;
    } else {
      leftSidebar = <Sidebar isOpen={true} onClose={() => { }} />;
    }

    return (
      <>
        <div className="App min-h-screen flex flex-col ">
          {header}
          <div className="md:flex flex-1 min-h-0">
            {leftSidebar}
            <Outlet />
          </div>
          <Footer />
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
