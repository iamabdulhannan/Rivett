'use client';

// Hand-drawn SVG garment silhouettes — guaranteed to match each product
// category exactly. Replace with real product photography when available.

const Jeans = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M60 40 L140 40 L148 110 L150 280 L120 285 L110 150 L100 150 L90 150 L80 285 L50 280 L52 110 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="40" x2="100" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    <rect x="65" y="55" width="18" height="14" fill="rgba(0,0,0,0.12)" rx="1" />
    <rect x="117" y="55" width="18" height="14" fill="rgba(0,0,0,0.12)" rx="1" />
    <circle cx="100" cy="48" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const SkinnyJeans = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M70 40 L130 40 L134 120 L128 285 L108 285 L103 155 L97 155 L92 285 L72 285 L66 120 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="40" x2="100" y2="155" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    <circle cx="100" cy="48" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const WideLegJeans = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M55 40 L145 40 L155 115 L172 285 L118 285 L108 160 L92 160 L82 285 L28 285 L45 115 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="40" x2="100" y2="160" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    <circle cx="100" cy="48" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const Trousers = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M62 35 L138 35 L145 115 L140 285 L115 285 L107 150 L93 150 L85 285 L60 285 L55 115 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="35" x2="100" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    <line x1="62" y1="45" x2="138" y2="45" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
  </svg>
);

const CargoPants = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M58 35 L142 35 L150 120 L155 265 L148 280 L120 280 L110 155 L90 155 L80 280 L52 280 L45 265 L50 120 Z"
      fill="currentColor" opacity="0.92" />
    {/* Side cargo pockets */}
    <rect x="42" y="150" width="22" height="32" fill="rgba(0,0,0,0.18)" rx="2" />
    <rect x="136" y="150" width="22" height="32" fill="rgba(0,0,0,0.18)" rx="2" />
    <rect x="46" y="155" width="14" height="3" fill="rgba(212,183,110,0.7)" />
    <rect x="140" y="155" width="14" height="3" fill="rgba(212,183,110,0.7)" />
    <line x1="100" y1="35" x2="100" y2="155" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    {/* Elastic cuffs */}
    <rect x="50" y="270" width="34" height="6" fill="rgba(0,0,0,0.22)" />
    <rect x="116" y="270" width="34" height="6" fill="rgba(0,0,0,0.22)" />
  </svg>
);

const Chinos = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M60 38 L140 38 L146 115 L138 285 L114 285 L106 150 L94 150 L86 285 L62 285 L54 115 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="38" x2="100" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    <rect x="64" y="48" width="16" height="12" fill="rgba(0,0,0,0.1)" rx="1" />
  </svg>
);

const Shorts = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M55 90 L145 90 L152 125 L140 200 L110 200 L102 150 L98 150 L90 200 L60 200 L48 125 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="90" x2="100" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const DenimJacket = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M40 60 L70 40 L100 50 L130 40 L160 60 L170 110 L160 240 L140 250 L135 120 L130 250 L70 250 L65 120 L60 250 L40 240 L30 110 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="50" x2="100" y2="250" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    {/* Chest pockets */}
    <rect x="72" y="100" width="22" height="28" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <rect x="106" y="100" width="22" height="28" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    {/* Buttons */}
    <circle cx="100" cy="100" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="140" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="180" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="220" r="2" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const FormalShirt = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M40 60 L75 35 L85 55 L100 65 L115 55 L125 35 L160 60 L175 100 L160 110 L155 250 L45 250 L40 110 L25 100 Z"
      fill="currentColor" opacity="0.92" />
    {/* Collar */}
    <path d="M75 35 L100 65 L125 35 L115 55 L100 65 L85 55 Z" fill="rgba(255,255,255,0.15)" />
    <line x1="100" y1="65" x2="100" y2="250" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    {/* Buttons */}
    <circle cx="100" cy="95" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="130" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="165" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="200" r="1.5" fill="rgba(212,183,110,0.9)" />
    {/* Chest pocket */}
    <rect x="65" y="100" width="22" height="24" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
  </svg>
);

const CasualShirt = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M42 60 L78 38 L100 62 L122 38 L158 60 L172 100 L158 108 L152 260 L48 260 L42 108 L28 100 Z"
      fill="currentColor" opacity="0.92" />
    {/* Plaid/flannel pattern hint */}
    <line x1="55" y1="80" x2="145" y2="80" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
    <line x1="55" y1="130" x2="145" y2="130" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
    <line x1="55" y1="180" x2="145" y2="180" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" />
    <line x1="80" y1="75" x2="80" y2="255" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
    <line x1="120" y1="75" x2="120" y2="255" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
    <line x1="100" y1="62" x2="100" y2="260" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    <circle cx="100" cy="95" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="135" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="175" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="215" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const DenimShirt = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M42 60 L78 38 L100 62 L122 38 L158 60 L172 100 L158 108 L152 260 L48 260 L42 108 L28 100 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="62" x2="100" y2="260" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />
    <rect x="62" y="95" width="26" height="28" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    <rect x="112" y="95" width="26" height="28" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    <circle cx="100" cy="90" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="130" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="170" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="210" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const Overshirt = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M36 58 L78 36 L100 60 L122 36 L164 58 L178 108 L162 116 L158 265 L42 265 L38 116 L22 108 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="60" x2="100" y2="265" stroke="rgba(0,0,0,0.22)" strokeWidth="1" />
    <rect x="60" y="95" width="26" height="30" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    <rect x="114" y="95" width="26" height="30" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    <circle cx="100" cy="88" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="135" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="182" r="2" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="229" r="2" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const TShirt = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M40 62 L78 38 L90 58 Q100 66 110 58 L122 38 L160 62 L176 108 L160 116 L155 255 L45 255 L40 116 L24 108 Z"
      fill="currentColor" opacity="0.92" />
    <path d="M90 58 Q100 66 110 58 L108 55 Q100 62 92 55 Z" fill="rgba(0,0,0,0.15)" />
  </svg>
);

const Polo = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M40 62 L78 38 L88 56 L100 62 L112 56 L122 38 L160 62 L176 108 L160 116 L155 255 L45 255 L40 116 L24 108 Z"
      fill="currentColor" opacity="0.92" />
    {/* Polo collar */}
    <path d="M78 38 L88 56 L100 68 L112 56 L122 38 L112 48 L100 58 L88 48 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
    {/* Placket */}
    <line x1="100" y1="58" x2="100" y2="110" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <circle cx="100" cy="75" r="1.5" fill="rgba(212,183,110,0.9)" />
    <circle cx="100" cy="95" r="1.5" fill="rgba(212,183,110,0.9)" />
  </svg>
);

const Hoodie = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    {/* Hood */}
    <path d="M65 30 Q100 10 135 30 L142 72 Q100 58 58 72 Z" fill="currentColor" opacity="0.92" />
    {/* Body */}
    <path d="M40 65 L65 55 L100 80 L135 55 L160 65 L176 112 L160 120 L158 260 L42 260 L40 120 L24 112 Z"
      fill="currentColor" opacity="0.92" />
    {/* Drawstrings */}
    <line x1="92" y1="80" x2="90" y2="120" stroke="rgba(212,183,110,0.8)" strokeWidth="1.5" />
    <line x1="108" y1="80" x2="110" y2="120" stroke="rgba(212,183,110,0.8)" strokeWidth="1.5" />
    {/* Kangaroo pocket */}
    <path d="M62 165 L138 165 L130 220 L70 220 Z" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
  </svg>
);

const Jacket = (props) => (
  <svg viewBox="0 0 200 300" {...props}>
    <path d="M36 58 L72 36 L100 54 L128 36 L164 58 L178 106 L164 112 L160 255 L40 255 L36 112 L22 106 Z"
      fill="currentColor" opacity="0.92" />
    <line x1="100" y1="54" x2="100" y2="255" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" />
    {/* Bomber cuffs and hem */}
    <rect x="36" y="240" width="128" height="12" fill="rgba(0,0,0,0.2)" />
    <rect x="72" y="36" width="56" height="8" fill="rgba(0,0,0,0.15)" />
    {/* Zipper pull */}
    <rect x="98" y="55" width="4" height="6" fill="rgba(212,183,110,0.9)" />
    <rect x="78" y="120" width="22" height="18" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
    <rect x="100" y="120" width="22" height="18" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
  </svg>
);

const Fabric = (props) => (
  <svg viewBox="0 0 200 200" {...props}>
    <defs>
      <pattern id="weave" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="4" height="4" fill="currentColor" opacity="0.95" />
        <rect x="4" y="4" width="4" height="4" fill="currentColor" opacity="0.95" />
        <rect x="4" y="0" width="4" height="4" fill="currentColor" opacity="0.75" />
        <rect x="0" y="4" width="4" height="4" fill="currentColor" opacity="0.75" />
      </pattern>
    </defs>
    <rect x="20" y="20" width="160" height="160" fill="url(#weave)" />
    <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(212,183,110,0.5)" strokeWidth="0.5" />
    <line x1="20" y1="140" x2="180" y2="140" stroke="rgba(212,183,110,0.5)" strokeWidth="0.5" />
  </svg>
);

const Sewing = (props) => (
  <svg viewBox="0 0 200 200" {...props}>
    {/* Thread spool */}
    <rect x="80" y="40" width="40" height="70" rx="2" fill="currentColor" opacity="0.85" />
    <rect x="75" y="38" width="50" height="6" fill="rgba(0,0,0,0.2)" />
    <rect x="75" y="106" width="50" height="6" fill="rgba(0,0,0,0.2)" />
    {/* Needle */}
    <line x1="100" y1="110" x2="100" y2="175" stroke="rgba(212,183,110,0.9)" strokeWidth="2" />
    <circle cx="100" cy="115" r="3" fill="none" stroke="rgba(212,183,110,0.9)" strokeWidth="1" />
    {/* Stitches */}
    <line x1="40" y1="165" x2="55" y2="165" stroke="rgba(212,183,110,0.7)" strokeWidth="1.5" />
    <line x1="65" y1="165" x2="80" y2="165" stroke="rgba(212,183,110,0.7)" strokeWidth="1.5" />
    <line x1="120" y1="165" x2="135" y2="165" stroke="rgba(212,183,110,0.7)" strokeWidth="1.5" />
    <line x1="145" y1="165" x2="160" y2="165" stroke="rgba(212,183,110,0.7)" strokeWidth="1.5" />
  </svg>
);

const Factory = (props) => (
  <svg viewBox="0 0 200 200" {...props}>
    {/* Building outline */}
    <path d="M20 160 L20 100 L50 100 L50 80 L80 100 L80 80 L110 100 L110 80 L140 100 L140 80 L170 100 L170 160 Z"
      fill="currentColor" opacity="0.9" />
    {/* Windows */}
    <rect x="28" y="115" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="58" y="115" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="88" y="115" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="118" y="115" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="148" y="115" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="28" y="135" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="58" y="135" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="148" y="135" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    <rect x="118" y="135" width="10" height="12" fill="rgba(212,183,110,0.4)" />
    {/* Door */}
    <rect x="90" y="130" width="20" height="30" fill="rgba(0,0,0,0.3)" />
  </svg>
);

const ICONS = {
  'skinny-jeans': SkinnyJeans,
  'straight-jeans': Jeans,
  'wide-jeans': WideLegJeans,
  'denim-jacket': DenimJacket,
  trousers: Trousers,
  chinos: Chinos,
  cargo: CargoPants,
  shorts: Shorts,
  'formal-shirt': FormalShirt,
  'casual-shirt': CasualShirt,
  'denim-shirt': DenimShirt,
  overshirt: Overshirt,
  tshirt: TShirt,
  polo: Polo,
  hoodie: Hoodie,
  jacket: Jacket,
  fabric: Fabric,
  sewing: Sewing,
  factory: Factory,
};

// Subtle tonal palettes per category — the brand stays coherent.
const PALETTES = {
  indigo:   { bg: '#0f2138', fg: '#3a5687', accent: '#264070' },
  midnight: { bg: '#0a1628', fg: '#2a3a58', accent: '#1c2a45' },
  charcoal: { bg: '#1a1a1a', fg: '#3a3a3a', accent: '#2a2a2a' },
  camel:    { bg: '#2a2218', fg: '#8b7a5a', accent: '#5a4a30' },
  stone:    { bg: '#1e1e20', fg: '#4a4a52', accent: '#333338' },
  olive:    { bg: '#1f2418', fg: '#5a6840', accent: '#3a4428' },
  ivory:    { bg: '#e8e2d5', fg: '#0a1628', accent: '#c8a45c' },
  cognac:   { bg: '#2b1d13', fg: '#8a5a38', accent: '#5a3820' },
};

export default function ProductVisual({ icon, palette = 'indigo', label, size = 'tall' }) {
  const Icon = ICONS[icon] || Jeans;
  const p = PALETTES[palette] || PALETTES.indigo;
  const aspect = size === 'square' ? 'aspect-square' : size === 'wide' ? 'aspect-[4/5]' : 'aspect-[3/4]';

  return (
    <div
      className={`relative ${aspect} overflow-hidden w-full h-full`}
      style={{ background: `linear-gradient(135deg, ${p.bg} 0%, ${p.accent} 100%)` }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Brass corner marks */}
      <div className="absolute top-4 left-4 w-6 h-[1px] bg-brass/60" />
      <div className="absolute top-4 left-4 w-[1px] h-6 bg-brass/60" />
      <div className="absolute bottom-4 right-4 w-6 h-[1px] bg-brass/60" />
      <div className="absolute bottom-4 right-4 w-[1px] h-6 bg-brass/60" />

      {/* Central silhouette */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
        style={{ color: p.fg }}
      >
        <Icon className="w-[55%] h-[70%] drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
      </div>

      {/* Watermark label */}
      {label && (
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <p className="font-heading text-white/30 text-[10px] tracking-[4px] uppercase">
            Rivett · {label}
          </p>
        </div>
      )}

      {/* Brand mark */}
      <div className="absolute top-5 right-5 font-heading text-brass/40 text-[10px] tracking-[3px]">
        RM
      </div>
    </div>
  );
}
