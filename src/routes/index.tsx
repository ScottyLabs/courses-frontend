import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Profile from "@/components/ProfileSidebar";
import Header from "@/components/Header";

export const Route = createFileRoute("/")({
  component: App
});

function App() {
  return (
    <>
      {}
    </>
  );
}
