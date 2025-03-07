'use client';

import { useState } from "react";
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ Use next/navigation instead of next/router

export default function CallToAction() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("signup"); // Toggle between SignUp/Login
    const router = useRouter();
  return (
            <div className="px-2 py-20 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                    <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                       style={{backgroundImage: "url(/assets/cta.jpg) "}}>
                    </div>
                </div>
                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        Promoting Sustainable Lifestyle 
                        <span className="text-indigo-600"> Choices</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                       Unlock your Tech Career Today. Learn how to code On a Daily basis by choosing a course Sustainable
                       for your. Join Our Developer Community and meet up with other developers that will work together
                       with you in your jorney as a developer.
                    </p>
                    <div className="text-center">
                        {/* Get Started Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Get Started
                        </button>

                        {/* Modal Overlay */}
                        <AnimatePresence>
                            {isOpen && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                            >
                                {/* Modal Content */}
                                <motion.div
                                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                                >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    ✖
                                </button>

                                {/* Modal Heading */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Welcome to Code Valley's Academy
                                </h2>

                                {/* Tabs for Sign Up & Login */}
                                <div className="flex justify-center mb-4">
                                    <button
                                    className={`px-4 py-2 ${activeTab === "signup" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("signup")}
                                    >
                                    Sign Up
                                    </button>
                                    <button
                                    className={`px-4 py-2 ml-4 ${activeTab === "login" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("login")}
                                    >
                                    Login
                                    </button>
                                </div>

                                {/* Animated Forms */}
                                <AnimatePresence mode="wait">
                                    {activeTab === "signup" ? (
                                    <motion.form
                                        key="signup"
                                        className="space-y-4"
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 50, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <button
                                        type="button"
                                        onClick={() => setActiveTab("login")} // Redirects to Login Tab
                                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                                        >
                                        Sign Up
                                        </button>
                                    </motion.form>
                                    ) : (
                                    <motion.form
                                        key="login"
                                        className="space-y-4"
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <button
                                        type="button"
                                        onClick={() => router.push("/academy")} // Redirects to Academy Page
                                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                                        >
                                        Login
                                        </button>
                                    </motion.form>
                                    )}
                                </AnimatePresence>
                                </motion.div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                </div>
            </div>
        </div>
  )
}
