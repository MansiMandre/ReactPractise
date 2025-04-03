import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <motion.h2
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch 🚀
      </motion.h2>

      <motion.form
        className="mt-8 p-8 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.input
          type="text"
          className="w-full p-3 mb-4 bg-white/30 border-none rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          className="w-full p-3 mb-4 bg-white/30 border-none rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          className="w-full p-3 mb-4 bg-white/30 border-none rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full py-3 mt-4 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
