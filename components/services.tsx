"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Share2, Users, MousePointerClick, UserPlus, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Place advertisements for your business, services, or goods on platforms that promote online engagement and commerce.",
  },
  {
    icon: Users,
    title: "Affiliate Marketing",
    description: "We make extensive use of technology when deciding on a plan, creating content, delivering it, and evaluating the results.",
  },
  {
    icon: MousePointerClick,
    title: "Pay Per Click (PPC)",
    description: "Innovative outbound tactics to boost your brand&apos;s sales and traffic with targeted advertising campaigns.",
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    description: "Convert potential customers into ecstatic ones who are just right for your business through strategic targeting.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "A clever marketing strategy to get your important material in front of the right people at the right time.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Advertising and new ideas that will assist retailers and affiliates in expanding their operations in many ways.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block"
          >
            — We Solve Real Problems
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Can We Do For You?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <Link
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
