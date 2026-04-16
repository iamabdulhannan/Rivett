'use client';

import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'SAMPLE DEVELOPMENT',
    desc: 'We develop production-quality samples from your techpacks with precision pattern making and expert construction.',
    items: ['Techpack interpretation', 'Pattern development', 'Proto & SMS samples', 'Fit corrections'],
  },
  {
    num: '02',
    title: 'PRIVATE LABEL PRODUCTION',
    desc: 'Full-scale garment production under your brand name. Custom labels, buttons, tags, and packaging included.',
    items: ['Custom branding & labels', 'Hardware sourcing', 'Bulk production', 'Quality assurance (AQL 2.5)'],
  },
  {
    num: '03',
    title: 'WASH & FINISHING',
    desc: 'State-of-the-art washing plant with a full range of garment washes, treatments, and finishing techniques.',
    items: ['Stone, enzyme & acid wash', 'Laser & ozone finishing', 'Hand sanding & whiskers', 'Tinting & overdye'],
  },
  {
    num: '04',
    title: 'FABRIC SOURCING',
    desc: 'Access to a wide range of premium fabrics — from cotton fleece to performance blends.',
    items: ['Premium cotton & blends', 'Fleece & French terry', 'Pique & jersey knits', 'Organic & recycled options'],
  },
  {
    num: '05',
    title: 'CMT SERVICES',
    desc: 'Cut-Make-Trim services for brands who supply their own fabric. We handle the rest.',
    items: ['Precision cutting', 'Expert sewing', 'Trimming & finishing', 'Packaging & shipment'],
  },
  {
    num: '06',
    title: 'DESIGN ASSISTANCE',
    desc: 'Need help refining your designs? Our technical team can help develop and optimize your techpacks.',
    items: ['Techpack creation', 'Trend consultation', 'Fit optimization', 'Cost engineering'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[4px] uppercase text-brass">
            What We Do
          </span>
          <h2 className="font-heading text-[clamp(36px,5vw,56px)] text-navy tracking-[4px] mt-3 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            End-to-end garment manufacturing services tailored for fashion brands looking
            for a reliable production partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-white p-10 rounded border border-gray-100 relative overflow-hidden cursor-default"
            >
              {/* Top line animation */}
              <motion.div
                className="absolute top-0 left-0 h-[3px] bg-brass"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />

              <span className="font-heading text-5xl text-brass/15 block mb-4">
                {s.num}
              </span>
              <h3 className="font-heading text-2xl tracking-[3px] text-navy mb-4">
                {s.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-[13px] text-gray-400 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-2 before:h-2 before:rounded-full before:bg-brass">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brass/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
