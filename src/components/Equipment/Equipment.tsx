import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Equipment.module.scss';

gsap.registerPlugin(ScrollTrigger);

const images = import.meta.glob('../../vendor/images/frames/*.jpg', { eager: true });

const Equipment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [imagesLoadedCount, setImagesLoadedCount] = useState<number>(0);
  const [totalImages, setTotalImages] = useState<number>(0);

  useEffect(() => {
    const loadImages = () => {
      const imagePaths: string[] = [];
      const paths = Object.keys(images);

      paths.sort((a, b) => {
        const regex = /.*_([0-9]+)\.jpg$/;
        const matchA = a.match(regex);
        const matchB = b.match(regex);
        if (matchA && matchB) {
          const numA = parseInt(matchA[1], 10);
          const numB = parseInt(matchB[1], 10);
          return numA - numB;
        }
        return 0;
      });

      for (const path of paths) {
        const module = images[path] as { default: string };
        imagePaths.push(module.default);
      }

      setTotalImages(imagePaths.length);

      const promises = imagePaths.map((imgSrc) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = imgSrc;
          img.onload = () => {
            setImagesLoadedCount((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => {
            console.error(`Ошибка загрузки изображения: ${imgSrc}`);
            setImagesLoadedCount((prev) => prev + 1);
            resolve();
          };
        });
      });

      Promise.all(promises).then(() => {
        setLoadedImages(imagePaths);
      });
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (loadedImages.length > 0 && sectionRef.current && textRef.current) {
      const sectionElement = sectionRef.current;
      const textElement = textRef.current;

      gsap.to({}, {
        scrollTrigger: {
          trigger: sectionElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameIndex = Math.floor(progress * (loadedImages.length - 1));
            if (imageRef.current && loadedImages.length > 0) {
              imageRef.current.src = loadedImages[frameIndex];
            }
          },
        },
      });

      gsap.fromTo(
        textElement,
        { xPercent: 100 },
        {
          xPercent: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }
  }, [loadedImages]);

  if (imagesLoadedCount < totalImages) {
    const progressPercentage = Math.round((imagesLoadedCount / totalImages) * 100);
    return (
      <div className={styles['loading']}>
        <p>Загрузка... {progressPercentage}%</p>
        <div className={styles['progress-bar']}>
          <div
            className={styles['progress-bar__fill']}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.equipment} ref={sectionRef}>
      {loadedImages.length > 0 && (
        <img
          className={styles['equipment__background']}
          ref={imageRef}
          src={loadedImages[0]}
          alt="scroll background animation"
        />
      )}
      <div className={styles['equipment__overlay']}>
        <div className={styles['equipment__text']} ref={textRef}>
          оборудование
        </div>
      </div>
    </section>
  );
};

export default Equipment;