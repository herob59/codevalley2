'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [customSoftwareOpen, setCustomSoftwareOpen] = useState(false);
  const [mobileAppOpen, setMobileAppOpen] = useState(false);
  const [webAppOpen, setWebAppOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [fintechOpen, setFintechOpen] = useState(false);
  const [healthCareOpen, setHealthCareOpen] = useState(false);
  const [constructionOpen, setConstructionOpen] = useState(false);
  const [logisticsOpen, setLogisticsOpen] = useState(false);
  const [automotiveOpen, setAutomotiveOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);
  const [edtechOpen, setEdtechOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);

  return (
    <>
        <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <div className="text-xl font-bold">
            <Link href="/" > <img src='assets/hit.png' alt='hit' /></Link>
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
              
                      {/* Companies Dropdown */}
                    <li className="relative group">
                        <button
                          onClick={() => setCompaniesOpen(!companiesOpen)}
                          className="flex items-center gap-2 hover:text-blue-400 transition all out ease-out "
                        >
                          Companies <ChevronDown size={16} />
                        </button>

                        {/* companies Dropdown Menu */}
                        <ul
                          className={`absolute left-0 top-full  w-64 bg-gray-900 shadow-lg p-2 rounded-lg transition-all duration-300 ${
                            companiesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                          }`}
                          onMouseEnter={() => setCompaniesOpen(true)}
                          onMouseLeave={() => setCompaniesOpen(false)}
                        >
                              {/*  Fintech  Dropdown */}
                              <li className="relative group">
                              <Link href="/fintech"> <button
                                  onClick={() => setFintechOpen(!fintechOpen)}
                                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                >
                                  Fintech 
                                </button></Link>
                              </li>

                              {/* Health Care & Wellbeing Dropdown */}
                              <li className="relative group">
                              <Link href= "/healthCare"> <button
                                  onClick={() => setHealthCareOpen(!healthCareOpen)}
                                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                >
                                Health Care & Wellbeing 
                                </button></Link>
                              </li>

                              {/*  Construction  Dropdown */}
                              <li className="relative group">
                                <Link href= "/construction"><button
                                  onClick={() => setConstructionOpen(!constructionOpen)}
                                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                >
                                  Construction 
                                </button></Link>
                              </li>

                              {/* Logistics & Transportation Dropdown */}
                              <li className="relative group">
                              <Link href="/logistics"> <button
                                  onClick={() => setLogisticsOpen(!logisticsOpen)}
                                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                >
                                  Logistics & Transportation 
                                </button></Link>
                              </li>

                                {/*   Automotive Dropdown */}
                              <li className="relative group">
                                <Link href="/automotive"><button
                                  onClick={() => setAutomotiveOpen(!automotiveOpen)}
                                  className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                >
                                  Automotive 
                                </button></Link>
                              </li>  

                                {/*  Travel & Hospitality Dropdown */}
                                <li className="relative group">
                                  <Link href = "/travel"> <button
                                      onClick={() =>  setTravelOpen(!travelOpen)}
                                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                    >
                                      Travel & Hospitality 
                                    </button> </Link>
                              </li>

                                {/*  Edtech Dropdown */}
                              <li className="relative group">
                                  <Link href= "/edtech">  <button
                                      onClick={() => setEdtechOpen(!edtechOpen)}
                                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                    >
                                      Edtech 
                                    </button> </Link>
                              </li>
                                
                                {/*  Insurance & Mortgage Dropdown */}
                                <li className="relative group">
                                  <Link href= "/insurance"> <button
                                      onClick={() =>  setInsuranceOpen(!insuranceOpen)}
                                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded"
                                    >
                                      Insurance & Mortgage 
                                    </button> </Link>
                              </li>
                          </ul>
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
                                    className={`absolute left-0 top-full w-64 bg-gray-900 shadow-lg p-2 rounded-lg transition-all duration-300 ${
                                      servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                    }`}
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                  >
                                    {/* Custom Software Solutions Dropdown */}
                                       <li className="relative group">
                                          <Link href= "/services"> <button
                                            onClick={() => setCustomSoftwareOpen(!customSoftwareOpen)}
                                            className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded" 
                                        >
                                            Custom Software Solutions
                                          </button></Link>
                                        </li>

                                         {/* Mobile App Development Dropdown */}
                                       <li className="relative group">
                                          <Link href= "/services"> <button
                                            onClick={() => setMobileAppOpen(!mobileAppOpen)}
                                            className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded" 
                                        >
                                           Mobile App Development
                                          </button></Link>
                                        </li>

                                              {/* Web App Development Dropdown */}
                                       <li className="relative group">
                                          <Link href= "/services"> <button
                                            onClick={() => setWebAppOpen(!webAppOpen)}
                                            className="flex justify-between w-full px-2 py-2 hover:bg-gray-700 rounded" 
                                        >
                                           Web App Development
                                          </button></Link>
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
