import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, ShieldCheck, Diamond } from 'lucide-react'

const features = [
  { icon: Stethoscope, title: 'Микроскопическая точность', desc: 'Операции под увеличением и цифровое планирование каждого шага.' },
  { icon: ShieldCheck, title: 'Безупречная безопасность', desc: 'Стерильность операционной класса ISO и многоуровневая фильтрация воздуха.' },
  { icon: Diamond, title: 'Эстетика класса люкс', desc: 'Индивидуальный дизайн улыбки с учетом пропорций лица и света.' }
]

export default function About() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(255,255,255,0.06),transparent),radial-gradient(1000px_700px_at_90%_90%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
        >
          О клинике
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,rgba(250,204,21,0.2),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.2),transparent_40%)]" />
              <div className="relative">
                <f.icon className="w-10 h-10 text-blue-200" />
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-blue-100/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
