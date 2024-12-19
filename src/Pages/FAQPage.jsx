import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I log my workouts?",
      answer: "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
    },
    {
      question: "Can I track my calories burned?",
      answer:
        "Yes, you can track calories burned through the application integrated tracking features.",
    },
    {
      question: "Is this application suitable for beginners?",
      answer:
        "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
    },
    {
      question: "What features does the application offer?",
      answer:
        "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
    },
    {
      question: "How can I reset my password?",
      answer: 'You can reset your password by going to the login screen and selecting "Forgot Password."',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white min-h-screen mt-32 px-4 py-10 mb-[5%] sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-balance text-4xl font-semibold text-center tracking-wider text-violet-300 sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className=" mx-auto text-center my-10 max-w-xl text-lg/8 text-pretty text-sm font-sm text-zinc-400">
        Find answers to your questions about the GymFluencer application, designed to enhance your fitness journey.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all delay-500 duration-1000 ${
                activeIndex === index
                  ? "border-violet-400"
                  : "border-violet-400"
              }`}
            >
              {/* Question Button */}
              <button
                className="w-full p-4 sm:p-5 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Section */}
              <div
                className={`transition-all duration-300 ease-in  ${
                  activeIndex === index
                    ? "max-h-screen p-4 sm:p-5 border-t border-gray-600"
                    : "max-h-0 p-0"
                }`}
                style={{ overflow: "hidden" }}
              >
                <p className="text-zinc-400 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
