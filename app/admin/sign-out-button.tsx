"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={loading}
      className="btn-ghost !px-5 !py-2.5 text-xs disabled:opacity-70"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
      Sign Out
    </button>
  );
}
