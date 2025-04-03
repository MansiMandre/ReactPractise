function Features() {
    return (
      <section className="py-65 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 container mx-auto px-6">
          {/* Feature Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Fast Performance</h3>
            <p className="text-gray-600 mt-2">Optimized for speed and efficiency.</p>
          </div>
  
          {/* Feature Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Responsive Design</h3>
            <p className="text-gray-600 mt-2">Looks great on all devices.</p>
          </div>
  
          {/* Feature Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">Easy to Customize</h3>
            <p className="text-gray-600 mt-2">Modify styles and components easily.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;
  