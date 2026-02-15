import React from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  href: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  href,
}: BlogCardProps) {
  return (
    <a
      href={href}
      className="glass-card overflow-hidden group block h-full"
      aria-label={`Read article: ${title}`}
    >
      <div className="aspect-video overflow-hidden relative">
        <div
          className="w-full h-full bg-slate-700 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={title}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-glass-blue/80 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <time className="text-text-muted text-sm" dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="text-lg font-semibold text-white group-hover:text-glass-blue transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </a>
  );
}
