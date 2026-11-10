"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appNav } from "@/config/navigation";
import { isActivePath } from "@/lib/IsActivePath";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-surface bg-white px-2 py-2 md:hidden"
    >
      {appNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-medium ${
              active ? "bg-surface" : ""
            }`}
          >
            <Image src={item.icon} alt="" width={24} height={24} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}