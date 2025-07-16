function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-white px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Hello, I’m Marvs
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
        I’m a developer passionate about building modern web experiences using React, TypeScript, and AI technologies.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        View Portfolio
      </button>
    </section>
  );
}

export default Hero;
