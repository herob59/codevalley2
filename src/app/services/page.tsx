"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

import Link from "next/link";
import { Briefcase, Heart, Wrench, Truck, Car, Plane, Book, Shield,
  Code, Smartphone, Globe, Users, Database, CheckSquare, Paintbrush,
 } from "lucide-react";

export default function Services() {
  const industries = [
    { name: "Fintech", icon: <Briefcase size={24} />, route: "/fintech" },
    { name: "Health Care & Wellbeing", icon: <Heart size={24} />, route: "/healthcare" },
    { name: "Construction", icon: <Wrench size={24} />, route: "/construction" },
    { name: "Logistic & Transportation", icon: <Truck size={24} />, route: "/logistics" },
    { name: "Automotive", icon: <Car size={24} />, route: "/automotive" },
    { name: "Travel & Hospitality", icon: <Plane size={24} />, route: "/travel" },
    { name: "EdTech", icon: <Book size={24} />, route: "/edtech" },
    { name: "Insurance & Mortgage", icon: <Shield size={24} />, route: "/insurance" },
  ];
  const services = [
    { name: "Custom Software Solutions", icon: Code, route: "/custom-software-solutions" },
    { name: "Mobile App Development", icon: Smartphone, route: "/mobile-app-development" },
    { name: "Web Development", icon: Globe, route: "/web-development" },
    { name: "Dedicated Team", icon: Users, route: "/dedicated-team" },
    { name: "Design", icon: Paintbrush, route: "/design" },
    { name: "Data Engineering", icon: Database, route: "/data-engineering" },
    { name: "QA Testing", icon: CheckSquare, route: "/qa-testing" },
    { name: "Product Development & Consulting", icon: Briefcase, route: "/product-development-consulting" },
  ];
  return (
    <div>
      <Header /> 
              <section
                    className="relative bg-cover bg-center h-[900px] flex items-center"
                    style={{ backgroundImage: "url('/assets/vector.jpg')" }}
                  >
                  
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              
                    <div className="relative z-10 max-w-2xl text-white px-8 md:px-16">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Solutions for Big Industries</h1>
                      <p className="text-lg md:text-xl">
                          Driven by the need to stand out in a saturated app market, 
                          many businesses seek out custom mobile application developement. 
                          More and more companies are opting for custom development that serves
                          business functions and targets distinct user needs.
                      </p>
                      </div>
                      </section>
                      <section className="bg-white shadow-lg rounded-2xl p-8 mx-auto mt-10 w-full">
                      {/* Section Heading */}
                      <h2 className="text-3xl font-bold text-center text-gray-800 border-b-4 border-blue-500 inline-block pb-2 mb-10">
                        Industries
                      </h2>

                      {/* Industry List */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {industries.map((industry, index) => (
                          <li key={index} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
                            <span className="text-blue-500">{industry.icon}</span>
                            <Link href={industry.route} className="text-gray-700 font-medium hover:text-blue-600">
                              {industry.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>

                  <section className="bg-white shadow-lg rounded-2xl p-8  mx-auto mt-10 w-full">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
                      Services & Solutions
                    </h2>

                    {/* Services List */}
                    <ul className="mt-6 space-y-4">
                      {services.map(({ name, icon: Icon, route }, index) => (
                        <li key={index} className="flex items-center gap-4 text-lg text-gray-700 hover:text-blue-500 transition">
                          <Icon size={24} className="text-blue-500" />
                          <Link href={route} className="hover:underline">{name}</Link>
                        </li>
                      ))}
                    </ul>
                  </section>
      < Footer />  
    </div>
  )
}
