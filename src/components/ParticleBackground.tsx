"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let animationFrame: number;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Capture non-null dimensions
    let w = canvas.width;
    let h = canvas.height;

    const colors = ["#ff5c8d", "#ff9a5c", "#ffdd57", "#ff6b9d", "#ff8c42"];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4 - 0.1;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.0015;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
        if (this.alpha <= 0) this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
      }
    }

    const particles: Particle[] = [];
    const count = Math.floor((w * h) / 6000);
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const animate = () => {
      // Fade effect (trail)
      ctx.fillStyle = "rgba(45, 27, 78, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Glow layer
      const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.8);
      g.addColorStop(0, "rgba(255, 92, 141, 0.1)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
