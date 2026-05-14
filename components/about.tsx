"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "+", label: "Years Experience" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              — Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              We Are A Leading Digital Marketing Agency
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              When lights from displays shine on intently engrossed faces with their heads buried in their phones, billboards appear to be going away. Clearly, traditional has been replaced by digital.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Realizing that hiring the top digital marketing agency is now the most effective strategy to help organizations grow is important. Strong brand stature is guaranteed by a strong internet presence. That is the reason businesses are looking for the best digital marketing firm—they realize that investing in expert services is now necessary for them to stay competitive.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
