"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS } from "@/lib/constants";

const productOptions = [
  "Kids Tent Pipe",
  "Plumbing Pipe",
  "Conduit Pipe",
  "Casing Capping Pipe",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", BUSINESS.web3formsKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
          Name <span className="text-gray-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-black">
          Phone <span className="text-gray-400">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          Email <span className="text-gray-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-black">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
        >
          <option value="">Select a product</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-black"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-gray-50 p-3 text-center text-sm text-green-700">
          Thank you! Your inquiry has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-gray-50 p-3 text-center text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
