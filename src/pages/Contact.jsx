import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

// Animated Section Component
const AnimatedSection = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

// Section Label Component
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-px bg-yellow-600" />
    <span className="text-[11px] tracking-[0.3em] uppercase text-yellow-600 font-body">
      {children}
    </span>
  </div>
);

// Glass Card Component
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-sm border border-yellow-600/10 rounded-lg ${className}`}>
    {children}
  </div>
);

// Input Component
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-yellow-600 focus:outline-none transition-colors placeholder:text-white/20 ${className}`}
    {...props}
  />
);

// Textarea Component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-yellow-600 focus:outline-none transition-colors placeholder:text-white/20 resize-none ${className}`}
    {...props}
  />
);

// Select Component
const Select = ({ value, onValueChange, placeholder, options = [] }) => (
  <select
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-yellow-600 focus:outline-none transition-colors appearance-none cursor-pointer"
  >
    <option value="" className="bg-black text-white/60">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value} className="bg-black text-white">
        {opt.label}
      </option>
    ))}
  </select>
);

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '125 Madiba Street, Pretoria Central, 0002' },
  { icon: Phone, label: 'Phone', value: '+27 (012) 546 0966' },
  { icon: Mail, label: 'Email', value: 'info@bemoreproperties.co.za' },
  { icon: Clock, label: 'Office Hours', value: 'Monday – Friday: 08:00 – 17:00' },
];

// Inquiry options
const inquiryOptions = [
  { value: 'property-development', label: 'Property Development' },
  { value: 'project-management', label: 'Project Management' },
  { value: 'architecture', label: 'Architecture & Design' },
  { value: 'property-management-services', label: 'Property Management' },
  { value: 'partnership', label: 'Partnership / Joint Venture' },
  { value: 'general', label: 'General Inquiry' },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('xykrkgvl');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to Formspree
    handleSubmit(e);
  };

  // Reset form when submission is successful
  if (state.succeeded) {
    setTimeout(() => {
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiry: '',
        message: '',
      });
    }, 100);
  }

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="absolute top-0 left-[5vw] w-px h-full bg-yellow-600/[0.07]" />
        <div className="absolute top-0 right-[5vw] w-px h-full bg-yellow-600/[0.07]" />
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-white">
              Contact <span className="text-yellow-600">Us</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-xl">
              Whether you're planning your next development or need expert consulting, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-[5vw]">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-light text-white mb-8">Our Office</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-600/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-yellow-600/60 mb-1">{item.label}</p>
                      <p className="text-sm text-white/80">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 border border-yellow-600/10 rounded-lg bg-white/5">
                <h3 className="text-sm font-semibold text-white mb-2">Be More Group</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  BeMore Properties is a subsidiary of the Be More Group of companies, 
                  dedicated to building South African legacy through property development.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-2xl text-white mb-2">Message Sent</h3>
                    <p className="text-white/60">Our team will respond to your inquiry within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl font-light text-white mb-2">Send Us a Message</h3>
                    <p className="text-sm text-white/60 mb-6">Our team will respond promptly to your request.</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">First Name *</label>
                        <Input
                          required
                          name="firstName"
                          value={form.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          placeholder="John"
                        />
                        <ValidationError field="firstName" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">Last Name *</label>
                        <Input
                          required
                          name="lastName"
                          value={form.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          placeholder="Doe"
                        />
                        <ValidationError field="lastName" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">Email *</label>
                        <Input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="john@example.com"
                        />
                        <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">Phone</label>
                        <Input
                          name="phone"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+27 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">Inquiry Type</label>
                      <Select
                        value={form.inquiry}
                        onValueChange={(v) => handleChange('inquiry', v)}
                        placeholder="Select inquiry type"
                        options={inquiryOptions}
                      />
                      <ValidationError field="inquiry" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 block">Message *</label>
                      <Textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="min-h-[120px]"
                        placeholder="Tell us about your inquiry..."
                      />
                      <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-yellow-600 text-black text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-yellow-500 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}