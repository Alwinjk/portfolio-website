import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function SkillParticles() {
  /* ----- 1. initialise engine once ----- */
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // loadSlim == tiny bundle (links, move, size, opacity, etc.)
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  /* ----- 2. particle options (only circles, gentle drift) ----- */
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
    //   background: { color: "rgb(0, 0, 0)" },
    background: { color: 'transparent' },
      particles: {
        number: { value: 25 },
        color: { value: "rgb(255, 255, 255)" },
        size: { value: { min: 3, max: 5 } },
        move: { enable: true, speed: 0.6 },
        opacity: { value: 0.4 },
      },
    }),
    []
  );

  /* ----- 3. render once engine is ready ----- */
  if (!ready) return null;

  return (
    <Particles
        id="skill-particles"
        options={options}
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
        }}
    />
  );
}
