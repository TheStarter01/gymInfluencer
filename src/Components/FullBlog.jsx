import React from "react";
import { LogoImg } from "./Constants";

const relatedBlogs = [
  {
    id: 1,
    title: "10 Superfoods to Add to Your Diet",
    link: "/blogs/superfoods",
  },
  {
    id: 2,
    title: "The Role of Hydration in Your Fitness Journey",
    link: "/blogs/hydration",
  },
  {
    id: 3,
    title: "Meal Prep 101: Save Time and Eat Healthier",
    link: "/blogs/meal-prep",
  },
];

const FullBlog = () => {
  return (
    <div className="mt-32 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <p className="text-center font-[1%] text-zinc-500 mb-5">
            Published on December 18, 2024
          </p>
          <h1 className="text-balance text-4xl mb-[50px] text-center font-semibold text-center tracking-wider text-violet-300 sm:text-5xl">
            How to Maintain a Balanced Diet
          </h1>
        </div>

        {/* Blog Image */}
        <div className="mb-12">
          <img
            src={LogoImg[1].dietImage}
            alt="Balanced Diet"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="space-y-6">
          <p className="mt-12 text-pretty text-[10px] text-zinc-400 sm:text-xl">
            A balanced diet is essential for maintaining good health and overall
            well-being. It provides your body with the nutrients it needs to
            function effectively. Eating a wide variety of foods ensures that
            you get the right balance of vitamins, minerals, and other
            nutrients.
          </p>

          <h2 className="text-xl font-md text-violet-300">
            Key Components of a Balanced Diet
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li className="text-zinc-400">
              <span className="text-violet-300">Carbohydrates:</span> Provide energy and should make up
              about 50-60% of your daily calorie intake. Choose whole grains,
              fruits, and vegetables.
            </li>
            <li className="text-zinc-400">
              <span className="text-violet-300">Proteins:</span> Essential for building and repairing
              tissues. Include lean meats, fish, eggs, beans, and nuts.
            </li>
            <li className="text-zinc-400">
              <span className="text-violet-300">Fats:</span> Important for energy and supporting cell
              growth. Opt for healthy fats like those in avocados, nuts, and
              olive oil.
            </li>
          </ul>
          <div className="flex gap-10 justify-center items-center">
            <img src={LogoImg[2].Carbs} className="w-[30%] h-[32%] rounded-md"/>
            <img src={LogoImg[3].Proteins} className="w-[30%] h-[32%] rounded-md"/>
            <img src={LogoImg[4].Fat} className="w-[30%] h-[32%] rounded-md"/>
          </div>

          <h2 className="text-xl font-md text-violet-300">
            Tips for Maintaining a Balanced Diet
          </h2>
          <ol className="list-decimal list-inside pl-4 space-y-2 text-zinc-400">
            <li>Plan your meals ahead to ensure variety and balance.</li>
            <li>Control portion sizes to avoid overeating.</li>
            <li>Limit your intake of processed foods and sugary drinks.</li>
          </ol>

          <p className="text-zinc-400 mt-10">
            Remember, consistency is key. Small, sustainable changes to your
            eating habits can have a big impact over time. Start making healthier
            choices today for a happier, healthier tomorrow!
          </p>
        </div>

        {/* Related Blogs Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-violet-400">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
              >
                <h3 className="text-lg font-semibold text-violet-300 mb-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="text-violet-500 hover:text-violet-300 font-semibold"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
