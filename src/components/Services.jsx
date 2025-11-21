import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Smile, Camera, ScanFace } from 'lucide-react'

const services = [
  { icon: Smile, title: 'Эстетическая стоматология', desc: 'Виниры, отбеливание и полное преображение улыбки с цифровым планированием.' },
  { icon: Camera, title: 'Цифровая диагностика', desc: '3D-сканы, фотопротокол и моделирование результатов до начала лечения.' },
  { icon: Sparkles, title: 'Имплантология', desc: 'Малоинвазивные операции и быстрый комфортный послеоперационный период.' },
  { icon: ScanFace, title: 'Ортодонтия', desc: 'Элайнеры нового поколения с прогнозируемым результатом.' }
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_20%,rgba(255,255,255,0.06),transparent),radial-gradient(900px_600px_at_10%_90%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Услуги</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-200/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <s.icon className="relative w-10 h-10 text-blue-200" />
              <h3 className="relative mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="relative mt-2 text-blue-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Подробнее</h4>
                    <p className="mt-2 text-blue-100/80">Мы подберем план лечения под ваши задачи и сроки, сохранив максимальный комфорт.</p>
                  </div>
                  <button onClick={() => setActive(null)} className="text-blue-100/70 hover:text-white">Закрыть</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
