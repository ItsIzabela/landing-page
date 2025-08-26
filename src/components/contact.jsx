export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
        <p className="mt-4 text-slate-600">We'd love to hear from you.</p>
        <form className="mt-10 space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
          <textarea rows="5" placeholder="Your Message" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"></textarea>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
