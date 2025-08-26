const features = [
  "Fast setup with React + Vite",
  "Modern TailwindCSS styling",
  "Responsive by default",
  "SEO-friendly structure",
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Features</h2>
        <p className="mt-4 text-slate-600">
          Everything you need to launch your project quickly.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-medium text-slate-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
