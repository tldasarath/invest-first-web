"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import Container from "../Common/Layout/Contianer";

export default function ProjectileCarousel({ logos, speed = 2 }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // Create a display set of logos (duplicated for infinite loop)
  // Ensure we have enough items to cover wider screens and allow for smooth wrapping
  const displayLogos = useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous items ref content that might be stale
    itemsRef.current = itemsRef.current.slice(0, displayLogos.length);

    const ctx = gsap.context(() => {
      const spacing = 200; // Space between items center-to-center
      const totalWidth = displayLogos.length * spacing;
      
      // Initialize positions centered
      // We start them spread out around the 0 point (center of container)
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        // Distribute items linearly first
        // We anchor the loop around 0. Range: [-totalWidth/2, totalWidth/2]
        const startX = (i * spacing) - (totalWidth / 2);
        gsap.set(item, { x: startX, y: 0 });
      });

      const tick = (time, deltaTime) => {
        // Delta time is in ms
        const delta = deltaTime || 16.6;
        const velocity = speed * (delta / 16.6);

        itemsRef.current.forEach((item) => {
          if (!item) return;

          let currentX = gsap.getProperty(item, "x");
          let newX = currentX - velocity; // Move Left

          // Infinite Loop Wrapping
          // If item moves past the left boundary, transport to right
          const halfWidth = totalWidth / 2;
          if (newX < -halfWidth) {
            newX += totalWidth;
          }

          // 3D Effect Math
          // Calculate distance from center (0)
          const dist = Math.abs(newX);
          const maxEffectDist = 800; 

          let scale = 0.4; // Base scale at edges
          let opacity = 0.5;
          let rotateY = 0;
          let z = 0;

          if (dist < maxEffectDist) {
            // Normalized distance (0 at center, 1 at edge of effect)
            const norm = dist / maxEffectDist;
            const curve = Math.cos(norm * (Math.PI / 2)); // 1 at center, 0 at edge

            // Dynamic properties
            scale = 0.6 + (0.4 * curve); // Interpolate 0.6 -> 1.0
            opacity = 0.3 + (0.7 * curve);
            
            // "Curved" Rotation
            // Items on left (negative X) rotate to look inward (positive Y rot?)
            // Items on right (positive X) rotate opposite
            // Max rotation 45deg
            const rotAngle = -20;
            rotateY = (newX / maxEffectDist) * -rotAngle;
            
            // Push back in Z space slightly at edges to enhance "curve" depth
            z = Math.abs(newX) * -0.5; 
          } else {
             // Outside effect range, flatten out or keep edge values
             rotateY = newX > 0 ? -90 : 90;
             z = -maxEffectDist * 0.5;
          }

          gsap.set(item, {
            x: newX,
            scale: scale,
            opacity: opacity,
            rotateY: rotateY,
            z: z,
            // Ensure centered geometry
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "center center"
          });
        });
      };

      gsap.ticker.add(tick);
      
      return () => {
        gsap.ticker.remove(tick);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [displayLogos, speed]);

  return (
    <>
        <Container>
    <div className="w-full h-[200px] overflow-hidden bg-transparent flex items-center justify-center relative">

      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl h-full flex items-center justify-center"
        style={{ perspective: "2000px" }} 
      >
        {displayLogos.map((logo, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="absolute top-1/2 left-1/2 w-[180px] h-[100px] bg-white rounded-2xl shadow-xl flex items-center justify-center p-6 will-change-transform"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        ))}
    
      </div>
      

    </div>
        </Container>
    </>

  );
}
