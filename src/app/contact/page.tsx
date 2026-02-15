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
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
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
        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <div className="glass-card p-8 lg:p-12">
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
        </div>
      </SectionWrapper>
    </>
  );
}
