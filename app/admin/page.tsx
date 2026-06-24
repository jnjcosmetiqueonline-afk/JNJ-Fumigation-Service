import { redirect } from "next/navigation";
import { Inbox, Mail, MapPin, Phone } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignOutButton } from "./sign-out-button";

export const dynamic = "force-dynamic";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
  status: string | null;
  created_at: string;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  // Defense in depth — middleware already guards this route.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  const leads = (data ?? []) as Lead[];
  const today = new Date().toDateString();
  const todayCount = leads.filter((l) => new Date(l.created_at).toDateString() === today).length;
  const newCount = leads.filter((l) => (l.status ?? "New") === "New").length;

  return (
    <main className="container-px min-h-screen py-24">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="eyebrow">Admin Dashboard</span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Leads <span className="text-gradient">Inbox</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Signed in as {user.email}</p>
        </div>
        <SignOutButton />
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Leads", value: leads.length },
          { label: "New", value: newCount },
          { label: "Today", value: todayCount },
        ].map((s) => (
          <div key={s.label} className="glow-card rounded-2xl p-5">
            <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {error && (
        <div className="glass mt-6 rounded-2xl border-red-500/40 p-5 text-sm">
          <p className="font-semibold text-red-500">Could not load leads</p>
          <p className="mt-1 text-muted-foreground">
            [{error.code}] {error.message}
          </p>
          <p className="mt-2 text-muted-foreground">
            If this is an RLS error, add a SELECT policy for the <code>authenticated</code> role on
            the <code>leads</code> table.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!error && leads.length === 0 && (
        <div className="glow-card mt-8 flex flex-col items-center justify-center rounded-3xl p-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-brand-500">
            <Inbox className="h-7 w-7" />
          </span>
          <p className="mt-4 font-display text-lg font-semibold">No leads yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Submissions from the contact form will appear here.
          </p>
        </div>
      )}

      {/* Desktop table */}
      {leads.length > 0 && (
        <>
          <div className="glass mt-8 hidden overflow-x-auto rounded-2xl lg:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Contact</th>
                  <th className="px-4 py-3 font-semibold">Location</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Message</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-b border-border/60 align-top last:border-0">
                    <td className="px-4 py-3 font-medium">{l.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      <span className="block">{l.phone}</span>
                      <span className="block text-xs">{l.email}</span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{l.location}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.service}</td>
                    <td className="max-w-xs px-4 py-3 text-muted-foreground">{l.message}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                        {l.status ?? "New"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-muted-foreground">
                      {formatDate(l.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-8 space-y-4 lg:hidden">
            {leads.map((l) => (
              <div key={l.id} className="glow-card rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display font-semibold">{l.name}</p>
                  <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                    {l.status ?? "New"}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-500" /> {l.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-500" /> {l.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-500" /> {l.location}
                  </p>
                </div>
                <p className="mt-3 text-sm font-medium">{l.service}</p>
                <p className="mt-1 text-sm text-muted-foreground">{l.message}</p>
                <p className="mt-3 text-xs text-muted-foreground">{formatDate(l.created_at)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
