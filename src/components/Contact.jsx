export default function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Contact Header */}
      <section className="text-center bg-blue-600 text-white py-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-lg">
          We're here to help with all your AC & appliance repair needs.
        </p>
      </section>

      {/* Contact Details */}
      <section className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">
          Contact Information
        </h2>
        <div className="mt-4 space-y-4 text-center">
          <p>
            📍 <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-blue-500 font-medium">
              +1234567890
            </a>
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:info@acservice.com"
              className="text-blue-500 font-medium"
            >
              info@acservice.com
            </a>
          </p>
          <a
            href="https://wa.me/1234567890"
            className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">
          Send Us a Message
        </h2>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
