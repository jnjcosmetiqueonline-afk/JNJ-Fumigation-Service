"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// Change this to any table in your Supabase project's `public` schema.
const TABLE = "test_messages";

type State =
  | { status: "loading" }
  | { status: "ok"; rows: Record<string, unknown>[] }
  | { status: "error"; code?: string; message: string };

export default function TestSupabasePage() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase.from(TABLE).select("*").limit(20);
      if (!active) return;
      if (error) {
        setState({ status: "error", code: error.code, message: error.message });
      } else {
        setState({ status: "ok", rows: data ?? [] });
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const columns =
    state.status === "ok" && state.rows.length > 0 ? Object.keys(state.rows[0]) : [];

  return (
    <main className="container-px min-h-screen py-24">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">Supabase Connection Test</span>
        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Fetching from{" "}
          <code className="text-gradient">public.{TABLE}</code>
        </h1>

        {/* Status banner */}
        <div className="mt-8">
          {state.status === "loading" && (
            <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">
              Connecting to Supabase…
            </div>
          )}

          {state.status === "ok" && (
            <div className="glass rounded-2xl border-brand-500/30 p-5">
              <p className="font-semibold text-brand-600 dark:text-brand-400">
                ✓ Connected — {state.rows.length} row{state.rows.length === 1 ? "" : "s"} returned
              </p>
            </div>
          )}

          {state.status === "error" && (
            <div className="glass rounded-2xl border-red-500/40 p-5">
              <p className="font-semibold text-red-500">✗ Query failed</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {state.code ? `[${state.code}] ` : ""}
                {state.message}
              </p>
              {state.code === "PGRST205" && (
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    The table <code>public.{TABLE}</code> doesn&apos;t exist yet.
                  </p>
                  <p className="mt-2">
                    Open the Supabase <strong>SQL Editor</strong> and run the snippet below, then
                    reload this page (or change the <code>TABLE</code> constant in{" "}
                    <code>app/test-supabase/page.tsx</code> to one of your own tables).
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-xl bg-muted p-4 text-xs leading-relaxed text-foreground">
{`create table public.test_messages (
  id bigint generated always as identity primary key,
  name text not null,
  message text not null,
  created_at timestamptz default now()
);

insert into public.test_messages (name, message) values
  ('JNJ Bot', 'Supabase is connected!'),
  ('Tester', 'Hello from the test page');

alter table public.test_messages enable row level security;

create policy "Public read access"
  on public.test_messages
  for select
  to anon
  using (true);`}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Data table */}
        {state.status === "ok" && state.rows.length > 0 && (
          <div className="glass mt-6 overflow-x-auto rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  {columns.map((c) => (
                    <th key={c} className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {state.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/60 last:border-0">
                    {columns.map((c) => (
                      <td key={c} className="px-4 py-3 text-muted-foreground">
                        {String(row[c] ?? "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {state.status === "ok" && state.rows.length === 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            The table exists and is readable, but it currently has no rows.
          </p>
        )}

        <a
          href="/"
          className="mt-10 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
        >
          ← Back to site
        </a>
      </div>
    </main>
  );
}
