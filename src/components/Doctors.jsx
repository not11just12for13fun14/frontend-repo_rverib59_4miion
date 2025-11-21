import React from 'react'
import { motion } from 'framer-motion'

const doctors = [
  { name: 'Др. Анна Сереброва', role: 'Эстетическая стоматология', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Др. Михаил Платонов', role: 'Имплантология', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Др. Дарья Норрис', role: 'Ортодонтия', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' }
]

export default function Doctors() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_50%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Врачи</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={d.img} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{d.name}</h3>
                <p className="text-blue-100/80 mt-1">{d.role}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
