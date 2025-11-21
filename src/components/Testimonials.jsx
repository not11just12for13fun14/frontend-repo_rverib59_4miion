import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const data = [
  { name: 'Александра', text: 'Идеальная улыбка без боли и стресса. Внимание к деталям поражает.' },
  { name: 'Игорь', text: 'Сервис уровня luxury. Результат — выше ожиданий.' },
  { name: 'Мария', text: 'Очень бережно, технологично и красиво. Спасибо команде.' },
  { name: 'Дмитрий', text: 'Комфортно с первого шага. Настоящая элитная стоматология.' }
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_50%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Отзывы</h2>

        <motion.div
          ref={ref}
          initial={{ x: 0 }}
          animate={inView ? { x: ['0%', '-50%'] } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6"
        >
          {[...data, ...data].map((t, i) => (
            <div key={i} className="min-w-[320px] p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-2xl shadow-[0_10px_60px_rgba(15,23,42,0.6)]">
              <p className="text-blue-100/90">“{t.text}”</p>
              <p className="mt-3 text-white font-semibold">{t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
