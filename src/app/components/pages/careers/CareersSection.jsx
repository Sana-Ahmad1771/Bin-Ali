"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";

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
  const fileInputRef = useRef(null);

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
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => setSuccess(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-light/20 to-white py-12 md:py-16 px-5 lg:px-42 xl:px-53">
      <div className="mx-auto text-center mb-8 md:mb-12 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-2 mb-3 md:mb-4"
        >
          Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Career with Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
        >
          Our career not only brings a smile to your face but also commands
          respect and handsome earnings. Learn more about the exciting career
          options we have and take your first step toward a rewarding future
          with <strong>Bin Ali Medical Supplies</strong>.
        </motion.p>
      </div>

      <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 bg-white shadow-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/50"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-dark-2 mb-3 text-center">
            Apply for Job
          </h3>
          <div className="flex justify-center pb-3 md:pb-4">
            <motion.div
              className="w-12 md:w-14 h-1 rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-600 bg-red-50 border border-red-100 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-dark-4 font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-dark-4 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-dark-4 font-medium mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-dark-4 font-medium mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                placeholder="Write your cover letter..."
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm resize-vertical"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-dark-4 font-medium mb-2">
                Add Resume
                <span className="text-xs text-gray-500 ml-2">
                  (doc, docx, pdf, xls, xlsx)
                </span>
              </label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 bg-gray-50/50 hover:bg-white transition-all duration-300 shadow-sm">
                <FaUpload className="text-primary text-base" />
                <input
                  type="file"
                  name="resume"
                  accept=".doc,.docx,.pdf,.xls,.xlsx"
                  onChange={handleChange}
                  ref={fileInputRef}
                  className="flex-1 text-sm cursor-pointer text-dark-4 file:hidden bg-transparent"
                />
                <span className="text-xs text-gray-500 whitespace-nowrap">
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
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-to-r from-primary to-primary-light cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95 min-w-[180px]"
              >
                {sending ? "Submitting..." : "Submit Application"}
              </button>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-700 bg-green-50 border border-green-100 p-3 rounded-lg text-sm mt-3"
                >
                  ✅ Application sent successfully
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex items-stretch min-h-[400px] md:min-h-[500px]"
        >
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/team.png"
              alt="Career Opportunities"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-500/20 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Team</h3>
                <p className="text-base md:text-lg opacity-90">
                  Be part of a growing medical supplies company that values
                  innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements - Only show on larger screens */}
      <div className="hidden md:block absolute left-0 bottom-0 opacity-10">
        <img src="/demo-medical-pattern.svg" alt="pattern" className="w-32 h-32" />
      </div>
      <div className="hidden md:block absolute right-0 -top-10 opacity-80">
        <img src="/shape.png" alt="shape" className="w-full h-24" />
      </div>
    </section>
  );
}