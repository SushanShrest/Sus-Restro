import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../../Utils/animation";

const HeroLeft: React.FC = () => (
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
      One cannot think well, love well, sleep well, if one has not dined well.
      We help to comfort your tongue with our organic and tasty food.
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
);

export default HeroLeft;
