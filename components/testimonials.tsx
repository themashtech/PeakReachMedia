"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Oliver",
    role: "CEO, TechStart Inc.",
    content: "Their team has a calm, confident way of handling challenges. It&apos;s reassuring to work with people who know what they&apos;re doing and do it well. PeakReach Media transformed our digital presence.",
  },
  {
    name: "Sara",
    role: "Marketing Director, Growth Co.",
    content: "PeakReach Media brings a balance of creativity and strategy that&apos;s hard to find. Their ideas actually translate into better performance. Our conversion rates have doubled.",
  },
  {
    name: "Sophia",
    role: "Founder, Wellness Brand",
    content: "I value how they keep us informed without overwhelming us. Their updates are clear, honest, and always focused on improvement. A true partner in our growth.",
  },
  {
    name: "Anderson",
    role: "Operations Manager, Retail Plus",
    content: "Working with PeakReach Media feels like having an in-house team that actually cares. They notice small things and fix them before we even ask. Exceptional attention to detail.",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block"
          >
            — We Love Them
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            What Our Clients Have To Say
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl border border-border/50 p-8 lg:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center pt-8"
              >
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                  {`"${testimonials[currentIndex].content}"`}
                </p>
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
