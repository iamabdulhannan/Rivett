'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our minimum order quantity starts at 200 pieces per style per color. We work with both emerging and established brands, offering flexible MOQs to support your growth.',
  },
  {
    q: 'How long does sample development take?',
    a: 'Sample development typically takes 10-15 days from techpack receipt. This includes pattern making, sample sewing, and washing. Revisions are included until you approve.',
  },
  {
    q: 'Do you charge for samples?',
    a: 'Yes, we charge a sample development fee ranging from $50-150 per style depending on complexity. The sample fee is often credited back on bulk orders.',
  },
  {
    q: 'What is the bulk production lead time?',
    a: 'Bulk production typically takes 4-6 weeks after sample approval and order confirmation. We provide a detailed production schedule before starting.',
  },
  {
    q: 'Do you offer private label manufacturing?',
    a: 'Yes, private label is our specialty. We produce custom garments under your brand name with your labels, hardware, hang tags, and packaging.',
  },
  {
    q: 'What are your payment terms?',
    a: 'Standard terms are 50% deposit upon order confirmation and 50% balance before shipment (T/T bank transfer). We can discuss other arrangements for long-term partnerships.',
  },
  {
    q: 'Do you ship to the UK and US?',
    a: 'Yes, we regularly ship to the UK and US. We offer FOB and CIF shipping terms. Door-to-door delivery can also be arranged through our logistics partners.',
  },
  {
    q: 'What garment finishes do you offer?',
    a: 'We offer garment dyeing, enzyme wash, silicone wash, bio-polish, pigment wash, overdye, softeners, and various finishing treatments for all fabric types.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            Common Questions
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with Rivett Manufacturing.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="border-b border-gray-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center py-6 text-left gap-4 group"
              >
                <span className="text-base font-semibold text-navy group-hover:text-brass transition-colors duration-300">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-brass font-light min-w-[24px] text-center"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
