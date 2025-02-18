'use client'
import Header from '@/components/Header';
import React from 'react'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "How Can Fintech Consulting Help My Business?",
    answer: `Fintech consulting services offer solutions such as:
    - Digital transformation strategies,
    - AI-powered financial services,
    - Payment gateway integration,
    - Regulatory compliance guidance,
    - Cybersecurity solutions.`,
  },
  {
    question: "What Are the Key Benefits of Fintech Consulting?",
    answer: `Some advantages of fintech consulting include:
    - Increased operational efficiency,
    - Enhanced security and compliance,
    - Seamless digital payment solutions,
    - Scalable cloud-based infrastructure,
    - Data-driven decision-making.`,
  },
  {
    question: "What Technologies Do Fintech Consultants Specialize In?",
    answer: `Fintech consultants work with technologies such as:
    - Blockchain and decentralized finance (DeFi),
    - AI and machine learning in finance,
    - Cloud computing for financial applications,
    - API-driven open banking solutions,
    - Big data and predictive analytics.`,
  },
];

export default function Fintech() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ =(index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

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
                  {/* FAQ section*/}
                  <section>
                        <div className="max-w-5xl mx-auto p-4">
                          <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
                          <div className="space-y-4">
                            {faqs.map((faq, index) => (
                              <div key={index} className="border rounded-lg p-4">
                                <button
                                  className="w-full text-left font-semibold text-lg"
                                  onClick={() => toggleFAQ(index)}
                                >
                                  {faq.question}
                                </button>
                                {openIndex === index && (
                                  <p className="mt-2 text-gray-600 whitespace-pre-line">{faq.answer}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                  </section>
                 
              <Footer />
      </div>
                                        
  )
}

