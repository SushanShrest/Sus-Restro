import React from "react";
import menuimg from "../../assets/menuimage.jpg";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  fadeUp,
} from "../../../Utils/animation";

const Hero: React.FC = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center py-12 gap-8"
  >
    <motion.img
      variants={fadeUp}
      src={menuimg}
      alt="menuimg"
      className="h-100 w-100"
    />
    <motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-bold leading-tight mt-4"
      >
        Lorem Ipsum
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </motion.p>
    </motion.div>
  </motion.div>
);

export default Hero;
