'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [variant, setVariant] = useState('default');

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor="view"]')) {
        setVariant('hover');
      } else if (e.target.closest('[data-cursor="drag"]')) {
        setVariant('drag');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: { scale: 1, opacity: 1 },
    hover: { scale: 2.5, opacity: 0.7 },
    drag: { scale: 3, opacity: 0.9 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-brass pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      style={{ x, y }}
      animate={variants[variant]}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
    />
  );
}
