import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🏆 Dashboard Heading Animation */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        🚀 Welcome to Your Ganpati Blog!
      </motion.h1>

      {/* 📊 Feature Cards with Animations */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {[
          { title: "Fast Performance", color: "bg-blue-500" },
          { title: "Smooth UI", color: "bg-green-500" },
          { title: "AI-Powered", color: "bg-purple-500" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-6 ${item.color} text-white rounded-lg shadow-lg text-center`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2">Experience the best features ever!</p>
          </motion.div>
        ))}
      </div>

      {/* 🎮 Animated Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg"
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/Explore">
  <motion.button
    className="mt-6 px-4 py-2 text-sm bg-yellow-500 text-black font-semibold rounded-lg shadow-md"
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore More →
  </motion.button>
</Link>
      </motion.button>
    </motion.div>
  );
}

export default Dashboard;
