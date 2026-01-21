import React from 'react'
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Unauthorized Access
        </h2>

        <p className="text-gray-600 mb-6">
          You do not have permission to view this page.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  

export default Unauthorized;

    </>
  )
}

export default Unauthorized;