import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/finals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/finals"!</div>
}