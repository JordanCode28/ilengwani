import type { ReactNode } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { AppHeader } from "@/components/Layout/AppHeader";
import { BottomNav } from "@/components/Layout/BottomNav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-text">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 px-4 pb-24 md:px-10 md:pb-10">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}