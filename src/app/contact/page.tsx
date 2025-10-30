import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-12">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-300 mb-12">
          We&apos;re here to help with any questions you may have. Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
            <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md text-white focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
            <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md text-white focus:ring-amber-500 focus:border-amber-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-md text-white focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-md transition duration-300">
              Send Message
            </button>
          </div>
        </form>
        <div className="w-full h-px bg-slate-800 my-12"></div>
        <h2 className="text-3xl font-bold text-white mb-6">Find Us</h2>
        <div className="text-slate-300">
          <p>123 Main Street, Anytown, USA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
