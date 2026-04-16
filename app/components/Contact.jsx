'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
              Get In Touch
            </span>
            <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
              LET&apos;S WORK TOGETHER
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Ready to start production? Have questions about our capabilities?
              Fill out the form or reach out directly. We respond within 24 hours.
            </p>

            <h3 className="font-heading text-2xl tracking-[3px] text-navy mb-4">
              Contact Details
            </h3>
            {[
              { label: 'Email', value: 'info@rivettmfg.com' },
              { label: 'WhatsApp', value: '+92 304 4480452' },
              { label: 'Instagram', value: '@rivettmfg' },
            ].map((d) => (
              <div key={d.label} className="flex gap-3 mb-3">
                <span className="text-[10px] tracking-[2px] uppercase text-brass font-semibold min-w-[80px]">
                  {d.label}
                </span>
                <span className="text-sm text-gray-700">{d.value}</span>
              </div>
            ))}

            <h3 className="font-heading text-2xl tracking-[3px] text-navy mt-8 mb-4">
              Working Hours
            </h3>
            <div className="flex gap-3">
              <span className="text-[10px] tracking-[2px] uppercase text-brass font-semibold min-w-[80px]">Mon-Sat</span>
              <span className="text-sm text-gray-700">9:00 AM - 6:00 PM (GMT+5)</span>
            </div>

            <h3 className="font-heading text-2xl tracking-[3px] text-navy mt-8 mb-4">
              We Accept
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Techpacks (AI, PDF, Excel), sketches, reference photos, and physical samples for replication.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-off-white p-10 rounded"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Brand"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@yourbrand.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 XXX XXXX XXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                  Product Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors text-gray-500"
                >
                  <option value="">Select product type</option>
                  <option>Trousers</option>
                  <option>Shirts</option>
                  <option>T-Shirts</option>
                  <option>Polo Shirts</option>
                  <option>Hoodies</option>
                  <option>Track Suits</option>
                  <option>Jackets</option>
                  <option>Shorts</option>
                  <option>Sleeveless</option>
                  <option>Other Garment</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    Estimated Quantity
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors text-gray-500">
                    <option value="">Select quantity range</option>
                    <option>200 - 500 pcs</option>
                    <option>500 - 1,000 pcs</option>
                    <option>1,000 - 3,000 pcs</option>
                    <option>3,000 - 5,000 pcs</option>
                    <option>5,000+ pcs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors text-gray-500">
                    <option value="">Select country</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>European Union</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-semibold tracking-[2px] uppercase text-navy mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project — garment type, wash requirements, target price, timeline, etc."
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm bg-white text-sm focus:border-brass focus:outline-none transition-colors resize-vertical"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 text-xs font-bold tracking-[3px] uppercase transition-all duration-500 ${
                  submitted
                    ? 'bg-green-700 text-white'
                    : 'bg-navy text-white hover:bg-brass hover:text-navy'
                }`}
              >
                {submitted ? 'INQUIRY SENT SUCCESSFULLY!' : 'SEND INQUIRY'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
