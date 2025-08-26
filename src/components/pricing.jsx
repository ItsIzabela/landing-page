export default function Pricing() {
  const plans = [
    { name: "Free", price: "$0", features: ["Basic landing page", "Community support"] },
    { name: "Pro", price: "$19/mo", features: ["Everything in Free", "Custom components", "Priority support"] },
    { name: "Premium", price: "$49/mo", features: ["Everything in Pro", "Unlimited projects", "Dedicated support"] },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
        <p className="mt-4 text-slate-600">Choose a plan that fits your needs.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-2xl font-extrabold text-indigo-600 mt-2">{plan.price}</p>
              <ul className="mt-4 text-slate-600 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="mt-2">✅ {f}</li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 w-full bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
