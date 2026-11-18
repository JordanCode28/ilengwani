import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-5 px-4 py-4 sm:px-8">
      <Bell size={26} className="text-gray-800" />
      <span className="h-10 w-10 rounded-full bg-sun" />
      <span className="text-xl text-brand-700">Lumière</span>
    </header>
  );
}