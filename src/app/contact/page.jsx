export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        We’d love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out.
        Below are ways to contact us directly.
      </p>

      <div className="border-t border-gray-300 mt-10 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Send Us an Email</h2>
        <p className="text-lg text-gray-700 mb-6">
          For inquiries, partnership proposals, or just to say hello, feel free to drop us an email at:
        </p>
        <a href="mailto:hello@techinve.com" className="text-blue-600 hover:underline text-lg">
          hello@techinve.com
        </a>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h2>
        <p className="text-lg text-gray-700 mb-6">
          Stay connected with us for updates, insights, and more on social media:
        </p>
        <div className="flex space-x-6">
          <a
            href="https://twitter.com/techinve"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://github.com/techinve"
            target="_blank"
            className="text-gray-800 hover:text-black"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/company/techinve"
            target="_blank"
            className="text-blue-700 hover:text-blue-900"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Or Fill Out the Form Below</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg text-gray-700" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-700" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-700" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
