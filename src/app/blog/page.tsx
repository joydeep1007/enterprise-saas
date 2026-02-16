"use client";

import { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = ["All", "Cloud", "AI & ML", "Security", "Digital", "DevOps"];

const posts = [
  {
    title: "The Future of Multi-Cloud Strategy in 2026",
    excerpt:
      "Explore how enterprises are adopting multi-cloud strategies to maximize flexibility, reduce vendor lock-in, and optimize costs across AWS, Azure, and GCP.",
    category: "Cloud",
    date: "2026-02-10",
    imageUrl: "/multi_cloud_2026.png",
    href: "#",
  },
  {
    title: "Implementing Zero-Trust Security at Enterprise Scale",
    excerpt:
      "A comprehensive guide to deploying zero-trust architecture across your organization, including identity verification, micro-segmentation, and continuous monitoring.",
    category: "Security",
    date: "2026-02-05",
    imageUrl: "/zero_trust_security.png",
    href: "#",
  },
  {
    title: "How Generative AI Is Reshaping Enterprise Operations",
    excerpt:
      "From automated code generation to intelligent customer service, discover how generative AI is transforming business operations across every industry.",
    category: "AI & ML",
    date: "2026-01-28",
    imageUrl: "/generative_ai_enterprise.png",
    href: "#",
  },
  {
    title: "Building Resilient Microservices Architecture",
    excerpt:
      "Best practices for designing, deploying, and managing microservices at scale, including service mesh patterns and observability strategies.",
    category: "DevOps",
    date: "2026-01-20",
    imageUrl: "/building_resilient_microservices.png",
    href: "#",
  },
  {
    title: "Digital Transformation ROI: Measuring What Matters",
    excerpt:
      "Learn how to define clear KPIs, track meaningful metrics, and demonstrate the business value of your digital transformation initiatives.",
    category: "Digital",
    date: "2026-01-15",
    imageUrl: "/digital_transformation_roi_measuring.png",
    href: "#",
  },
  {
    title: "Edge Computing: The Next Frontier for Enterprise",
    excerpt:
      "How edge computing is enabling real-time processing, reducing latency, and opening new possibilities for IoT and AI workloads.",
    category: "Cloud",
    date: "2026-01-08",
    imageUrl: "/edge_computing_next_frontier.png",
    href: "#",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const perPage = 6;
  const paginated = filtered.slice(0, currentPage * perPage);

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32" aria-labelledby="blog-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            Insights & Resources
          </p>
          <h1
            id="blog-heading"
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]"
          >
            Enterprise Tech Insights
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Stay ahead with expert perspectives on cloud, AI, security, and
            digital transformation from our team.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <SectionWrapper>
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Blog category filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-glass-blue text-white shadow-lg shadow-glass-blue/20"
                  : "bg-white/5 text-text-muted hover:bg-white/10 hover:text-white border border-white/5"
              }`}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>

        {/* Empty state */}
        {paginated.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">
              No articles found in this category.
            </p>
          </div>
        )}

        {/* Pagination placeholder */}
        {filtered.length > perPage && (
          <div className="flex justify-center mt-12 gap-2">
            <button className="px-4 py-2 rounded-lg bg-glass-blue text-white text-sm font-medium">
              1
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 text-text-muted text-sm font-medium hover:bg-white/10 transition-colors">
              2
            </button>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
