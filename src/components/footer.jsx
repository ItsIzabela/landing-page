export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
        © {new Date().getFullYear()} DevStarter. All rights reserved.
      </div>
    </footer>
  )
}
