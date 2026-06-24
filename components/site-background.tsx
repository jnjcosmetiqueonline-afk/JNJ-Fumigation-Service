// Site-wide ambient background: a faint green grid watermark that fills blank
// space plus soft green "focus" lights down the left and right edges, giving
// the whole site a balanced green-on-black (and green-on-white) feel.
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Faint grid watermark for empty areas */}
      <div className="site-grid absolute inset-0" />

      {/* Left green focus light */}
      <div className="absolute -left-48 top-0 h-full w-[34rem] bg-gradient-to-r from-brand-500/8 via-brand-500/[0.03] to-transparent blur-3xl" />

      {/* Right green focus light */}
      <div className="absolute -right-48 top-0 h-full w-[34rem] bg-gradient-to-l from-brand-500/8 via-brand-500/[0.03] to-transparent blur-3xl" />

      {/* Soft top + bottom green wash to frame the page */}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-500/[0.05] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-brand-600/[0.05] to-transparent" />
    </div>
  );
}
