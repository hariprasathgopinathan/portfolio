import { useEffect, useRef } from "react";
import "./ParticleBackground.css";

const STAR_COUNT = 140;
const PLANET_COUNT = 0;
const SHOOTING_STAR_COUNT = 3;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,

    // Different depth layers
    depth: random(0.3, 1),

    radius: random(0.5, 2.2),
    alpha: random(0.25, 0.95),

    vx: random(-0.12, 0.12),
    vy: random(0.08, 0.35),

    twinkleSpeed: random(0.0015, 0.004),
    twinkleOffset: Math.random() * Math.PI * 2,

    // Some stars have stronger glow
    glow: Math.random() > 0.72,
  }));
}

function createPlanets(width, height) {
  const colors = [
    {
      core: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.45)",
      ring: "#A78BFA",
    },
    {
      core: "#22D3EE",
      glow: "rgba(34, 211, 238, 0.38)",
      ring: "#67E8F9",
    },
    {
      core: "#3B82F6",
      glow: "rgba(59, 130, 246, 0.38)",
      ring: "#60A5FA",
    },
    {
      core: "#EC4899",
      glow: "rgba(236, 72, 153, 0.35)",
      ring: "#F472B6",
    },
    {
      core: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.28)",
      ring: "#FBBF24",
    },
  ];

  return Array.from({ length: PLANET_COUNT }, (_, index) => {
    const angle = Math.random() * Math.PI * 2;

    return {
      baseX: random(width * 0.05, width * 0.95),
      baseY: random(height * 0.08, height * 0.92),

      radius: random(9, 22),

      orbitRadius: random(20, 55),

      angle,

      orbitSpeed: random(0.00015, 0.0005),

      floatSpeed: random(0.0005, 0.0012),

      floatAmount: random(8, 22),

      ringTilt: random(-0.5, 0.5),

      hasRing: Math.random() > 0.3,

      moonAngle: Math.random() * Math.PI * 2,
      moonSpeed: random(0.001, 0.002),

      color: colors[index % colors.length],
    };
  });
}

function createShootingStars(width, height) {
  return Array.from({ length: SHOOTING_STAR_COUNT }, () => ({
    x: random(0, width),
    y: random(0, height),

    length: random(70, 150),

    speed: random(5, 9),

    angle: random(Math.PI * 0.15, Math.PI * 0.38),

    opacity: 0,

    delay: random(0, 6000),
  }));
}

function ParticleBackground() {
  const canvasRef = useRef(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame;

    let lastTime = performance.now();

    const stars = createStars(width, height);

    const planets = createPlanets(width, height);

    const shootingStars = createShootingStars(width, height);

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();

    function drawBackground() {
      ctx.fillStyle = "#02030A";
      ctx.fillRect(0, 0, width, height);

      /*
       * Very subtle space gradients
       */

      const nebula1 = ctx.createRadialGradient(
        width * 0.18,
        height * 0.25,
        0,
        width * 0.18,
        height * 0.25,
        width * 0.35
      );

      nebula1.addColorStop(
        0,
        "rgba(139, 92, 246, 0.08)"
      );

      nebula1.addColorStop(
        1,
        "rgba(139, 92, 246, 0)"
      );

      ctx.fillStyle = nebula1;

      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.82,
        height * 0.72,
        0,
        width * 0.82,
        height * 0.72,
        width * 0.3
      );

      nebula2.addColorStop(
        0,
        "rgba(34, 211, 238, 0.06)"
      );

      nebula2.addColorStop(
        1,
        "rgba(34, 211, 238, 0)"
      );

      ctx.fillStyle = nebula2;

      ctx.fillRect(0, 0, width, height);
    }

    function drawStars(time) {
      stars.forEach((star) => {
        /*
         * Visible continuous movement
         */

        star.x += star.vx * star.depth;

        star.y += star.vy * star.depth;

        /*
         * Wrap stars around screen
         */

        if (star.y > height + 10) {
          star.y = -10;

          star.x = Math.random() * width;
        }

        if (star.x > width + 10) {
          star.x = -10;
        }

        if (star.x < -10) {
          star.x = width + 10;
        }

        /*
         * Twinkle
         */

        const twinkle =
          Math.sin(
            time * star.twinkleSpeed +
              star.twinkleOffset
          ) * 0.25;

        const alpha = Math.max(
          0.08,
          star.alpha + twinkle
        );

        /*
         * Glow stars
         */

        if (star.glow) {
          ctx.beginPath();

          ctx.fillStyle = `rgba(139, 92, 246, ${
            alpha * 0.2
          })`;

          ctx.arc(
            star.x,
            star.y,
            star.radius * 4,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }

        /*
         * Star
         */

        ctx.beginPath();

        ctx.fillStyle = `rgba(240, 248, 255, ${alpha})`;

        ctx.arc(
          star.x,
          star.y,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();

        /*
         * Cross sparkle for selected stars
         */

        if (
          star.radius > 1.6 &&
          star.glow
        ) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${
            alpha * 0.6
          })`;

          ctx.lineWidth = 0.7;

          ctx.beginPath();

          ctx.moveTo(
            star.x - 5,
            star.y
          );

          ctx.lineTo(
            star.x + 5,
            star.y
          );

          ctx.moveTo(
            star.x,
            star.y - 5
          );

          ctx.lineTo(
            star.x,
            star.y + 5
          );

          ctx.stroke();
        }
      });
    }

    function drawPlanet(planet, time) {
      planet.angle += planet.orbitSpeed;

      planet.moonAngle += planet.moonSpeed;

      /*
       * Floating movement
       */

      const floatingX =
        Math.sin(
          time * planet.floatSpeed
        ) * planet.floatAmount;

      const floatingY =
        Math.cos(
          time * planet.floatSpeed * 0.8
        ) * planet.floatAmount * 0.5;

      /*
       * Orbit movement
       */

      const x =
        planet.baseX +
        floatingX +
        Math.cos(planet.angle) *
          planet.orbitRadius;

      const y =
        planet.baseY +
        floatingY +
        Math.sin(planet.angle) *
          planet.orbitRadius *
          0.35;

      /*
       * Outer glow
       */

      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        planet.radius * 4
      );

      glow.addColorStop(
        0,
        planet.color.glow
      );

      glow.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        planet.radius * 4,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Orbital ring
       */

      if (planet.hasRing) {
        ctx.save();

        ctx.translate(x, y);

        ctx.rotate(planet.ringTilt);

        ctx.strokeStyle =
          planet.color.ring;

        ctx.globalAlpha = 0.35;

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          planet.radius * 2.1,
          planet.radius * 0.65,
          0,
          0,
          Math.PI * 2
        );

        ctx.stroke();

        ctx.globalAlpha = 0.12;

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          planet.radius * 2.8,
          planet.radius * 0.8,
          0,
          0,
          Math.PI * 2
        );

        ctx.stroke();

        ctx.restore();
      }

      /*
       * Planet body
       */

      const planetGradient =
        ctx.createRadialGradient(
          x - planet.radius * 0.35,
          y - planet.radius * 0.35,
          0,
          x,
          y,
          planet.radius
        );

      planetGradient.addColorStop(
        0,
        "#FFFFFF"
      );

      planetGradient.addColorStop(
        0.12,
        planet.color.ring
      );

      planetGradient.addColorStop(
        0.55,
        planet.color.core
      );

      planetGradient.addColorStop(
        1,
        "#050510"
      );

      ctx.fillStyle =
        planetGradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        planet.radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      /*
       * Moon
       */

      const moonX =
        x +
        Math.cos(planet.moonAngle) *
          (planet.radius * 2.7);

      const moonY =
        y +
        Math.sin(planet.moonAngle) *
          (planet.radius * 1.4);

      ctx.beginPath();

      ctx.fillStyle =
        "rgba(255,255,255,0.65)";

      ctx.arc(
        moonX,
        moonY,
        1.8,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    function drawShootingStars(time) {
      shootingStars.forEach((meteor) => {
        /*
         * Use elapsed time to stagger meteor appearances.
         */

        const cycle =
          (time + meteor.delay) % 9000;

        /*
         * Mostly invisible,
         * occasionally visible.
         */

        if (cycle < 250) {
          meteor.opacity = cycle / 250;
        } else if (cycle < 950) {
          meteor.opacity = 1;
        } else if (cycle < 1200) {
          meteor.opacity =
            1 -
            (cycle - 950) / 250;
        } else {
          meteor.opacity = 0;
          return;
        }

        const progress =
          cycle * 0.45;

        const x =
          meteor.x + progress;

        const y =
          meteor.y + progress * 0.55;

        const tailX =
          x -
          Math.cos(meteor.angle) *
            meteor.length;

        const tailY =
          y -
          Math.sin(meteor.angle) *
            meteor.length;

        const gradient =
          ctx.createLinearGradient(
            tailX,
            tailY,
            x,
            y
          );

        gradient.addColorStop(
          0,
          "rgba(34,211,238,0)"
        );

        gradient.addColorStop(
          0.6,
          `rgba(139,92,246,${
            meteor.opacity * 0.25
          })`
        );

        gradient.addColorStop(
          1,
          `rgba(255,255,255,${
            meteor.opacity
          })`
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 1.5;

        ctx.beginPath();

        ctx.moveTo(
          tailX,
          tailY
        );

        ctx.lineTo(
          x,
          y
        );

        ctx.stroke();

        /*
         * Meteor head
         */

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${
          meteor.opacity
        })`;

        ctx.arc(
          x,
          y,
          1.7,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });
    }

    function draw(time) {
      const delta = time - lastTime;

      lastTime = time;

      /*
       * Prevent giant movement after tab switching
       */

      if (delta > 100) {
        lastTime = time;
      }

      drawBackground(time);

      /*
       * Mouse parallax
       */

      const mouseX = mouseRef.current.x;

      const mouseY = mouseRef.current.y;

      ctx.save();

      ctx.translate(
        mouseX * 0.015,
        mouseY * 0.015
      );

      drawStars(time);

      planets.forEach((planet) => {
        drawPlanet(planet, time);
      });

      drawShootingStars(time);

      ctx.restore();

      animationFrame =
        requestAnimationFrame(draw);
    }

    function handleMouseMove(event) {
      mouseRef.current.x =
        event.clientX - width / 2;

      mouseRef.current.y =
        event.clientY - height / 2;
    }

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    draw(performance.now());

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className="particle-bg"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="particle-canvas"
      />

      <div className="glow-blob glow-blob--purple" />
      <div className="glow-blob glow-blob--cyan" />
      <div className="glow-blob glow-blob--magenta" />

      <div className="space-vignette" />
    </div>
  );
}

export default ParticleBackground;
