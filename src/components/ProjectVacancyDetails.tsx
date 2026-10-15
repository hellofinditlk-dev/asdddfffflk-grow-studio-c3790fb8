import type { Vacancy } from "@/data/vacancies";
import { CheckCircle2 } from "lucide-react";

const ProjectVacancyDetails = ({ details }: { details: NonNullable<Vacancy["projectDetails"]> }) => (
  <>
    {[{ id: "how-it-works", title: "From brief to payment in five steps", steps: details.workflow }, { id: "selection", title: "How we hire", steps: details.selection }].map((group) => (
      <section key={group.id} id={group.id} className="py-12 bg-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{group.title}</h2>
          <ol className="grid gap-3">
            {group.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 p-5 bg-card border border-border rounded-lg">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">{index + 1}</span>
                <div><h3 className="font-heading font-bold mb-1">{step.title}</h3><p className="text-sm text-muted-foreground">{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    ))}
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">How you get paid</h2>
        <div className="space-y-4">{details.pay.map((text) => <p key={text} className="text-muted-foreground">{text}</p>)}</div>
      </div>
    </section>
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">Customer data is confidential</h2>
        <ul className="space-y-3">{details.confidentiality.map((text) => <li key={text} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary mt-0.5" /><span>{text}</span></li>)}</ul>
      </div>
    </section>
  </>
);

export default ProjectVacancyDetails;