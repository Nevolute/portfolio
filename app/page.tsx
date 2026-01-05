import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import DemoCard from "./components/DemoCard";
import ContactForm from "./components/ContactForm";

const trainingServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Backend & Frontend Development",
    description: "Master modern web technologies with hands-on training",
    features: ["React, Next.js, Vue.js", "Node.js, Python, Java", "REST APIs & GraphQL", "Database Design"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Systems",
    description: "Comprehensive cloud platform training for modern enterprises",
    features: ["AWS, Azure, GCP", "Cloud Architecture", "Serverless Computing", "Container Orchestration"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Cloud Migration",
    description: "Learn to lift and shift on-premise services to cloud",
    features: ["Migration Strategies", "Infrastructure as Code", "CI/CD Pipelines", "Security Best Practices"],
  },
];

const consultingServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Software Design",
    description: "Expert guidance on system design and architecture patterns",
    features: ["System Design Reviews", "UX/UI Consultation", "API Design", "Microservices Architecture"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Software Testing",
    description: "Comprehensive QA strategies and test automation",
    features: ["Test Strategy", "Automation Frameworks", "Performance Testing", "Security Audits"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Architecture Documentation",
    description: "Professional technical documentation and diagrams",
    features: ["Architecture Diagrams", "Technical Specs", "API Documentation", "Runbooks & Playbooks"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Project Management",
    description: "Strategic planning and agile project management",
    features: ["Agile/Scrum Implementation", "Resource Planning", "Risk Management", "Delivery Optimization"],
  },
];

const products = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Inventory Management",
    description: "Complete inventory tracking and warehouse management solution",
    features: ["Real-time Stock Tracking", "Multi-location Support", "Barcode Integration", "Analytics Dashboard"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
    title: "Billing & Compliance",
    description: "Automated billing system with tax compliance and reporting",
    features: ["GST/VAT Compliance", "Automated Invoicing", "Payment Gateway Integration", "Financial Reports"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "E-commerce Solution",
    description: "Full-featured e-commerce platform for modern businesses",
    features: ["Multi-vendor Support", "Order Management", "Customer Analytics", "Mobile-first Design"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI/ML Automation",
    description: "Intelligent workflow automation powered by AI and ML",
    features: ["Process Automation", "Predictive Analytics", "Natural Language Processing", "Custom ML Models"],
  },
];

const demos = [
  {
    title: "Inventory Pro Demo",
    description: "Experience our full-featured inventory management system with real-time tracking and analytics.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop",
    demoUrl: "#",
    tags: ["Inventory", "Analytics", "Real-time"],
  },
  {
    title: "E-commerce Platform",
    description: "Explore our modern e-commerce solution with multi-vendor support and seamless checkout.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    demoUrl: "#",
    tags: ["E-commerce", "Multi-vendor", "Payments"],
  },
  {
    title: "AI Workflow Automation",
    description: "See how our AI-powered automation can streamline your business processes.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    demoUrl: "#",
    tags: ["AI/ML", "Automation", "Analytics"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-text">Nevolute Cloud Labs</span>
            </h1>
            <p className="text-xl text-purple-200/70 mb-8 max-w-2xl mx-auto">
              Your trusted partner for enterprise training, software consulting, and innovative product development. We help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="#services"
                className="border border-purple-600 text-purple-300 hover:bg-purple-600/10 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Projects Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "50+", label: "Professionals Trained" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-purple-200/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Service Pillars</h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              We offer comprehensive solutions across three key pillars to accelerate your digital transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Training",
                description: "Empower your team with cutting-edge skills",
                icon: "🎓",
                href: "#training",
              },
              {
                title: "Consulting",
                description: "Expert guidance for your technical challenges",
                icon: "💼",
                href: "#consulting",
              },
              {
                title: "Products",
                description: "Ready-to-deploy enterprise solutions",
                icon: "🚀",
                href: "#products",
              },
            ].map((pillar, index) => (
              <a
                key={index}
                href={pillar.href}
                className="bg-purple-950/40 border border-purple-800/30 rounded-2xl p-8 text-center card-hover block"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-purple-200/60">{pillar.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Training</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Upskill Your Workforce
            </h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              Comprehensive training programs delivered both on-site and online. Our expert instructors bring real-world experience to every session.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-purple-950/40 border border-purple-800/30 rounded-xl px-6 py-4">
              <span className="text-purple-200/80">Training Formats:</span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">On-site</span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Online Live</span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Self-paced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Consulting</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Expert Technical Guidance
            </h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              Leverage our expertise to overcome technical challenges and accelerate your projects with battle-tested strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Enterprise-Ready Solutions
            </h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              Production-ready products designed to solve real business problems. Customizable, scalable, and backed by our expert support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ServiceCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section - Hidden for now
      <section id="demos" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Live Demos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Try Before You Buy
            </h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              Experience our products firsthand. Explore interactive demos and see how our solutions can transform your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <DemoCard key={index} {...demo} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-purple-200/60 mb-4">Want a personalized demo for your team?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Schedule a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-purple-200/60">
              Ready to transform your business? Get in touch and let&apos;s discuss how we can help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
