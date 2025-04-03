import { motion } from "framer-motion";
import '../Assets/gannu.jpg'
import aboutImage from "../Assets/gannu.jpg";
function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      {/* Heading Animation */}
      <motion.h1
         src={aboutImage}
        className="text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us 🌟
      </motion.h1>

      {/* Text Animation */}
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am Ganpati, the remover of obstacles, the lord of wisdom, and the harbinger of prosperity. With my elephant head, I symbolize intelligence and strength, and my big ears teach the world to listen more than they speak. My small eyes see beyond the obvious, and my large belly holds the universe’s secrets.

People call upon me before they begin anything new, for I clear the path of hurdles and guide them toward success. My vehicle, the humble Mushak (mouse), shows that even the smallest beings have great potential. My broken tusk reminds the world that sacrifice for wisdom is noble—I used it to write the Mahabharata!

With my four hands, I bless devotees, protect the righteous, and carry the Modak, the sweet reward of hard work and devotion. My presence brings joy, and my laughter echoes through the cosmos, reminding everyone that life is to be celebrated, not feared.

I am the first to be worshipped, the guardian of dharma, and the one who turns challenges into opportunities. I am Ganpati Bappa, and when my devotees call out, they know—Bappa Morya! I shall always be with them. 🚀
      </motion.p>

      {/* Image Animation */}
      <motion.img
        src={aboutImage}
        alt="About Us"
        className="mt-6  w-70 h-70 rounded-lg shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Button Animation */}
      <motion.button
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg dark:bg-yellow-400 dark:text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Learn More
      </motion.button>
    </section>
  );
}

export default About;
