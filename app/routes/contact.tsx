import { useState } from "react";
import { Form } from "@remix-run/react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur rounded-3xl border border-slate-200 shadow-sm p-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 text-center">Contact Us</h1>
        {!submitted ? (
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              console.log("Form submitted (placeholder)");
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
          </Form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-lg text-slate-700">Thank you for reaching out! We'll get back to you soon.</p>
            <button onClick={() => setSubmitted(false)} className="rounded-xl border border-slate-300 px-6 py-2 text-slate-700 hover:bg-slate-50">Send another message</button>
          </div>
        )}
      </div>
    </div>
  );
}