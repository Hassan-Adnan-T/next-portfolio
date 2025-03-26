export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Full Stack Developer</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          I create beautiful and functional web applications using modern technologies.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          View My Work
        </button>
      </div>
    </section>
  );
}
