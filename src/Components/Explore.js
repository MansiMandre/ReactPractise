import { motion } from "framer-motion";

function Explore() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-10">
      {/* 🌟 Heading with Animation */}
      <motion.h1
        className="text-4xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover Something Amazing 🚀
      </motion.h1>

      {/* 📌 Floating Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Innovative Ideas", color: "bg-blue-500" },
          { title: "AI-Powered Features", color: "bg-purple-500" },
          { title: "Seamless UI/UX", color: "bg-pink-500" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 ${item.color} text-white rounded-lg shadow-xl text-center`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2">Explore new possibilities.</p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Pulsating Call-to-Action */}
      <motion.button
        className="mt-8 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0px 0px 10px rgba(255, 255, 255, 0.2)",
            "0px 0px 20px rgba(255, 255, 255, 0.4)",
            "0px 0px 10px rgba(255, 255, 255, 0.2)",
          ],
          transition: { repeat: Infinity, duration: 2 },
        }}
      >
        🚀 Start Exploring
      </motion.button>
    </section>
  );
}

export default Explore;
