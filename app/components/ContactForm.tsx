"use client";

import { useState } from "react";

// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzY2Ecc0LIPuiZeorkskA_naoyTDpg_rO0Tng7yoJfNLQnT8FsX9og8SrbOfb2Vxf4j/exec";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interestedIn: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", company: "", interestedIn: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-purple-950/30 border border-purple-800/30 rounded-2xl p-8">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-purple-200/80 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-purple-950/50 border border-purple-800/30 rounded-xl px-4 py-3 text-white placeholder-purple-200/40 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-purple-200/80 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-purple-950/50 border border-purple-800/30 rounded-xl px-4 py-3 text-white placeholder-purple-200/40 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-purple-200/80 text-sm font-medium mb-2">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-purple-950/50 border border-purple-800/30 rounded-xl px-4 py-3 text-white placeholder-purple-200/40 focus:outline-none focus:border-purple-500 transition-colors"
          placeholder="Your company"
        />
      </div>
      <div className="mb-6">
        <label className="block text-purple-200/80 text-sm font-medium mb-2">Interested In</label>
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          required
          className="w-full bg-purple-950/50 border border-purple-800/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Training">Training</option>
          <option value="Consulting">Consulting</option>
          <option value="Product Development">Product Development</option>
          <option value="Schedule a Demo">Schedule a Demo</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-purple-200/80 text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full bg-purple-950/50 border border-purple-800/30 rounded-xl px-4 py-3 text-white placeholder-purple-200/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {status === "success" && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
          Something went wrong. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
