"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, LogIn, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setLoading(false);
      setError(error.message || "Login failed. Check your credentials.");
      return;
    }

    // Full navigation so middleware re-evaluates the new session cookie.
    router.replace(redirectTo);
    router.refresh();
  };

  return (
    <div className="glass-strong w-full max-w-md rounded-[2rem] p-8 shadow-soft">
      <div className="flex flex-col items-center text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
          <ShieldCheck className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-display text-2xl font-bold tracking-tight">Admin Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Sign in to manage JNJ Fumigation leads.
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Email
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass w-full rounded-2xl bg-transparent py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-brand-500/60"
              placeholder="admin@jnjfumigation.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass w-full rounded-2xl bg-transparent py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-brand-500/60"
              placeholder="••••••••"
            />
          </div>
        </div>

        {error && (
          <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Signing in…
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" /> Sign In
            </>
          )}
        </button>
      </form>

      <a href="/" className="mt-6 block text-center text-xs text-muted-foreground hover:text-brand-500">
        ← Back to website
      </a>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="container-px grid min-h-screen place-items-center py-24">
      <div className="grid-glow pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-center"
      >
        <Suspense fallback={<div className="text-sm text-muted-foreground">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </motion.div>
    </main>
  );
}
