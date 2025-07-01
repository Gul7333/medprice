// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">MedPrice</Link>
        </div>

        {/* Hamburger Menu (checkbox-based toggle) */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="text-2xl cursor-pointer">☰</label>

          {/* Mobile Menu */}
          <div className="absolute left-0 right-0 mt-4 bg-white shadow-md rounded-md p-4 space-y-2 text-gray-700 hidden peer-checked:block">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/about" className="block hover:text-blue-600">About</Link>
            <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
