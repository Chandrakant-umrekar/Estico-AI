import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useUser } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, setShowLogin } = useUser();
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) navigate("/result");
    else setShowLogin(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-stone-500 inline-flex text-center bg-white px-6 py-1 gap-2 rounded-full border border-neutral-500"
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="text-3xl max-w-[300px] sm:text-6xl tracking-normal font-medium sm:max-w-[590px] mx-auto mt-9 text-center"
      >
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 2 }}
        className="text-slate-800 text-center max-w-xl mx-auto mt-4"
      >
        Unleash creativity with AI. Turn your imagination into visual art in
        seconds - just type, and watch the magic happen.Estico
      </motion.p>
      <motion.button
        onClick={onClickHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        className="sm:text-lg mt-8 flex items-center gap-2 max-w-xl text-white cursor-pointer text-base font-semibold text-center rounded-full border border-solid border-transparent px-[1.2em] py-[0.6em] bg-[#1a1a1a] transition-all duration-200 hover:shadow-[0px_0px_17px_-4px_#2b2bff] hover:border-[#3838ff] hover:bg-[#6e6eff] active:shadow-[0px_0px_17px_-4px_#2b2bff] active:border-[#3838ff] active:scale-95"
      >
        Generate Images
        <img src={assets.star_group} alt="star group" className="h-6" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center gap-3 mt-10"
      >
        {Array(5)
          .fill("")
          .map((item, index) => (
            <img
              src={assets[`sample_img_${index + 1}`]}
              alt="sample"
              key={index}
              width={60}
              className="rounded hover:scale-105 object-cover transition-all duration-300 cursor-pointer max-sm:w-10"
            />
          ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-neutral-600"
      >
        Generated images from Estico.
      </motion.p>
    </motion.div>
  );
}

export default Header;
