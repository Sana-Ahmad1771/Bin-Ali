"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

export default function CareersSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null); // ✅ Ref to reset the file input

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.coverLetter || !form.resume) {
      setError("Please fill all fields and attach your resume.");
      return;
    }

    setSending(true);
    try {
      // Simulate sending process
      await new Promise((res) => setTimeout(res, 1200));

      setSuccess(true);

      // ✅ Clear form and reset file input
      setForm({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input field
      }

      setTimeout(() => setSuccess(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#E6F9FF] to-white py-20 px-6 lg:px-16 xl:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-dark-2 mb-4"
        >
          Build Your <span className="text-primary">Career with Us</span>
        </motion.h2>
        <p className="text-dark-5 max-w-3xl mx-auto leading-relaxed">
          Our career not only brings a smile to your face but also commands
          respect and handsome earnings. Learn more about the exciting career
          options we have and take your first step toward a rewarding future
          with <strong>Bin Ali Medical Supplies</strong>.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-white shadow-lg rounded-3xl p-8 border border-white/50"
        >
          <h3 className="text-2xl font-semibold text-dark-2 mb-6 text-center">
            Apply for Job
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-dark-4 font-medium mb-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-dark-4 font-medium mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-dark-4 font-medium mb-3">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-dark-4 font-medium mb-3">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                placeholder="Write your cover letter..."
                rows={5}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm resize-vertical"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-dark-4 font-medium mb-3">
                Add Resume
                <span className="text-sm text-gray-500 ml-2">
                  (doc, docx, pdf, xls, xlsx)
                </span>
              </label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-sm">
                <FaUpload className="text-primary text-lg " />
                <input
                  type="file"
                  name="resume"
                  accept=".doc,.docx,.pdf,.xls,.xlsx"
                  onChange={handleChange}
                  ref={fileInputRef} // ✅ Reference added
                  className="flex-1 text-sm cursor-pointer text-dark-4 file:hidden bg-transparent"
                />
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  Browse files
                </span>
              </div>
              {form.resume && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                  📄 <strong>{form.resume.name}</strong>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-to-r from-primary to-primary-light cursor-pointer text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95 min-w-[200px]"
              >
                {sending ? "Submitting..." : "Submit Application"}
              </button>
              {success && (
                <div className="text-green-700 bg-green-50 border border-green-100 p-3 rounded-xl text-sm mt-3">
                  ✅ Application sent successfully
                </div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex items-stretch"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/team.png"
              alt="Career Opportunities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                <p className="text-lg opacity-90">
                  Be part of a growing medical supplies company that values
                  innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-0 bottom-0 opacity-10 animate-bounce-smooth">
        <img src="/demo-medical-pattern.svg" alt="pattern" />
      </div>
      <div className="absolute right-0 -top-10 opacity-80 animate-bounce-smooth">
        <img src="/shape.png" alt="shape" className="w-32 h-auto" />
      </div>
    </section>
  );
}
