import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LogoImg } from './Constants'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// Navigation items
const navigation = [
  { name: 'Features', href: '/feature' },
  { name: 'Diet Plan', href: '/diet-plan' },
  { name: 'Workout Plans', href: '/workout-plans' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false) // Manage login modal state

  // Function to close mobile menu after menu item click
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 tracking-widest">
            <img src={LogoImg[0].image} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-5" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold overflow-hidden text-white hover:text-violet-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => setLoginModalOpen(true)} // Open login modal
            className="text-sm font-semibold text-violet-500 hover:text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu for smaller screens */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 tracking-widest">
              <img src={LogoImg[0].image} alt="Logo" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-violet-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="mx-3 block rounded-lg px-3 py-2 text-base font-sm text-white hover:text-black hover:bg-violet-200"
                    onClick={handleMenuItemClick} // Close menu on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => setLoginModalOpen(true)} // Open login modal
                  className="mx-3 block rounded-lg px-3 py-2.5 text-base font-sm text-violet-500 hover:text-white"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Login Modal */}
      <Dialog open={loginModalOpen} onClose={() => setLoginModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <DialogPanel className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-violet-500">Login</h2>
              <button
                onClick={() => setLoginModalOpen(false)} // Close the modal
                className="text-gray-500 hover:text-gray-700"
              >
                &times; {/* Close button */}
              </button>
            </div>
            {/* Login Form */}
            <form>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-300"
              >
                Login
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}

export default Navbar
