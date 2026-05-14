"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block"
          >
            — Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Want to Increase Profits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Complete the form below and receive a full analysis of your business within 2 days!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Our Address</h3>
                  <p className="text-muted-foreground">
                    123 Business District, Suite 500<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone Number</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@peakreachmedia.com</p>
                </div>
              </div>
            </div>

            {/* Media Channels */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Media Channels</h3>
              <div className="flex flex-wrap gap-4">
                {["Google Ads", "Meta Ads", "LinkedIn", "TikTok", "YouTube"].map((channel) => (
                  <span
                    key={channel}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border/50 p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-input border-border focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2 w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Submit Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
