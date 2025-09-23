import React from "react";
import { motion } from "framer-motion";
import homeimage from "../../../assets/homeimage.jpg";
import { fadeUp } from "../../../Utils/animation";

const HeroRight: React.FC = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.8 }} // optional delay
    className="mt-12 md:mt-0 w-full flex justify-center"
  >
    <img
      src={homeimage}
      alt="Home Image"
      className="w-[300px] h-[300px] lg:translate-x-14 drop-shadow-2xl rounded-full border-4 border-orange-400 object-cover"
    />
  </motion.div>
);

export default HeroRight;
