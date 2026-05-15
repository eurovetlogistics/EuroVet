"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }
  return (
    <button
      onClick={logout}
      className="w-full inline-flex items-center justify-center gap-2 text-xs bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg transition"
    >
      <LogOut className="w-3.5 h-3.5" />
      Deconectare
    </button>
  );
}
