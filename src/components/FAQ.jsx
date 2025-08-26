import { useState } from "react"

const faqs = [
  { q: "What is this project?", a: "It's a React + Tailwind landing page template." },
  { q: "Can I use it for free?", a: "Yes! You can modify and use it for your portfolio or projects." },
  { q: "How do I deploy?", a: "Use Vercel or Netlify for free hosting with GitHub integration." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-xl p-4">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex justify-between w-full text-left">
                <span className="font-semibold">{faq.q}</span>
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="mt-2 text-slate-600">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
