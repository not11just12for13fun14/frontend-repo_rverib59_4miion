import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Doctors from './components/Doctors'
import Advantages from './components/Advantages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(1600px_1000px_at_20%_10%,rgba(255,255,255,0.06),transparent),radial-gradient(1400px_900px_at_80%_90%,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <header className="sticky top-0 z-20 backdrop-blur-xl bg-slate-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-200/60 via-white/40 to-blue-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_30px_rgba(59,130,246,0.15)]" />
            <span className="font-semibold tracking-wide text-white/90">Magic Doctor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
            <a href="#about" className="hover:text-white transition">О клинике</a>
            <a href="#services" className="hover:text-white transition">Услуги</a>
            <a href="#gallery" className="hover:text-white transition">До и после</a>
            <a href="#doctors" className="hover:text-white transition">Врачи</a>
            <a href="#advantages" className="hover:text-white transition">Преимущества</a>
            <a href="#testimonials" className="hover:text-white transition">Отзывы</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="gallery"><Gallery /></div>
        <div id="doctors"><Doctors /></div>
        <div id="advantages"><Advantages /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-blue-100/70">© {new Date().getFullYear()} Magic Doctor. Все права защищены.</p>
          <p className="text-blue-100/50">Элитная стоматология нового поколения</p>
        </div>
      </footer>
    </div>
  )
}

export default App
