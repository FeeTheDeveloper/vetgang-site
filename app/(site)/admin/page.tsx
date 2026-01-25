import Container from "@/components/ui/Container";
import IntakeTable from "@/components/admin/IntakeTable";

export default function AdminPage() {
  return (
    <main className="flex-1">
      <section className="py-section">
        <Container>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Admin</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Intake review</h1>
            <p className="text-body-md text-slate-200">
              Review new join and contact submissions, adjust status, and keep the verification pipeline moving.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <IntakeTable />
        </Container>
      </section>
    </main>
  );
}
