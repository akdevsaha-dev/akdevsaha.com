export const projects = [
  {
    title: "QuickReactGO",
    ghLink: "https://github.com/akdevsaha-dev/QuickReactGO",
    link: "https://www.npmjs.com/package/create-reactgo-app",
    description: `A modern, zero-config CLI tool designed to instantly scaffold a production-ready, containerized full-stack application using a React frontend and a Go backend.
        Setting up a tightly coupled, high-performance monorepo with Go and React traditionally requires hours of repetitive boilerplate. Engineers typically have to manually configure Cross-Origin Resource Sharing (CORS), orchestrate Docker containers for development and production, and wire up hot-reloading for both the frontend and the compiled backend. This friction slows down project initialization and often introduces environment inconsistencies across different machines.

I engineered create-reactgo-app to eliminate this setup phase entirely. Executable via a single modern command (npx create-reactgo-app@latest), the CLI provisions a standardized and highly opinionated workspace. It abstracts away infrastructure complexity and delivers a seamless containerized environment that works consistently across operating systems.

Key Features (v2.0.0)

Zero-Install Execution : 
Utilizes modern npx execution so developers always run the latest scaffolding version without installing global npm packages.

First-Class Docker Integration: 
Ships with pre-configured Dockerfile and docker-compose.yml setups, ensuring exact parity between local development and production environments.

Dual Hot-Reloading: 
Provides live reloading for the React frontend and automatic recompilation for the Go (Gin) backend whenever files change.

Minimalist Developer Experience:
Features a clean and intuitive terminal UI with a streamlined setup dialog designed to reduce developer cognitive load.

Impact & Engineering Focus

The 2.0.0 release introduced a major architectural shift toward container-first development. By standardizing the foundation of Go and React projects, the tool allows teams to bypass infrastructure setup and immediately focus on building core business logic and scalable APIs.
`,
  },
  {
    title: "flow",
    ghLink: "https://github.com/akdevsaha-dev/flow",
    link: "https://github.com/akdevsaha-dev/flow",
    description: `Designed and developed Flow, a high-performance, full-featured communication platform supporting real-time messaging, high-fidelity audio, and low-latency video conferencing. Engineered from the ground up to handle concurrent connections efficiently while delivering a highly responsive, animated user interface.

        Key Architectural & Engineering Achievements:

        Real-Time Infrastructure: Architected a highly scalable WebSocket-based backend to manage instant messaging state, ensuring sub-second delivery and reliable connection recovery.

        Audio/Video Streaming: Integrated WebRTC for peer-to-peer and multi-party video/audio calls, optimizing for adaptive bitrates to maintain call quality across fluctuating network conditions.

        Optimized Data Layer: Designed robust, normalized database schemas utilizing Drizzle ORM for type-safe database access. Implemented advanced caching layers to dramatically reduce query latency for chat history retrieval and user status updates.

        Fluid User Experience: Built a highly interactive frontend with Next.js. Engineered complex, state-driven UI animations and smooth transitions using GSAP to create a native-feeling, "flow-like" user journey, from the landing page through to active call screens.

        Containerization & DevOps: Containerized the entire microservice architecture using Docker, ensuring absolute consistency across local development, testing, and production environments, and streamlining the deployment pipeline.
        `,
  },
  {
    title: "trackly",
    ghLink: "https://github.com/akdevsaha-dev/trackly",
    link: "https://trackly-nine.vercel.app",
    description: `
    Designed and developed Trackly, a high-performance, full-featured infrastructure monitoring platform engineered for real-time uptime tracking, automated site "warmup" cycles, and instantaneous incident alerting. Built with a focus on reliability and visual excellence, the platform delivers a seamless, developer-centric experience for maintaining high-availability web services.

Key Architectural & Engineering Achievements:
Precision Monitoring Engine: Architected a robust, asynchronous monitoring core capable of executing concurrent health checks with sub-millisecond precision. Engineered a status logging pipeline that tracks response latencies and HTTP status codes, providing a granular historical record of infrastructure performance.

Designed an intelligent warmup system that mitigates serverless cold starts by detecting hosting providers and issuing scheduled regional health-check pings to keep application instances active.

High-Fidelity UI & Visualization: Built a transformative user interface using Next.js and Framer Motion. Implemented complex, state-driven animations including staggered text entrances, atmospheric glows, and fluid layout transitions. Integrated advanced data visualization using Recharts to provide real-time, interactive insights into uptime trends and latency distributions.

Type-Safe Full-Stack Infrastructure: Engineered a strictly typed ecosystem using tRPC and Prisma ORM. By bridging the Gap between a PostgreSQL data layer and the React frontend, I ensured 100% type safety across the entire request-response lifecycle, dramatically reducing runtime errors and accelerating feature velocity.

Automated Alerting Pipeline: Integrated a high-delivery notification system via Resend to manage critical incident lifecycles. The system logic automatically detects state transitions (UP/DOWN) and triggers immediate, beautifully formatted email alerts to stakeholders, ensuring zero delay in incident response.
    `,
  },
  {
    title: "Prwise",
    ghLink: "https://github.com/akdevsaha-dev/PrwiseAI",
    link: "https://github.com/akdevsaha-dev/prwise",
    description: `Prwise is a developer productivity platform designed to automate and enhance the pull request review process. The system integrates AI-assisted analysis directly into the development workflow, enabling engineers to receive instant feedback on code quality, architecture decisions, and potential issues before human reviewers even begin reviewing the code.

Modern development teams rely heavily on code reviews to maintain quality, security, and maintainability. However, manual pull request reviews often create bottlenecks in engineering teams. Large repositories with frequent commits can overwhelm reviewers, leading to delayed feedback, inconsistent standards, and overlooked issues.

Prwise addresses this challenge by introducing an intelligent review pipeline that analyzes pull requests automatically and surfaces actionable suggestions to developers in real time.
    `,
  },
];
