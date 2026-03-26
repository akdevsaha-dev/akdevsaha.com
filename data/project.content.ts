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
`
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
        `
    },
    {
        title: "Shrtn",
        ghLink: "https://github.com/akdevsaha-dev/shrtn",
        link: "https://github.com/akdevsaha-dev/shrtn",
        description:
            "Phasellus eget velit a massa laoreet dignissim. Vivamus ac augue a metus sagittis cursus. Integer a tellus sit amet ligula porta eleifend. Sed commodo elit a nibh finibus, a vehicula ipsum posuere.",
    },
    {
        title: "trackly",
        ghLink: "https://github.com/akdevsaha-dev/trackly",
        link: "https://github.com/akdevsaha-dev/trackly",
        description:
            "Gain meaningful insights without the noise. Track user journeys, monitor performance in real time, and keep your site running smoothly even on serverless platforms with built-in cold-start protection. All powered by a fast, privacy-first analytics solution.",
    },
    {
        title: "Prwise",
        ghLink: "https://github.com/akdevsaha-dev/prwise",
        link: "https://github.com/akdevsaha-dev/prwise",
        description:
            "PR Wise is a sophisticated AI-powered SaaS platform that automates and enhances the code review process for GitHub pull requests. The application provides intelligent analysis, automated feedback, and risk assessment for pull requests to help development teams ship higher quality code faster.",
    },
];
