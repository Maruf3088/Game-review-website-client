import React from "react";
import faq from "../assets/faq.png";

const Faq = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="text-center px-4 container mx-auto">
        <h1 data-aos="fade-up" className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          Get answers to the most common questions about the Chill Games review platform. Learn how to share, manage, and explore reviews from real gamers like you.
        </p>
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10 mt-10">
        <div data-aos="fade-left" data-aos-delay="400" className="w-full lg:w-1/2 space-y-4">
          {/* FAQ Items */}
          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              How can I submit a game review?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              After logging in, go to the "Add Review" page, fill in the game details, write your review, and click submit.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Can I edit or delete my submitted reviews?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              Yes! Go to "My Reviews" to see your submissions. You can update or delete each review using the available buttons.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              How does the rating system work?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              Ratings are provided on a scale of 1 to 5. This helps others get a quick impression of your overall opinion on the game.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              What is the Watch List feature?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              You can save any game review you find interesting to your Watch List. It's like bookmarking games you want to explore later.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Who can see my reviews?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              All published reviews are visible on the “All Reviews” page. However, only you can manage your own reviews from your account.
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div data-aos="fade-right" data-aos-delay="400" className="w-full lg:w-1/2">
          <img src={faq} alt="FAQ Illustration" className="w-full max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
