import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle popup visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
    } else {
      setError("");
      // Handle the login logic here (e.g., authentication with backend)
      console.log("Logged in with", email, password);
    }
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
      {/* Button to trigger the popup */}
      <button
        onClick={openModal}
        className="rounded-full bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700 focus:outline-none transition duration-300 transform hover:scale-105"
      >
        Login
      </button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-violet-600">Login</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                &times; {/* Close button */}
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-300"
              >
                Login
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-violet-600 font-semibold hover:underline"
                  onClick={closeModal} // Close modal when sign up link is clicked
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
