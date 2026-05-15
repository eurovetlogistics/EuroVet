import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import {
  LayoutDashboard,
  FileText,
  Inbox,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { LogoutButton } from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/posts", label: "Articole blog", icon: FileText },
    { href: "/admin/submissions", label: "Mesaje contact", icon: Inbox },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      <aside className="w-64 bg-brand-950 text-white flex flex-col fixed inset-y-0 left-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center font-bold">
              E
            </div>
            <div>
              <div className="font-bold leading-tight">Eurovet</div>
              <div className="text-xs text-white/50">Admin</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition text-sm"
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-xs text-white/50 hover:text-white"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Vezi site-ul
          </Link>
          <div className="text-xs text-white/40 truncate">{session.email}</div>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
