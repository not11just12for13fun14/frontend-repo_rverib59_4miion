import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function useParallax(strength = 20) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [ -1, 1 ], [ strength, -strength ]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(x, [ -1, 1 ], [ -strength, strength ]), { stiffness: 120, damping: 20 })

  const onMove = (e) => {
    const { innerWidth, innerHeight } = window
    const nx = (e.clientX / innerWidth) * 2 - 1
    const ny = (e.clientY / innerHeight) * 2 - 1
    x.set(nx)
    y.set(ny)
  }
  return { rx, ry, onMove }
}

const SparkButton = ({ children, className = '', ...props }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-slate-900 bg-gradient-to-br from-amber-200 via-amber-100 to-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_15px_40px_rgba(0,0,0,0.35)] transition-all ${className}`}
    {...props}
  >
    <span className="relative z-10 drop-shadow">{children}</span>
    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)] opacity-80 mix-blend-screen" />
    <span className="pointer-events-none absolute -inset-10 bg-[conic-gradient(from_0deg,rgba(255,255,255,0)_0deg,rgba(255,255,255,0.8)_120deg,rgba(255,255,255,0)_300deg)] animate-[spin_6s_linear_infinite]" />
  </motion.button>
)

export default function Hero() {
  const { rx, ry, onMove } = useParallax(10)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handler = (e) => onMove(e)
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [onMove])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_30%,rgba(255,255,255,0.08),transparent),radial-gradient(1000px_700px_at_80%_70%,rgba(59,130,246,0.12),transparent)]" />

      <motion.div style={{ rotateX: rx, rotateY: ry }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_10px_60px_rgba(59,130,246,0.25)]"
          >
            Magic Doctor — элитная стоматология нового поколения
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-xl"
          >
            Кинематографический комфорт, бескомпромиссная точность и безупречная эстетика — в каждом движении.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SparkButton>Записаться на приём</SparkButton>
            <SparkButton className="bg-gradient-to-br from-blue-100 via-white to-amber-100">Консультация</SparkButton>
          </div>
        </div>

        <div className="relative h-[420px] lg:h-[520px]">
          <motion.div
            className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_80px_rgba(15,23,42,0.6)]"
            style={{ rotateX: rx, rotateY: ry }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)]" />
              <div className="absolute -inset-1 bg-[radial-gradient(circle_at_20%_-10%,rgba(250,204,21,0.25),transparent_25%),radial-gradient(circle_at_120%_120%,rgba(59,130,246,0.25),transparent_30%)]" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: useSpring(useTransform(rx, [-10, 10], [-8, 8]), { stiffness: 90, damping: 15 }) }}
            className="absolute -top-8 -right-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-200/40 to-amber-100/30 backdrop-blur-2xl border border-white/20 shadow-[0_10px_60px_rgba(59,130,246,0.3)]"
          />
          <motion.div
            style={{ y: useSpring(useTransform(ry, [-10, 10], [8, -8]), { stiffness: 90, damping: 15 }) }}
            className="absolute -bottom-10 -left-8 w-56 h-56 rounded-full bg-gradient-to-tr from-white/10 via-blue-200/30 to-amber-100/20 backdrop-blur-2xl border border-white/20 shadow-[0_10px_80px_rgba(250,204,21,0.25)]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950/90" />
    </section>
  )
}
