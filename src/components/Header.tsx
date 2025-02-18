'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src='assets/hit.png' alt='hit' />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 list-none">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </li>
         
          <li>
            <Link href="/products" className="hover:text-gray-400">Products</Link>
          </li>


         {/* Services Dropdown */}
         <li className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2 hover:text-blue-400 transition all out ease-out "
            >
              Services <ChevronDown size={16} />
            </button>

            {/* Services Dropdown Menu */}
            <ul
              className={`absolute left-0 top-full w-52 bg-gray-900 shadow-lg p-2 rounded-lg transition-all duration-300 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* Industries Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                >
                  Industries <ChevronRight size={16} />
                </button>

                {/* Industries Submenu */}
                <ul
                  className={`absolute left-full top-0 w-56 bg-gray-900 shadow-lg p-2 rounded-lg transition-all duration-300 ${
                    industriesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {[
                    "Fintech",
                    "Health Care & Wellbeing",
                    "Construction",
                    "Logistic & Transportation",
                    "Automotive",
                    "Travel & Hospitality",
                    "EdTech",
                    "Insurance & Mortgage",
                  ].map((industry) => (
                    <li key={industry}>
                      <Link
                        href="/services"
                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                      >
                        {industry}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Services & Solutions Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                >
                  Services & Solutions <ChevronRight size={16} />
                </button>

                {/* Services & Solutions Submenu */}
                <ul
                  className={`absolute left-full top-0 w-64 bg-gray-900 shadow-lg p-2 rounded-lg transition-all duration-300 ease-in${
                    solutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {[
                    "Enterprise Software Solution",
                    "Mobile App Development",
                    "Dedicated Teams",
                    "Design",
                    "Data Engineering",
                    "QA Testing",
                    "Product Development & Consulting",
                  ].map((service) => (
                    <li key={service}>
                      <Link
                        href="/services"
                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
         
         
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar & Get Started */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
          />
          <Search className="absolute right-3 top-2 text-gray-400" size={18} />
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-full">Get Started</button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    <div className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-900 p-4 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <button
        className="absolute top-4 right-4 focus:outline-none"
        onClick={() => setMenuOpen(false)}
      >
        <X size={24} className="text-white" />
      </button>
      <nav className="mt-10">
        <ul className="list-none">
          <li className="py-2 border-b border-gray-700">
            <Link href="/" className="block text-white">Home</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/about" className="block text-white">About</Link>
          </li>
          <li className="py-2 border-b border-gray-700">
            <Link href="/products" className="block text-white">Products</Link>
          </li>
          <li className="py-2 border-b border-gray-700 ">
            <Link href="/services" className=" text-white flex ">
               Services <ChevronDown size={16} className=" h-7"/>
            </Link>
          </li>
         
          
          <li className="py-2 border-b border-gray-700">
            <Link href="/contact" className="block text-white">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </>
  );
}
