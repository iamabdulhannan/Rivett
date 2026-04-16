'use client';

import { motion } from 'framer-motion';

const reasons = [
  { stat: '200+', title: 'Low MOQ', desc: 'Start with just 200 pieces per style. Perfect for emerging brands testing new designs.' },
  { stat: '48hr', title: 'Quote Turnaround', desc: 'Send your techpack today, receive a detailed quote within 48 hours. Transparent pricing.' },
  { stat: '100%', title: 'Quality Inspected', desc: 'Every garment passes multi-stage QC. AQL 2.5 standard ensures flawless products.' },
  { stat: '1', title: 'Dedicated Contact', desc: 'One dedicated account manager from sample to shipment. Clear communication, no runarounds.' },
  { stat: 'FOB', title: 'Flexible Shipping', desc: 'FOB and CIF shipping terms. Door-to-door delivery to UK and US through trusted logistics.' },
  { stat: 'NDA', title: 'Brand Protection', desc: 'We sign NDAs and maintain strict confidentiality. Your intellectual property is fully protected.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            Why Rivett
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-white tracking-[4px] mt-3 mb-4">
            WHY BRANDS CHOOSE US
          </h2>
          <p className="text-steel max-w-xl mx-auto leading-relaxed">
            We&apos;re not just a factory. We&apos;re your production partner committed to your brand&apos;s success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(200,164,92,0.4)' }}
              className="p-10 bg-navy-light rounded border border-brass/10 text-center group cursor-default"
            >
              <motion.h3
                className="font-heading text-5xl text-brass mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {r.stat}
              </motion.h3>
              <h4 className="text-[13px] font-bold tracking-[2px] uppercase text-white mb-3">
                {r.title}
              </h4>
              <p className="text-[13px] text-steel leading-relaxed">{r.desc}</p>

              {/* Bottom accent line */}
              <div className="w-0 group-hover:w-12 h-[2px] bg-brass mx-auto mt-6 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
