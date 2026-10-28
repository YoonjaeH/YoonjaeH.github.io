# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: industry hiring managers and recruiters screening for software engineering, research engineering, and ML/distributed-infrastructure roles. They usually arrive from a résumé, application, or LinkedIn link, skim for under a minute, and decide whether to read the CV or reach out.

Secondary: academic readers (faculty, lab PIs, research collaborators) checking research fit, publications, and depth. They are a real audience, but the site leads with the industry reader.

## Product Purpose
A personal portfolio for Yoonjae Hwang, a USC MS Computer Science student with two years of production software engineering at Ericsson (5G core) and current graduate research in distributed systems and multi-agent robotics.

Success means a visitor does one or more of:
- downloads the CV (`/Yoonjae_Hwang_CV.pdf`);
- emails (yoonjae@usc.edu);
- opens the actual work: the ICCCN 2026 paper, the `dagprofiler` PyPI package, or GitHub.

## Positioning
An engineer who has shipped carrier-grade production software (Ericsson 5G core for Verizon and AT&T: CI/CD on Kubernetes, 150+ integration tests, AMF/SMF optimization) *and* does peer-reviewed systems research (accepted ICCCN 2026 paper, a published profiling library, two USC research groups). Most candidates in this pool have one of those, not both. Industry readers should see the production credibility first and the research depth as what sets him apart.

## Operating Context
- A single-page static site on GitHub Pages (`https://YoonjaeH.github.io`), built with Astro 4 + Tailwind 3 (React integration installed), deployed by `.github/workflows/deploy.yml` on push to `main`.
- Visitors also use the CV PDF as a separate document; the site and the PDF are read side by side or one instead of the other.
- Sections today: Hero, Education, Research Interests, Experience (Research, then Industry), Selected Projects, Publications, Technical Skills, Footer.

## Capabilities and Constraints
- Content lives as data arrays inside each `src/components/*.astro` file; no CMS.
- Static output only; no backend, forms, or analytics in place.
- Open decisions (asked during init, not yet answered; do not assume):
  - whether the site stays a single page or grows per-project pages or writing;
  - whether the CV PDF is the strict source of truth for site content;
  - whether the hero's "F-1 Student" visa status stays visible;
  - whether to stay on GitHub Pages + Astro long term.
- Note for future work: the current Experience order puts Research before Industry, which conflicts with the industry-first audience. Treat ordering as a surface decision to revisit, not a fixed fact.

## Brand Commitments
- Name: Yoonjae Hwang. GitHub handle: YoonjaeH. Contact: yoonjae@usc.edu.
- Voice in existing copy: factual, metric-backed résumé language (percentages, counts, named customers and tools). No self-description beyond credentials.

## Evidence on Hand
- CV PDF: `public/Yoonjae_Hwang_CV.pdf`.
- Publication: "Profiling and Scheduling Complex O-RAN Applications Across the 5G Edge and Cloud", ICCCN 2026, status Accepted. No DOI or link yet.
- Open-source: `dagprofiler` on PyPI (https://pypi.org/project/dagprofiler/).
- Project without a public link: Log Analyzer (Go / Celery / RabbitMQ / Next.js).
- Industry metrics stated in copy: 25% fewer pre-production bug escapes, 150+ integration tests, 6% session throughput gain.
- Absent, and must not be fabricated: testimonials or references, photos or headshots, project screenshots or diagrams, a paper DOI or PDF, employer logos, and any metrics beyond those above.

## Product Principles
1. Industry reader first: production impact and engineering credibility must be readable in the first screen; research depth reinforces it, never buries it.
2. Every claim points to evidence: a metric, a named system, a paper, a package, or the CV.
3. The fastest routes are always one step away: CV download, email, and the real work.
4. Real content only: no invented proof, placeholder projects, or claims beyond the CV.
