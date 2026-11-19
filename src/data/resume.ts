// Résumé content for /resume.
// TODO: Source is KyleLaverty_Resume_2026.pdf. Replace with the updated résumé when it lands,
// and swap the PDF in public/pdf/ at the same time so the two match.
// Deliberate differences from that PDF:
//   - realistagenda.com removed from Crossfxn key projects (kept off the site entirely)
//   - phone number left off the public page
//   - email is kyle@crossfxn.com instead of the Gmail address

export const resume = {
  name: "Kyle Laverty",
  headline: "Engineering & Digital Strategy",
  contact: [
    { label: "U.S. Air Force Veteran" },
    { label: "Apex, NC" },
    { label: "kyle@crossfxn.com", href: "mailto:kyle@crossfxn.com" },
    { label: "kylelaverty.com", href: "https://kylelaverty.com" },
    { label: "github.com/lavekyl", href: "https://github.com/lavekyl" },
    { label: "linkedin.com/in/lavekyl", href: "https://linkedin.com/in/lavekyl" },
  ],
  pdf: "/pdf/KyleLaverty_Resume_2026.pdf",
  summary:
    "Seasoned engineering leader and web strategist with 11+ years of B2B and enterprise experience, focused on driving digital transformation. Experienced in leading cross-functional teams to develop impactful websites and applications, and implementing measurable, data-driven strategies for CRO and SEO growth. Equally comfortable defining complex technical architecture and translating strategy for executive stakeholders.",
  experience: [
    {
      org: "Fingerpaint Medical",
      place: "Remote",
      role: "Senior Web Developer",
      dates: "September 2023 – Present",
      points: [
        "Leads full-cycle web development across a portfolio of pharmaceutical and healthcare clients, collaborating with cross-functional teams (design, strategy, analytics) to build and optimize responsive sites and applications.",
        "Helps define the technical architecture strategy, covering stack selection, build tooling, and deployment pipelines (Azure, WP Engine), prioritizing performance, scalability, maintainability, and WCAG accessibility compliance.",
        "Implements Git-based CI/CD workflows and automation (Webpack, Gulp, Grunt) to standardize development processes across engagements.",
        "Key projects: belotero.com, kengreal.com, chiesihealthcareeconomics.com",
      ],
    },
    {
      org: "Highspot",
      place: "Remote",
      role: "Marketing Web Developer",
      dates: "June 2022 – June 2023",
      points: [
        "Partnered with design, marketing, and executive stakeholders to help lead the redesign of the homepage, product, and careers pages, delivering against a strategic roadmap with an explicit focus on CRO, user experience, and measurable business performance metrics.",
        "Introduced a React-based design system with reusable components, improving code ownership, scalability, WCAG accessibility compliance, and cross-team collaboration.",
        "Implemented Australian market localization using Polylang; managed GitHub Actions-based deployment pipelines to WP Engine across dev, staging, and production.",
      ],
    },
    {
      org: "Walk West",
      place: "Raleigh, NC",
      role: "Senior Web Developer",
      dates: "November 2021 – June 2022",
      points: [
        "Collaborated with SEO, design, and project management to develop custom WordPress sites for agency clients with a focus on performance, SEO, and accessibility compliance.",
        "Assisted in hiring and technical evaluation of developer candidates; provided recommendations on team fit and technical skills.",
      ],
    },
    {
      org: "NSCAF",
      place: "Remote",
      role: "WordPress Developer",
      dates: "November 2019 – October 2021",
      points: [
        "Drove a 275% increase in organic traffic through performance optimization, SEO improvements, and iterative content strategy.",
        "Managed an external development agency, overseeing quality, timelines, and delivery of web projects.",
      ],
    },
    {
      org: "Autoshop Solutions",
      place: "Apex, NC",
      role: "Web Developer",
      dates: "June 2014 – August 2015",
      points: ["Developed, maintained, and quality-tested custom WordPress and PHP websites."],
    },
    {
      org: "Issuer Direct",
      place: "Morrisville, NC",
      role: "Front End Developer",
      dates: "October 2013 – June 2014",
      points: ["Developed investor relations websites using a proprietary investor relations application."],
    },
  ],
  independent: [
    {
      org: "Crossfxn LLC",
      place: "Apex, NC",
      role: "Founder & Full Stack Developer",
      dates: "2024 – Present",
      points: [
        "Building a portfolio of independent web and mobile products and consulting projects, including headless WordPress implementations using Astro and Next.js, static sites (Hugo, 11ty), WordPress sites and plugins, and a full-stack mobile application using React Native, Fastify, Supabase, and Twilio.",
        "Key projects: bucsbounty.com, theknuckle.com",
      ],
    },
    {
      org: "Laverty Creative LLC",
      place: "Apex, NC",
      role: "Freelance Full Stack Developer",
      dates: "July 2015 – 2019",
      points: [
        "Built custom websites and applications for clients across multiple industries, including real estate, financial services, and talent booking, using PHP, JavaScript, WordPress, and Git-based workflows.",
        "Worked within Agile methodology, participating in sprints and iterative delivery cycles across client engagements.",
        "Key projects: mallardrealtygroup.com, pacifictalent.com, cardinalcapitalmanagement.com, bfs-ind.com",
      ],
    },
  ],
  skills: [
    {
      label: "Languages / Frameworks / Design",
      items: "HTML, CSS, JavaScript, TypeScript, PHP, React, Vue, Node.js, Express, SvelteKit, Next.js, Astro, 11ty (Eleventy), Hugo, Jekyll, Tailwind CSS, Sass, CSS Modules, Lightning CSS, Figma, Adobe CC",
    },
    {
      label: "CMS & Platforms",
      items: "WordPress (custom themes, plugins, Gutenberg blocks, ACF, WPML), WP Engine, Azure, AWS, Netlify, Render, DigitalOcean",
    },
    { label: "Analytics & Optimization", items: "Google Analytics, New Relic, heatmaps, A/B testing, CRO strategy, SEO/SEM" },
    { label: "Tooling & DevOps", items: "Git, GitHub Actions, CI/CD, Webpack, Vite, Gulp, Jira, Cloudflare, Sentry, PagerDuty" },
    { label: "Backend & APIs", items: "Fastify, Express, Supabase, Prisma, Twilio, Postmark, REST APIs" },
  ],
  education: [
    { org: "Penn State University", detail: "Bachelor of Science, Information Sciences and Technology", dates: "2023" },
  ],
  service: [{ org: "U.S. Air Force", detail: "Aircraft Mechanic", dates: "February 2007 – May 2011" }],
};
