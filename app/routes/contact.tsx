import { useState } from "react";
import { Form } from "@remix-run/react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Popup modal */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Message sent!</h2>
            <p className="text-slate-600 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
            <button onClick={() => setSubmitted(false)} className="rounded-xl bg-sky-600 text-white px-6 py-2 font-semibold hover:bg-sky-700 transition">Close</button>
          </div>
        </div>
      )}

      {/* Form card */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur rounded-3xl border border-slate-200 shadow-sm p-10 relative z-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6 text-center">Contact Us</h1>
        <Form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none"></textarea>
          </div>
          <button type="submit" className="w-full rounded-xl bg-sky-600 text-white font-semibold py-3 hover:bg-sky-700 transition">Send Message</button>
        </Form>\n        <a href="/" className="block text-center w-full mt-2 rounded-xl bg-slate-100 text-slate-700 font-semibold py-2 hover:bg-slate-200 transition" className="block text-center w-full mt-4 rounded-xl border-2 border-blue-800 text-blue-800 font-semibold py-3 hover:bg-blue-800 hover:text-white transition">Back to Home</a>
      </div>
    </div>
  );
}