import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-2xl text-blue-400">Hello "/"!</div>;
}
