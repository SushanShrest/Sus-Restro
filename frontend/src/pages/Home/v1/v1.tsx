import React from "react";
import homeimage from "../../assets/homeimage.jpg";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Carousel } from "antd";

// Home.tsx (top of file, before component)
const containerVariants: Variants = {
  hidden: { opacity: 0 }, // parent starts invisible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // children animate one after another
      delayChildren: 0.2, // wait before starting children animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // fade & slide down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const divStyle: React.CSSProperties = {
  placeItems: "center",
  width: "100%",
  boxSizing: "border-box",
};
const imgStyle: React.CSSProperties = {
  height: "400px",
  margin: "0 auto",
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "contain",
  padding: "5px",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
};

const Home = () => {
  return (
    <section className=" bg-white dark:bg-neutral-800 dark:text-white">
      <div className="bg-gradient-to-br from-orange-800 to-stone-900">
        {/* <Carousel autoplay>
          {[car1, car2, car3, car4].map((src, i) => (
            <div
              key={i}
              // inline styles -> highest likelihood to win over library CSS
              style={{
                // display: "grid", // centers content reliably
                placeItems: "center", // centers horizontally + vertically
                height: 200, // slide height
                width: "100%",
                // padding: "0 12px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                style={{
                  display: "block", // remove inline baseline offset
                  margin: "0 auto", // horizontal center fallback
                  maxHeight: "100%", // fill available slide height
                  maxWidth: "100%", // don't overflow horizontally
                  objectFit: "contain", // preserve aspect ratio
                  marginTop: "5px",
                }}
              />
            </div>
          ))}
        </Carousel> */}
        <Carousel autoplay>
          <div style={divStyle}>
            <img src={car1} alt="sliderimg" style={imgStyle} />
          </div>
          <div style={divStyle}>
            <img src={car2} alt="sliderimg" style={imgStyle} />
          </div>
          <div style={divStyle}>
            <img src={car3} alt="sliderimg" style={imgStyle} />
          </div>
          <div style={divStyle}>
            <img src={car4} alt="sliderimg" style={imgStyle} />
          </div>
        </Carousel>
      </div>
      {/* <div className="container flex justify-between items-center py-12 h-[650px]"> */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center py-12 ">
        {/* left-content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase font-semibold tracking-wide text-neutral-500 dark:text-neutral-400"
          >
            The only way to get rid of a temptation is to yield to it.
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold leading-tight mt-4"
          >
            First we eat, then we do everything else.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-600 dark:text-gray-300 text-sm"
          >
            One cannot think well, love well, sleep well, if one has not dined
            well. We help to comfort your tongue with our organic and tasty
            food. menus.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 bg-amber-400 hover:bg-gray-100 dark:hover:bg-orange-500">
              Book Appointment
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-600 hover:bg-gray-100 dark:hover:bg-neutral-500">
              Let's Order
            </button>
          </motion.div>
        </motion.div>
        {/* right-content */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-0 w-full flex justify-center"
        >
          <img
            src={homeimage}
            alt="Home Image"
            className="w-[300px] h-[300px] lg:translate-x-14 drop-shadow-2xl rounded-full border-4 border-orange-400 object-cover"
            // className="w-[450px] lg:translate-x-14 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
