export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">DevStarter</h1>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
          <li><a href="#faq" className="hover:text-indigo-600">FAQ</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
