import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "../context/AppContext";
import { assets } from "../assets/assets";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useUser();
  console.log(image);

  let stateImage = image;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      try {
        const response = await generateImage(input);
        if (response) {
          setImage(response);
          setIsImageLoaded(true);
          console.log(response);
        }
      } catch (error) {
        console.error("Error generating image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.form
      encType="multipart/form-data"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <div>
        <div className="relative">
          <img src={stateImage} alt="image" className="max-w-sm rounded" />
          <span
            className={`absolute bottom-0 bg-blue-500 left-0 h-1 ${
              loading ? "w-full translate-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>
        <p className={!loading ? "hidden" : "block"}>Generating...</p>
      </div>

      {!isImageLoaded && (
        <div className="flex rounded-full w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Describe what you want to generate"
            className="placeholder-color flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 sm:px-16 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={stateImage}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
}

export default Result;
