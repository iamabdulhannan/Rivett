'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Services: ['Sample Development', 'Private Label', 'Wash & Finishing', 'Fabric Sourcing', 'CMT Services'],
  Products: ['Trousers', 'Shirts', 'T-Shirts', 'Polo Shirts', 'Hoodies', 'Track Suits', 'Jackets', 'Shorts', 'Sleeveless'],
  Company: ['About Us', 'Our Process', 'Capabilities', 'FAQ', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-[1.5px] border-brass flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brass" />
              </div>
              <span className="font-heading text-[26px] text-white tracking-[4px]">RIVETT</span>
            </a>
            <p className="text-[13px] text-steel leading-relaxed">
              Premium garment manufacturing for fashion brands worldwide.
              From techpack to production, we bring your designs to life
              with quality, precision, and consistency.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-5">
                {title}
              </h4>
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${title.toLowerCase()}`}
                  className="block text-[13px] text-steel py-1.5 hover:text-brass transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[12px] gap-4">
          <p>&copy; 2026 Rivett Manufacturing. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: 'Instagram', href: 'https://instagram.com/rivettmfg' },
              { label: 'LinkedIn', href: 'https://linkedin.com/company/rivettmfg' },
              { label: 'WhatsApp', href: 'https://wa.me/92XXXXXXXXXX' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="text-steel tracking-wider hover:text-brass transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
