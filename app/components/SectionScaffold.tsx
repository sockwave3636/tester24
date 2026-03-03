import DashboardShell from "./DashboardShell";

export default function SectionScaffold({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell>
      <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <p className="mt-2 text-lg leading-7 text-slate-500">{subtitle}</p>
        <div className="mt-5 min-w-0">{children}</div>
      </section>
    </DashboardShell>
  );
}
