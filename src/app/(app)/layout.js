import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pb-6">
        <Header />
        <main className="px-4 sm:px-8">{children}</main>
      </div>
    </div>
  );
}