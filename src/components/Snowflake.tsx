import { motion } from 'framer-motion';

export const Snowflake = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 500, opacity: 1 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute text-white text-2xl"
      style={{ left: `${Math.random() * 100}%` }}
    >
      ❄️
    </motion.div>
  );
};
