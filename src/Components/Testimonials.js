function Testimonials() {
  const reviews = [
    { name: "Rahul", text: "This website is amazing! 🚀" },
    { name: "Aisha", text: "Super smooth experience. 😍" },
    { name: "Aryan", text: "I love the design! 💖" },
  ];

  return (
    <section
      className="py-20 bg-cover bg-center text-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg')",
      }}
    >
      <div className="bg-black/40 py-10 px-4 md:px-10">
        <h2 className="text-4xl font-bold text-white mb-10 drop-shadow-lg">
          What Our Users Say ✨
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/20 dark:bg-gray-900/30 border border-white/30 dark:border-gray-700/30 p-6 rounded-2xl shadow-xl text-white transition hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-200">{review.name}</h3>
              <p className="mt-3 text-lg italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
