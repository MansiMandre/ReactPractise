function Features() {
  return (
    <section
      className="max-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center scroll-m-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div className="bg-black/50 w-full py-20 px-6 md:px-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
          🌿 Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-white shadow-xl hover:scale-105 transition duration-300 text-center">
            <h3 className="text-xl font-bold text-green-200">Fast Performance</h3>
            <p className="mt-3">Optimized for speed and efficiency.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-white shadow-xl hover:scale-105 transition duration-300 text-center">
            <h3 className="text-xl font-bold text-green-200">Responsive Design</h3>
            <p className="mt-3">Looks great on all devices.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-white shadow-xl hover:scale-105 transition duration-300 text-center">
            <h3 className="text-xl font-bold text-green-200">Easy to Customize</h3>
            <p className="mt-3">Modify styles and components easily.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
