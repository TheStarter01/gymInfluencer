import React from "react";
import { CgGym } from "react-icons/cg";
import { GiWeightLiftingUp, GiFruitBowl } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import { TbHeartDiscount } from "react-icons/tb";

const recentlyAddedFeatures = [
  {
    title: "Real-Time Workout Tracking",
    summary:
      "Monitor your workouts in real-time with detailed insights into your performance and progress.",
    date: "December 18, 2024",
    link: "/features/workout-tracking",
  },
  {
    title: "AI-Powered Rep Counting",
    summary:
      "Say goodbye to manual counting! Our AI tracks your reps and sets automatically for a seamless experience.",
    date: "December 16, 2024",
    link: "/features/ai-rep-counting",
  },
  {
    title: "Personalized Diet Plans",
    summary:
      "Get custom meal plans tailored to your fitness goals, dietary preferences, and health needs.",
    date: "December 14, 2024",
    link: "/features/diet-plans",
  },
];

const topFeatures = [
  {
    title: "Calorie Burn Estimation",
    summary:
      "Track calories burned during workouts with precision to maximize your fitness goals.",
    views: "1.3M Views",
    link: "/features/calorie-estimation",
  },
  {
    title: "Strength Training Plans",
    summary:
      "Access expert-crafted strength training plans to build muscle and improve endurance.",
    views: "980K Views",
    link: "/features/strength-training",
  },
  {
    title: "Hydration Tracking",
    summary:
      "Ensure optimal hydration with our water intake tracker integrated into your fitness journey.",
    views: "850K Views",
    link: "/features/hydration-tracking",
  },
];

const categories = [
  "Workout Tracking",
  "AI Features",
  "Diet Planning",
  "Strength Training",
  "Cardio & Endurance",
  "Wellness Tools",
];

const FeaturePage = () => {
  return (
    <div className="text-gray-200 min-h-screen mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-12 text-4xl font-semibold tracking-wider text-violet-300 sm:text-5xl">
          Explore Our Innovative Features
        </h1>
        <p className="mx-auto text-center mt-6 mb-24 max-w-3xl text-lg text-zinc-400">
          Discover cutting-edge features that redefine your fitness experience.
          From intelligent tracking to personalized plans, we’ve got everything
          you need to achieve your goals.
        </p>

        {/* Categories Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition text-sm font-semibold"
              >
                {category}
              </a>
            ))}
          </div>
        </section>

        {/* Recently Added Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recently Added Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentlyAddedFeatures.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{feature.summary}</p>
                <p className="text-xs text-gray-500">Released on {feature.date}</p>
                <a
                  href={feature.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Top Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Top Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{feature.summary}</p>
                <p className="text-xs text-gray-500">{feature.views}</p>
                <a
                  href={feature.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturePage;
