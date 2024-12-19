import React from "react";

const recentlyAdded = [
  {
    title: "How to Maintain a Balanced Diet",
    summary: "Learn how to create a meal plan that ensures optimal nutrition and supports your health goals.",
    date: "December 18, 2024",
    link: "/blogs/balanced-diet",
  },
  {
    title: "Top 5 Home Workouts",
    summary: "Short on time? These home-friendly exercises will keep you fit and healthy without the need for a gym.",
    date: "December 16, 2024",
    link: "/blogs/home-workouts",
  },
  {
    title: "10 Ways to Stay Motivated",
    summary: "Discover practical tips to keep you inspired and on track with your fitness journey.",
    date: "December 14, 2024",
    link: "/blogs/stay-motivated",
  },
];

const topBlogs = [
  {
    title: "The Mental Health Benefits of Exercise",
    summary: "Find out how regular exercise improves mental well-being and reduces stress.",
    views: "1.2M Views",
    link: "/blogs/mental-health-benefits",
  },
  {
    title: "Why You Should Start Yoga Today",
    summary: "Explore the physical and mental benefits of yoga and how it can transform your life.",
    views: "950K Views",
    link: "/blogs/yoga-benefits",
  },
  {
    title: "The Importance of Hydration",
    summary: "Understand the critical role of hydration in your daily life and how it impacts your fitness.",
    views: "870K Views",
    link: "/blogs/hydration-importance",
  },
];

const categories = [
  "Nutrition",
  "Fitness Tips",
  "Mental Health",
  "Workout Plans",
  "Yoga",
  "Lifestyle",
];

const BlogPage = () => {
  return (
    <div className="text-gray-200 min-h-screen mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-balance text-center mb-12  text-4xl font-semibold tracking-wider text-violet-300 sm:text-5xl">Explore Our Latest Insights</h1>
        <p className="mx-auto text-center mt-6 mb-24 max-w-3xl text-lg/8 text-pretty text-sm font-sm text-zinc-400">Welcome to our blog! Discover expert tips, inspiring stories, and the latest insights on fitness, health, and lifestyle. From workout plans to wellness hacks, find everything you need to stay motivated and thrive. Dive in and get inspired!</p>
        {/* Recently Added Section */}

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
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recently Added</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentlyAdded.map((blog, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{blog.summary}</p>
                <p className="text-xs text-gray-500">Published on {blog.date}</p>
                <a
                  href={blog.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Top Blogs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Top Blogs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topBlogs.map((blog, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-4">{blog.summary}</p>
                <p className="text-xs text-gray-500">{blog.views}</p>
                <a
                  href={blog.link}
                  className="text-violet-500 hover:text-violet-300 text-sm font-semibold mt-4 block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        
      </div>
    </div>
  );
};

export default BlogPage;
