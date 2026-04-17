const randomBetween = (min, max) => Math.random() * (max - min) + min;

const tonePalette = {
  light: [
    ["rgba(255,255,255,0.95)", "rgba(255,255,255,0.55)"],
    ["rgba(255,74,74,0.9)", "rgba(255,74,74,0.45)"],
    ["rgba(97,123,255,0.92)", "rgba(97,123,255,0.42)"],
  ],
  warm: [
    ["rgba(255,255,255,0.28)", "rgba(255,255,255,0.1)"],
    ["rgba(255,196,196,0.34)", "rgba(255,196,196,0.12)"],
    ["rgba(255,227,227,0.22)", "rgba(255,227,227,0.08)"],
  ],
};

const shapePalette = {
  light: [
    ["rgba(255,255,255,0.16)", "rgba(255,255,255,0.22)"],
    ["rgba(111,141,255,0.14)", "rgba(111,141,255,0.22)"],
    ["rgba(255,109,109,0.12)", "rgba(255,109,109,0.18)"],
  ],
  warm: [
    ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.14)"],
    ["rgba(255,218,218,0.08)", "rgba(255,218,218,0.12)"],
    ["rgba(255,180,180,0.07)", "rgba(255,180,180,0.11)"],
  ],
};

document.querySelectorAll(".stars-layer").forEach((layer) => {
  const tone = layer.dataset.tone || "light";
  const flow = layer.dataset.flow || "fall";
  const isSplit = flow === "split";
  const stars = Number(layer.dataset.stars || 20);
  const palette = tonePalette[tone] || tonePalette.light;
  const shapeTones = shapePalette[tone] || shapePalette.light;
  const shapeCount = Math.max(tone === "warm" ? 10 : 8, Math.round(stars / (isSplit ? 4 : 6)));

  layer.replaceChildren();

  for (let index = 0; index < stars; index += 1) {
    const star = document.createElement("span");
    const isGlow = Math.random() > 0.72;
    const [color, glow] = palette[Math.floor(Math.random() * palette.length)];
    const size = isGlow
      ? randomBetween(isSplit ? 34 : 28, isSplit ? 82 : 64)
      : randomBetween(isSplit ? 2.8 : 2.1, isSplit ? 6.4 : 5.4);
    const driftX = isSplit
      ? (Math.random() > 0.5 ? randomBetween(96, 250) : randomBetween(-250, -96))
      : randomBetween(-36, 36);

    star.className = isGlow ? "star-glow" : "star-dot";
    star.style.left = `${randomBetween(-4, 102)}%`;
    star.style.top = `${randomBetween(-18, isSplit ? 84 : 92)}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--star-color", color);
    star.style.setProperty("--star-glow", glow);
    star.style.setProperty("--drift-x", `${driftX}px`);
    star.style.setProperty("--fall-distance", `${randomBetween(isSplit ? 220 : 170, isSplit ? 430 : 340)}px`);
    star.style.setProperty("--start-lift", `${randomBetween(8, 42)}px`);
    star.style.setProperty("--peak-opacity", `${isGlow ? randomBetween(isSplit ? 0.42 : 0.32, isSplit ? 0.82 : 0.68) : randomBetween(isSplit ? 0.84 : 0.68, 1)}`);
    star.style.setProperty("--duration", `${randomBetween(isSplit ? 3.2 : 4.6, isSplit ? 6.6 : 8.8)}s`);
    star.style.setProperty("--rotate-start", `${randomBetween(isSplit ? -20 : 0, isSplit ? 20 : 18)}deg`);
    star.style.setProperty("--rotate-end", `${randomBetween(isSplit ? 28 : 12, isSplit ? 98 : 48)}deg`);
    star.style.setProperty("--start-scale", `${randomBetween(isSplit ? 0.8 : 0.72, isSplit ? 1 : 0.94)}`);
    star.style.setProperty("--end-scale", `${randomBetween(isSplit ? 1.04 : 0.94, isSplit ? 1.28 : 1.18)}`);
    star.style.animationDelay = `${randomBetween(-16, 0)}s`;

    layer.append(star);
  }

  for (let index = 0; index < shapeCount; index += 1) {
    const star = document.createElement("span");
    const [color, glow] = shapeTones[Math.floor(Math.random() * shapeTones.length)];
    const size = isSplit
      ? randomBetween(74, 196)
      : tone === "warm"
        ? randomBetween(56, 140)
        : randomBetween(66, 164);
    const driftX = isSplit
      ? (index % 2 === 0 ? randomBetween(130, 280) : randomBetween(-280, -130))
      : randomBetween(-46, 46);

    star.className = "star-shape";
    star.style.left = `${randomBetween(-8, 96)}%`;
    star.style.top = `${randomBetween(-24, isSplit ? 62 : 72)}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--star-color", color);
    star.style.setProperty("--star-glow", glow);
    star.style.setProperty("--drift-x", `${driftX}px`);
    star.style.setProperty("--fall-distance", `${randomBetween(isSplit ? 280 : 240, isSplit ? 560 : 480)}px`);
    star.style.setProperty("--start-lift", `${randomBetween(20, 74)}px`);
    star.style.setProperty("--peak-opacity", `${randomBetween(isSplit ? 0.22 : 0.16, isSplit ? 0.46 : 0.34)}`);
    star.style.setProperty("--duration", `${randomBetween(isSplit ? 4.8 : 10, isSplit ? 9.6 : 18)}s`);
    star.style.setProperty("--rotate-start", `${randomBetween(-24, 24)}deg`);
    star.style.setProperty("--rotate-end", `${randomBetween(isSplit ? 44 : 22, isSplit ? 132 : 88)}deg`);
    star.style.setProperty("--start-scale", `${randomBetween(isSplit ? 0.72 : 0.62, isSplit ? 0.96 : 0.92)}`);
    star.style.setProperty("--end-scale", `${randomBetween(isSplit ? 1.04 : 0.92, isSplit ? 1.26 : 1.16)}`);
    star.style.animationDelay = `${randomBetween(-26, 0)}s`;

    layer.append(star);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const hero = document.querySelector(".hero");
const parallaxItems = document.querySelectorAll("[data-parallax]");

if (hero) {
  const updateParallax = (clientX, clientY) => {
    const rect = hero.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty("--pointer-x", `${x * 36}px`);
    hero.style.setProperty("--pointer-y", `${y * 36}px`);

    parallaxItems.forEach((item) => {
      const factor = Number(item.dataset.parallax || 0);
      item.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`;
    });
  };

  hero.addEventListener("pointermove", (event) => {
    updateParallax(event.clientX, event.clientY);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--pointer-x", "0px");
    hero.style.setProperty("--pointer-y", "0px");

    parallaxItems.forEach((item) => {
      item.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

document.querySelectorAll(".tilt-card").forEach((card) => {
  const resetCard = () => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  resetCard();

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -10;
    const rotateY = x * 12;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", resetCard);
  card.addEventListener("pointercancel", resetCard);
});

document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("pointerdown", (event) => {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.2;

    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    button.append(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});