import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold">
        Customers Testimonials
      </h1>
      <p className="text-gray-500 mb-12">What Our Users Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="bg-white/20 p-12 rounded-lg shadow-md  border w-80 m-auto cursor-pointer hover:scale-[1.02] translate-all duration-300"
            key={index}
          >
            <div>
              <img
                src={testimonial.image}
                alt="testimonials"
                className="rounded-full w-14"
              />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="mb-4 text-gray-500">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img src={assets.rating_star} alt="star" key={index} />
                  ))}
              </div>
              <p className="text-gray-600 text-center text-sm">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
