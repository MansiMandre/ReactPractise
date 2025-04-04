import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          `url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80")`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div
        className="relative z-10 text-center p-10 backdrop-blur-xl bg-white/10 dark:bg-gray-900/20 rounded-3xl shadow-2xl max-w-2xl border border-white/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to <span className="text-yellow-400">NatureHub</span> 🌿
        </motion.h1>

        <motion.p
          className="text-lg text-white/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Dive into simplicity. Build smart. Live naturally.
        </motion.p>

        <Link
          to="/login"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          🔐 Welcome to our door
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
