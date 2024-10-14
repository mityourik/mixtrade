import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 16;

const images = import.meta.glob('../../vendor/images/frames/*.jpg');

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePaths: string[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const path = `../../vendor/images/frames/${i}.jpg`;
        if (images[path]) {
          const module = await images[path]() as { default: string };
          imagePaths.push(module.default);
        }
      }

      setLoadedImages(imagePaths);
    };

    loadImages();
  }, []);

  useEffect(() => {
    gsap.to({}, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const frameIndex = Math.floor(self.progress * (frameCount - 1));
          if (imageRef.current && loadedImages.length > 0) {
            imageRef.current.src = loadedImages[frameIndex];
          }
        }
      }
    });
  }, [loadedImages]);

  return (
    <div className={styles['hero']} ref={containerRef}>
      {loadedImages.length > 0 && (
        <img
          className={styles['hero__frame']}
          ref={imageRef}
          src={loadedImages[0]}
          alt="scroll video frame"
        />
      )}
      <div className={styles['hero__container']}>
        <h1 className={styles['hero__title']}>штукатурные бизнес решения</h1>
        <p className={styles['hero__subtitle']}>Хотите добиться идеального баланса в своем бизнесе? 
          С штукатурным оборудованием от Personiya вы сможете точно настроить свой бизнес процесс 
          на путь к успеху! Отличное оборудование - залог качественных результатов!
        </p>
        <h2 className={styles['hero__hero-title']}>персония хл от 600 000 р</h2>
      </div>
    </div>
  );
};

export default Hero;