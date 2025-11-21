import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_40%_20%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Контакты и запись</h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl p-6">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
              <iframe title="map" src="https://maps.google.com/maps?q=Moscow&t=&z=13&ie=UTF8&iwloc=&output=embed" className="absolute inset-0 w-full h-full" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-200/10 via-amber-100/10 to-white/10 mix-blend-screen" />
            </div>
          </div>

          <form onSubmit={submit} className="relative rounded-3xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-2xl p-6">
            <div className="grid gap-4">
              <label className="text-blue-100/80">Имя
                <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="Ваше имя" />
              </label>
              <label className="text-blue-100/80">Телефон
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-300/40" placeholder="+7" />
              </label>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-slate-900 bg-gradient-to-br from-amber-200 via-amber-100 to-blue-100 shadow-[0_10px_40px_rgba(250,204,21,0.25)]">
                <span className="relative z-10">Записаться</span>
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)] opacity-80 mix-blend-screen" />
              </motion.button>
              {submitted && <p className="text-green-200">Мы свяжемся с вами в ближайшее время.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
