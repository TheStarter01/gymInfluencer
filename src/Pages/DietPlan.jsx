import React from "react";
import { CheckIcon } from '@heroicons/react/20/solid';

const dietPlans = [
  {
    title: "Keto Diet for Beginners",
    summary: "A low-carb, high-fat diet plan to help you lose weight and boost energy.",
    duration: "4 Weeks",
    caloriesPerDay: "1,500 kcal",
    link: "/diet-plans/keto-for-beginners",
    meals: ["Breakfast", "Lunch", "Dinner"],
  },
  {
    title: "Mediterranean Diet",
    summary: "A heart-healthy diet plan rich in fruits, vegetables, and healthy fats.",
    duration: "6 Weeks",
    caloriesPerDay: "2,000 kcal",
    link: "/diet-plans/mediterranean-diet",
    meals: ["Breakfast", "Lunch", "Dinner", "Snacks"],
  },
  {
    title: "Vegan Meal Plan",
    summary: "A plant-based diet plan focused on improving health and reducing environmental impact.",
    duration: "4 Weeks",
    caloriesPerDay: "1,800 kcal",
    link: "/diet-plans/vegan-meal-plan",
    meals: ["Breakfast", "Lunch", "Dinner"],
  },
];

const featuredDietPlans = [
  {
    title: "Intermittent Fasting Diet",
    summary: "A time-restricted eating plan for weight loss and metabolic health.",
    duration: "8 Weeks",
    link: "/diet-plans/intermittent-fasting",
    caloriesPerDay: "Varies",
    meals: ["Lunch", "Dinner"],
    benefits: [
      "Promotes fat burning",
      "Improves mental clarity",
      "Reduces inflammation",
    ],
  },
  {
    title: "Paleo Diet",
    summary: "Eat like our ancestors with this high-protein, low-carb paleo diet.",
    duration: "6 Weeks",
    link: "/diet-plans/paleo-diet",
    caloriesPerDay: "2,200 kcal",
    meals: ["Breakfast", "Lunch", "Dinner"],
    benefits: [
      "Supports muscle growth",
      "Increases energy",
      "Improves digestion",
    ],
  },
];

const DietPlan = () => {
  return (
    <div className="min-h-screen mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-12 text-4xl font-semibold tracking-wider text-violet-300 sm:text-5xl">
          Find the Perfect Diet Plan for You
        </h1>
        <p className="mx-auto text-center mt-6 mb-24 max-w-3xl text-lg text-zinc-400">
          Whether you want to lose weight, gain energy, or follow a specific nutrition style, our expertly designed diet plans can help you achieve your health goals.
        </p>

        {/* Featured Diet Plans Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-violet-200 mb-12 text-center">Featured Diet Plans</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDietPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{plan.summary}</p>
                <p className="text-xs text-gray-500">Duration: {plan.duration}</p>
                <p className="text-xs text-gray-500">Calories per Day: {plan.caloriesPerDay}</p>
                <p className="text-xs text-gray-500">Meals: {plan.meals.join(", ")}</p>
                <div className="mt-4">
                  <h4 className="text-violet-500 font-semibold">Benefits</h4>
                  <ul className="mt-2 space-y-1 text-gray-400">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-x-2">
                        <CheckIcon className="h-5 w-5 text-violet-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={plan.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Get Started → 
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Diet Plan Suggestions Section */}
        <section className="mb-16">
          <h2 className="text-2xl text-violet-200 mb-6 text-center">Our Diet Plans</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dietPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{plan.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{plan.summary}</p>
                <p className="text-xs text-gray-500">Duration: {plan.duration}</p>
                <p className="text-xs text-gray-500">Calories per Day: {plan.caloriesPerDay}</p>
                <p className="text-xs text-gray-500">Meals: {plan.meals.join(", ")}</p>
                <a
                  href={plan.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Explore Plan →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 bg-gradient-to-r from-violet-500 via-indigo-600 to-violet-400 p-10 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-white">
            Ready to start your healthy eating journey?
          </h2>
          <p className="text-center text-lg text-white mt-4">
            Choose a diet plan, stick with it, and see how your body transforms. Your healthier future starts today!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/diet-plans"
              className="bg-white text-violet-500 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100"
            >
              Browse All Diet Plans
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DietPlan;
