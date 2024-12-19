import React from "react";
import { CheckIcon } from '@heroicons/react/20/solid';

const recentlyAddedPlans = [
  {
    title: "Full-Body Strength Workout",
    summary: "A balanced full-body workout plan to increase strength and endurance.",
    date: "December 18, 2024",
    link: "/workout-plans/full-body-strength",
  },
  {
    title: "HIIT for Beginners",
    summary: "Quick and effective high-intensity interval training for fat loss and muscle gain.",
    date: "December 16, 2024",
    link: "/workout-plans/hiit-for-beginners",
  },
  {
    title: "Beginner’s Home Workout Plan",
    summary: "No gym? No problem! This beginner-friendly home workout plan is all you need.",
    date: "December 14, 2024",
    link: "/workout-plans/beginner-home-workout",
  },
];

const topWorkoutPlans = [
  {
    title: "Muscle Building for Intermediate Lifters",
    summary: "Take your workout to the next level with this muscle-building plan for intermediate lifters.",
    views: "1.5M Views",
    link: "/workout-plans/muscle-building",
  },
  {
    title: "Yoga for Flexibility and Mobility",
    summary: "Improve your flexibility and mobility with this yoga-based workout plan.",
    views: "950K Views",
    link: "/workout-plans/yoga-for-flexibility",
  },
  {
    title: "Strength Training for Women",
    summary: "A specialized workout plan focused on strength training for women of all fitness levels.",
    views: "800K Views",
    link: "/workout-plans/strength-training-for-women",
  },
];

const categories = [
  "Strength Training",
  "HIIT",
  "Yoga",
  "Endurance",
  "Weight Loss",
  "Flexibility",
];

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const WorkoutPlan = () => {
  return (
    <div className="text-gray-200 min-h-screen mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-12 text-4xl font-semibold tracking-wider text-violet-300 sm:text-5xl">
          Explore Our Latest Workout Plans & Pricing
        </h1>

        <p className="mx-auto text-center mt-6 mb-24 max-w-3xl text-lg text-zinc-400">
          Stay fit and healthy with the best workout plans tailored to your goals. Whether you’re aiming for muscle gain, fat loss, or flexibility, we have something for you! Also, choose from a range of pricing plans designed to fit your needs.
        </p>

        {/* Categories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/categories/${category.toLowerCase()}`}
                className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition text-sm font-semibold"
              >
                {category}
              </a>
            ))}
          </div>
        </section>

        {/* Recently Added Plans Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recently Added Workout Plans</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentlyAddedPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{plan.summary}</p>
                <p className="text-xs text-gray-500">Published on {plan.date}</p>
                <a
                  href={plan.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Top Workout Plans Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Top Workout Plans</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topWorkoutPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{plan.summary}</p>
                <p className="text-xs text-gray-500">{plan.views}</p>
                <a
                  href={plan.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="my-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 text-violet-200">Pricing</h2>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-violet-300 sm:text-6xl">
              Choose the right plan for you
            </p>
          </div>
          <p className="mx-auto text-center mt-6 mb-24 max-w-3xl text-lg text-zinc-400 mt-10">
            Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured ? 'relative bg-violet-900 shadow-2xl' : 'bg-white/90 sm:mx-8 lg:mx-0',
                  tier.featured
                    ? ''
                    : tierIdx === 0
                      ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                      : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(tier.featured ? 'text-violet-300' : 'text-violet-600', 'text-base/7')}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? 'text-violet-300' : 'text-violet-600',
                      'text-5xl font-semibold tracking-tight',
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span className={classNames(tier.featured ? 'text-violet-400' : 'text-violet-500', 'text-base')}>/month</span>
                </p>
                <p className={classNames(tier.featured ? 'text-zinc-300' : 'text-zinc-600', 'mt-6 text-base/7')}>
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? 'text-zinc-300' : 'text-zinc-600',
                    'mt-8 space-y-3 text-sm/6 sm:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className={classNames(tier.featured ? 'text-violet-200' : 'text-violet-600', 'h-6 w-5 flex-none')}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-violet-500 text-white shadow-sm hover:bg-violet-600 focus-visible:outline-violet-500'
                      : 'text-violet-600 ring-1 ring-inset ring-violet-200 hover:ring-violet-300 focus-visible:outline-violet-600',
                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkoutPlan;
