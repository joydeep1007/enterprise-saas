"use client";

import { useState, type FormEvent } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-[12px] bg-white/5 border border-white/10 text-white placeholder-text-muted/60 focus:border-glass-blue focus:ring-2 focus:ring-glass-blue/20 focus:outline-none transition-all";

  return (
    <>
      {/* Hero */}
      <section
        className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-glass-blue text-sm uppercase tracking-widest font-semibold mb-4">
            Contact Us
          </p>
          <h1
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.1]"
          >
            Let&apos;s Build Something Extraordinary
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Ready to transform your enterprise? Get in touch with our team
            and let&apos;s discuss how we can accelerate your digital journey.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="glass-card p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12" role="alert">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3">
                  Message Sent Successfully!
                </h2>
                <p className="text-text-muted">
                  Thank you for reaching out. Our team will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Send Us a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-muted mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={inputClasses}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-muted mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={inputClasses}
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-muted mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className={inputClasses}
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-muted mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={inputClasses}
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text-muted mb-2"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className={inputClasses}
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Select a service</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI & Analytics</option>
                    <option value="security">Cybersecurity</option>
                    <option value="managed">Managed IT Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-muted mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button variant="primary" size="lg" type="submit">
                  Send Message
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="glass-card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glass-blue/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-glass-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a
                      href="mailto:contact@valueztech.com"
                      className="text-text-muted hover:text-glass-blue transition-colors"
                    >
                      contact@valueztech.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glass-blue/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-glass-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-text-muted hover:text-glass-blue transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-glass-blue/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-glass-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Office</p>
                    <p className="text-text-muted">
                      100 Innovation Drive, Suite 500
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card overflow-hidden" aria-label="Office location map">
              <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div className="relative text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-glass-blue/20 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-glass-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Schedule button */}
            <div className="glass-card p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 radial-glow opacity-50" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Prefer a Live Conversation?
                </h3>
                <p className="text-text-muted mb-6">
                  Book a 30-minute consultation with our enterprise solutions team.
                </p>
                <Button variant="primary" size="lg" href="#">
                  Schedule Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
