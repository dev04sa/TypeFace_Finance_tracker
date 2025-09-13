// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Personal Finance Assistant
      </h1>
      <p className="max-w-xl text-gray-600 mb-8">
        Track your income and expenses, visualize spending, and stay on top of your finances.
      </p>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
        >
          Login
        </Link>
      </div>
    </div>
  )
}
