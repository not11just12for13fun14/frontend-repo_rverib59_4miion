import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Activity, Gem, TimerReset } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Премиальная безопасность', desc: 'Передовые протоколы стерильности и мониторинга.' },
  { icon: Activity, title: 'Высокая предсказуемость', desc: 'Лечение под контролем данных и цифровых моделей.' },
  { icon: Gem, title: 'Эстетика класса А', desc: 'Невидимые переходы, идеальная геометрия и блеск.' },
  { icon: TimerReset, title: 'Комфорт во времени', desc: 'Максимально бережные и быстрые процедуры.' }
]

export default function Advantages() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_60%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Преимущества</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-amber-100/10 opacity-0 hover:opacity-100 transition-opacity" />
              <it.icon className="relative w-9 h-9 text-blue-200" />
              <h3 className="relative mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="relative mt-2 text-blue-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
