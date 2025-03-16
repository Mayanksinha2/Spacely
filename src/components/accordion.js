import React, { useState } from "react";

const Accordion = () => {
  const [activeCategory, setActiveCategory] = useState("General"); // State to track the selected category

  const categories = ["General", "Pricing", "Others"]; // Categories for selection

  const questions = {
    General: [
      {
        header: "How Spacely works?",
        text: "Our service provides high-quality solutions tailored to your needs.",
      },
      {
        header: "How can I contact support?",
        text: "You can contact support via email or our 24/7 chat service.",
      },
      {
        header: "Do you offer refunds?",
        text: "Yes, we offer refunds within the first 30 days of purchase.",
      },
      {
        header: "Is there a free trial available?",
        text: "Yes, we provide a 14-day free trial for all new users.",
      },
    ],
    Pricing: [
      {
        header: "What are your pricing plans?",
        text: "We offer Basic, Standard, and Premium plans to suit your needs.",
      },
      {
        header: "Are there any hidden fees?",
        text: "No, there are no hidden fees. All costs are transparent.",
      },
      {
        header: "Can I upgrade my plan later?",
        text: "Yes, you can upgrade your plan at any time.",
      },
      {
        header: "Do you offer discounts for annual payments?",
        text: "Yes, we offer a 20% discount for annual payments.",
      },
    ],
    Others: [
      {
        header: "Can I customize my account?",
        text: "Yes, you can customize your account settings and preferences.",
      },
      {
        header: "Do you support multiple languages?",
        text: "Yes, our platform supports multiple languages.",
      },
      {
        header: "Is my data secure?",
        text: "Yes, we use advanced encryption to ensure your data is secure.",
      },
      {
        header: "Can I cancel my subscription anytime?",
        text: "Yes, you can cancel your subscription at any time.",
      },
    ],
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div
        className="container mx-auto border border-gray-300 rounded-lg p-6 max-w-4xl"
        style={{ borderWidth: "1px" }} // Thin border around the container
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-dark dark:text-dark-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 mx-2 rounded-lg font-semibold ${
                activeCategory === category
                  ? "bg-[#FFDDC1] text-[#f78d30]" // Active category styling
                  : "bg-gray-200 text-gray-600" // Inactive category styling
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col items-center">
          {questions[activeCategory].map((item, index) => (
            <AccordionItem
              key={index}
              number={index + 1}
              header={item.header}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ number, header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-6 w-full max-w-2xl rounded-lg bg-white p-4 shadow-md dark:bg-dark-2 border border-gray-300">
      <button
        className="flex w-full items-center text-left"
        onClick={handleToggle}
      >
        {/* Numbering */}
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black font-bold">
          {number}
        </div>

        {/* Question Header */}
        <h4 className="flex-1 text-lg font-semibold text-black">{header}</h4>

        {/* Arrow Icon */}
        <div className="ml-4 transform duration-200">
          <svg
            className={`transform duration-200 ${active ? "rotate-90" : ""}`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>
      </button>

      {/* Answer Text */}
      <div
        className={`mt-2 pl-12 text-base text-gray-600 dark:text-dark-6 ${
          active ? "block" : "hidden"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
