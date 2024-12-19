import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { LogoImg } from './Constants'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";





function NewsLetter() {
  return (
    <>
    <div className="relative isolate py-10 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <dl className="grid grid-cols-1 max-w-[75%] sm:grid-cols-1 lg:pt-2">
            <div className="flex flex-col justify-center">
              <dt className="mt-4 text-base font-semibold text-violet-200">
                <img src={LogoImg[0].image} className='w-[50%] ml-2'/>
              </dt>
              <dd className="mt-2 text-base/7 text-zinc-500 pl-2">
              Fitness Plaza, 2nd Floor, Sector 22, Chandigarh, Punjab 160022, India"
              </dd>
              <dt className='flex gap-3 mt-2 pl-2'>
                <FaFacebookSquare className='text-zinc-600 hover:text-violet-300'/>
                <FaInstagram className='text-zinc-600 hover:text-violet-300'/>
                <FaXTwitter className='text-zinc-600 hover:text-violet-300'/>
              </dt>
            </div>
          </dl>
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight text-violet-300">Subscribe to our newsletter</h2>
            <p className="mx-auto mt-6 text-lg/8 text-pretty text-sm font-sm text-zinc-400">
            Subscribe to our newsletter and stay updated with fitness tips, workout plans, and exclusive offers. Join our community and take a step closer to your fitness goals!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-1 focus:-outline-offset-2 focus:outline-violet-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
      <div className='absolute zIndex:100'></div>
            <p className='text-center border-t border-zinc-400 border-zinc-800 lg:mt-[-40px] my-[-30px] pt-2 lg:text-sm text-[10px] opacity-[30%]'>Copyright 2024 GymFluencer | All rights reserved.</p>
  </>
  )
}


export default NewsLetter