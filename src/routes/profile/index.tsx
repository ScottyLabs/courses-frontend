import { useEffect } from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
})

function RouteComponent(): ReactElement | null {
  const router = useRouter()

  useEffect(() => {
    // Navigate to the Saved tab immediately when visiting /profile
    router.navigate({ to: '/profile/saved', replace: true })
  }, [router])

  // Nothing to render here — we immediately redirect
  return null
}
