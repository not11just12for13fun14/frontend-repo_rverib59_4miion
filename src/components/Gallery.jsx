import React, { useState } from 'react'
import { motion } from 'framer-motion'

const samples = [
  { before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f92?q=80&w=1600&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f3?q=80&w=1600&auto=format&fit=crop' },
  { before: 'https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1600&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop' }
]

export default function Gallery() {
  const [slider, setSlider] = useState(50)

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">До и после</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {samples.map((s, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden shadow-[0_10px_80px_rgba(15,23,42,0.6)]">
              <div className="relative w-full h-80">
                <img src={s.before} alt="before" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
                  <img src={s.after} alt="after" className="w-full h-full object-cover" />
                </div>
                <motion.input
                  type="range" min="0" max="100" value={slider}
                  onChange={(e) => setSlider(parseInt(e.target.value))}
                  className="absolute left-0 right-0 -bottom-5 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
