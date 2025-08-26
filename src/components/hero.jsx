export default function Hero() {
  return (
    <section className="bg-slate-50 py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">
          Build Your Landing Page <span className="text-indigo-600">Faster</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          A modern React + TailwindCSS template to showcase your product or service.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#pricing" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            Get Started
          </a>
          <a href="#features" className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
