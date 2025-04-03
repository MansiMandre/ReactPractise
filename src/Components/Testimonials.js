function Testimonials() {
    const reviews = [
      { name: "Rahul", text: "This website is amazing! 🚀" },
      { name: "Aisha", text: "Super smooth experience. 😍" },
      { name: "Aryan", text: "I love the design! 💖" },
    ];
  
    return (
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 container mx-auto px-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">{review.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  