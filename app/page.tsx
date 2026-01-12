import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import DemoCard from "./components/DemoCard";

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
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Leadership & Soft Skills",
    description: "Develop essential leadership and communication skills",
    features: ["Team Architecture", "Communication", "Agile Leadership", "Conflict Resolution"],
  },
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
];

const consultingServices = [
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

const innovationShowcase = [
  {
    title: "Legal Guidance Tool",
    description: "AI-powered legal guidance platform providing instant answers to legal queries with intelligent classification and responsive design.",
    imageUrl: "",
    demoUrl: "https://nevolute.github.io/legal-saas/",
    tags: ["AI/ML", "SaaS", "Legal Tech", "Next.js"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Transform Your Business with{" "}
            <span className="text-gold-600">Nevolute Cloud Labs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for enterprise training, software consulting, and innovative product development. We help businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:-translate-y-1 shadow-md"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="bg-white border border-gray-200 text-gray-700 hover:border-gray-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
            {[
              { value: "15+", label: "Projects Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "50+", label: "Professionals Trained" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Service Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 block group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">Training</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Upskill Your Workforce
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive training programs delivered both on-site and online. Our expert instructors bring real-world experience to every session.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4">
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">On-site Training</span>
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Online Live Sessions</span>
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Self-paced Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">Consulting</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Expert Technical Guidance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Enterprise-Ready Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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

      {/* Innovation Showcase Section */}
      <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">Innovation Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Experimental Prototypes & Proof of Concepts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our cutting-edge experiments and innovative prototypes. These proof-of-concept applications demonstrate our technical capabilities and forward-thinking approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationShowcase.map((demo, index) => (
              <DemoCard key={index} {...demo} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-gray-600 text-lg">
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
