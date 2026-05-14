"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const clients = [
  "Google",
  "Meta",
  "Amazon",
  "Microsoft",
  "Shopify",
  "Stripe",
]

export function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Our Clients Believe In Us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
