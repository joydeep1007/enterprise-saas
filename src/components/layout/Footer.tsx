import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Partners", href: "/partners" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Digital Transformation", href: "/services#digital-transformation" },
      { label: "Cloud Solutions", href: "/services#cloud-solutions" },
      { label: "AI & Analytics", href: "/services#ai-analytics" },
      { label: "Cybersecurity", href: "/services#cybersecurity" },
      { label: "Managed IT", href: "/services#managed-it" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "contact@valueztech.com", href: "mailto:contact@valueztech.com", icon: "email" },
      { label: "+1 (555) 123-4567", href: "tel:+15551234567", icon: "phone" },
      { label: "100 Innovation Drive, Suite 500, San Francisco, CA 94105", href: "#", icon: "location" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="ValuEZ Tech — Home">
              <img 
                src="/logo.png" 
                alt="ValuEZ Tech Logo" 
                className="w-[72px] h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                style={{ background: 'transparent' }}
              />
              <span className="text-xl font-bold text-white">
                ValuEZ<span className="text-glass-blue">Tech</span>
              </span>
            </Link>
            <p className="text-text-muted leading-relaxed max-w-sm mb-8">
              Empowering enterprises with next-generation technology solutions.
              Transform your business with cutting-edge innovation and strategic expertise.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-muted hover:text-glass-blue hover:bg-gradient-to-br hover:from-glass-blue/15 hover:to-glass-blue/5 hover:border-glass-blue/30 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-white transition-colors text-sm flex items-start gap-2"
                    >
                      {'icon' in link && link.icon === 'email' && (
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-glass-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {'icon' in link && link.icon === 'phone' && (
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-glass-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {'icon' in link && link.icon === 'location' && (
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-glass-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      <span className={'icon' in link && link.icon ? 'max-w-[200px]' : ''}>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} ValuEZ Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
