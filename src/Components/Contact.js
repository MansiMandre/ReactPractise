import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <motion.h2
        className="text-4xl font-bold text-white z-10 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch 🌿
      </motion.h2>

      <motion.form
        className="z-10 mt-10 p-8 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-white/30 text-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <motion.input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-white/30 text-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <motion.textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="w-full p-3 mb-4 bg-white/30 text-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <motion.button
          type="submit"
          className="w-full py-3 mt-2 bg-green-400 text-black font-bold rounded-md hover:bg-green-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message 🍃
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
