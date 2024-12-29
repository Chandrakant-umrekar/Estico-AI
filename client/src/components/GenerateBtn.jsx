import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useUser } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
function GenerateBtn() {
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
      className="pb-16 text-center content-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-4 md:py-14">
        See the magic. Try now
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={onClickHandler}
          className="sm:text-lg flex items-center gap-2 max-w-xl text-white cursor-pointer text-base font-semibold text-center rounded-full border border-solid border-transparent px-[1.2em] py-[0.6em] bg-[#1a1a1a] transition-all duration-200 hover:shadow-[0px_0px_17px_-4px_#2b2bff] hover:border-[#3838ff] hover:bg-[#6e6eff] active:shadow-[0px_0px_17px_-4px_#2b2bff] active:border-[#3838ff] active:scale-95"
        >
          Generate Images
          <img src={assets.star_group} alt="star" className="h-6" />
        </button>
      </div>
    </motion.div>
  );
}

export default GenerateBtn;
