import { LogoImg } from './Constants';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative border left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="relative mx-auto max-w-3xl py-16 sm:py-32 lg:py-40">
          <div className="text-center flex justify-center flex-col">
            <h1 className="text-balance text-4xl font-semibold text-violet-300 tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">
              Track Your Fitness Journey
            </h1>
            <img
              className="rounded-md opacity-[50%] my-8 sm:my-10 md:my-12"
              src={LogoImg[5].Gym01}
              alt="Fitness Journey"
            />
            <p className="mt-6 text-pretty text-sm font-sm text-zinc-400 sm:text-lg md:text-xl lg:text-2xl">
              Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.
            </p>
            <div className="mt-8 flex flex-row items-center justify-center lg:gap-4 gap-6">
              <a
                href="#"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <Link
                to="/learn-more"
                className="text-sm font-semibold text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
