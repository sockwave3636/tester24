import DashboardShell from "./components/DashboardShell";
import PatientOverview from "./components/PatientOverview";

export default function Home() {
  return (
    <DashboardShell>
      <section className="space-y-3">
        {/* <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Dashboard</h2>
          <p className="mt-2 text-lg text-slate-500">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div> */}
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <PatientOverview />
        </div>
      </section>
    </DashboardShell>
  );
}
