"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              15+ Years of Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Maximize Your{" "}
            <span className="text-primary">Digital Reach</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Generate maximum return from your online campaigns with proactive support from our digital advertising specialists. We turn clicks into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Link href="#contact">
                Start Your Campaign
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-border hover:bg-secondary">
              <Link href="#services">
                Our Services
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
        >
          {[
            { title: "Quality Assurance", description: "Identifying and resolving issues before delivery" },
            { title: "Creativity", description: "Making your brand stand out with emotional impact" },
            { title: "Attention to Detail", description: "Tracking every task for flawless execution" },
            { title: "On-Time Delivery", description: "Meeting deadlines with internal time management" },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
