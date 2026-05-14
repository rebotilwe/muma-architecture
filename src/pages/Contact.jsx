import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import GlassCard from '@/components/ui/GlassCard';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '125 Madiba Rd, Pretoria CBD, South Africa' },
  { icon: Phone, label: 'Phone', value: '+27 (012) 546 0966' },
  { icon: Mail, label: 'Email', value: 'info@muma.co.za' },
  { icon: Clock, label: 'Office Hours', value: 'Monday – Friday: 08:00 – 17:00' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', inquiry: '', message: '',
  });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite to-obsidian" />
        <div className="absolute top-0 left-[5vw] w-px h-full bg-gold/[0.07]" />
        <div className="absolute top-0 right-[5vw] w-px h-full bg-gold/[0.07]" />
        <div className="relative z-10 px-[5vw] pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light text-alabaster">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="mt-4 text-lg text-alabaster/60 max-w-xl">
              Whether you're exploring investment opportunities or planning your next development, we're here to help.
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
              <h2 className="font-display text-3xl font-light text-alabaster mb-8">Our Office</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">{item.label}</p>
                      <p className="text-sm text-alabaster/80">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8" hover={false}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-muted/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-muted" />
                    </div>
                    <h3 className="font-display text-2xl text-alabaster mb-2">Message Sent</h3>
                    <p className="text-muted-foreground">Our team will respond to your inquiry within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl font-light text-alabaster mb-2">Send Us a Message</h3>
                    <p className="text-sm text-muted-foreground mb-6">Our team will respond promptly to your request.</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">First Name *</label>
                        <Input
                          required
                          value={form.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          className="bg-white/5 border-white/10 text-alabaster focus:border-gold placeholder:text-white/20"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Last Name *</label>
                        <Input
                          required
                          value={form.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          className="bg-white/5 border-white/10 text-alabaster focus:border-gold placeholder:text-white/20"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email *</label>
                        <Input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="bg-white/5 border-white/10 text-alabaster focus:border-gold placeholder:text-white/20"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Phone</label>
                        <Input
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="bg-white/5 border-white/10 text-alabaster focus:border-gold placeholder:text-white/20"
                          placeholder="+27 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Inquiry Type</label>
                      <Select value={form.inquiry} onValueChange={(v) => handleChange('inquiry', v)}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-alabaster">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="investment">Investment Opportunity</SelectItem>
                          <SelectItem value="development">Property Development</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="student">Student Accommodation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Message *</label>
                      <Textarea
                        required
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="bg-white/5 border-white/10 text-alabaster focus:border-gold placeholder:text-white/20 min-h-[120px]"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gold text-obsidian text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors"
                    >
                      Send Message
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