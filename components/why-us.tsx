"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2, Sparkles, BarChart3, HeadphonesIcon, Layers, Zap } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "We Analyse",
    description: "We create a personalised digital marketing solution for your business. We begin each of our projects after understanding who you are and what your expertise is. We involve our clients in every step of the result-driven digital marketing strategy.",
  },
  {
    icon: Sparkles,
    title: "We Are Experts",
    description: "Our professionals work in harmony to create a seamless experience on all business websites. With advanced and trending technology, our team creates creative digital marketing solutions for the website.",
  },
  {
    icon: CheckCircle2,
    title: "We Offer Good ROI",
    description: "We offer web development and digital marketing services at competitive prices. Our professionals work diligently to gain higher revenues from all the platforms. Working with PeakReach Media offers high benefits with great savings.",
  },
  {
    icon: Layers,
    title: "We Offer All Services",
    description: "From building a website to building a brand, PeakReach Media offers everything. Our experienced team handles all your requirements of web development and digital marketing. We have got all your business requirements under one roof!",
  },
  {
    icon: HeadphonesIcon,
    title: "Seamless Customer Support",
    description: "We understand the challenges of running a business. Our constant support and flawless communication help to build your business. Any issue in the website development is resolved instantly by our expert web development team.",
  },
  {
    icon: Zap,
    title: "We Create Experiences",
    description: "We build websites that are creative, easy to use, and offer a great user experience. We are not a typical web development agency that only builds websites, we are keen to build your brand and create unique experiences for your user.",
  },
]

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block"
          >
            — Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Sets Us Apart
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 lg:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
