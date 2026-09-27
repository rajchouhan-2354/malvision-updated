import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Malvion Technologies" },
      {
        name: "description",
        content:
          "AI, Cloud, Web, Frontend, and Backend services from Malvion Technologies.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    eyebrow: "01",
    title: "AI Solutions",
    desc: "From prototype to production: ML pipelines, LLM-powered features, RAG systems, computer vision, and intelligent automation.",
    items: ["LLM & RAG apps", "Predictive ML models", "Document intelligence", "AI agents & assistants"],
  },
  {
    eyebrow: "02",
    title: "Cloud Services",
    desc: "Cloud architecture done right — secure, observable, and cost-aware infrastructure on AWS, GCP, Azure, and Cloudflare.",
    items: ["Cloud migration", "Kubernetes & serverless", "CI/CD & DevOps", "Cost & security audits"],
  },
  {
    eyebrow: "03",
    title: "Web Development",
    desc: "Marketing sites, dashboards, and SaaS platforms with modern stacks and a relentless focus on performance.",
    items: ["SaaS platforms", "Marketing sites", "E-commerce", "Headless CMS"],
  },
  {
    eyebrow: "04",
    title: "Frontend Engineering",
    desc: "Polished, accessible interfaces in Angular, React, and Vue — design systems, micro-frontends, and complex UI.",
    items: ["React & Next.js", "Angular", "Vue & Nuxt", "Design systems"],
  },
  {
    eyebrow: "05",
    title: "Backend Engineering",
    desc: "Robust APIs and services in Node.js and Python. Postgres, queues, microservices, and event-driven architectures.",
    items: ["Node.js / TypeScript", "Python", "Postgres & Redis", "REST & GraphQL APIs"],
  },
  {
    eyebrow: "06",
    title: "Product Engineering",
    desc: "End-to-end teams that own discovery, design, and delivery. Embed with your team or run as a standalone squad.",
    items: ["Discovery sprints", "MVP delivery", "Long-term partnerships", "Team augmentation"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container-lux mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-8">
            Capabilities
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-medium text-primary leading-[0.95] tracking-tight max-w-[1200px]">
            A focused suite of <br className="hidden md:block" />
            <span className="text-secondary/70">engineering services.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-secondary/90 font-light leading-relaxed">
            We work across the full stack — from intelligent backends to
            polished interfaces. Pick a single service or compose your own
            engagement.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-lux mx-auto">
          <div className="flex flex-col border-x border-border divide-y divide-border">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-24 p-8 md:p-16 hover:bg-background transition-colors duration-500"
              >
                <div className="lg:w-1/4 flex flex-col">
                  <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
                    {s.eyebrow}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-primary leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:w-3/4 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                  <p className="flex-1 text-lg md:text-xl text-secondary/90 font-light leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="flex-1 flex flex-col gap-4">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-4 text-sm font-medium text-primary">
                        <span className="h-[1px] w-4 bg-border" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background border-y border-border py-24">
        <div className="container-lux mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-primary leading-tight tracking-tight mb-4">
              Not sure which service fits? <br />
              <span className="text-secondary/70">Let's scope it together.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white text-sm font-semibold hover:bg-black transition-colors shrink-0"
          >
            Talk to us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
