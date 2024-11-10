// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./Hero.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const images = import.meta.glob('../../vendor/images/frames/*.jpg');

// const Hero: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);
//   const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePaths: string[] = [];
//       const paths = Object.keys(images);

//       paths.sort((a, b) => {
//         const regex = /.*_([0-9]+)\.jpg$/;
//         const matchA = a.match(regex);
//         const matchB = b.match(regex);
//         if (matchA && matchB) {
//           const numA = parseInt(matchA[1], 10);
//           const numB = parseInt(matchB[1], 10);
//           return numA - numB;
//         }
//         return 0;
//       });

//       // Сначала получаем все пути изображений в правильном порядке
//       for (const path of paths) {
//         const module = await images[path]() as { default: string };
//         imagePaths.push(module.default);
//       }

//       // Предзагрузка изображений
//       const promises = imagePaths.map((imgSrc) => {
//         return new Promise<void>((resolve, reject) => {
//           const img = new Image();
//           img.src = imgSrc;
//           img.onload = () => resolve();
//           img.onerror = reject;
//         });
//       });

//       await Promise.all(promises);
//       setLoadedImages(imagePaths);
//       setImagesLoaded(true);
//     };

//     loadImages();
//   }, []);

//   useEffect(() => {
//     if (imagesLoaded && containerRef.current) {
//       const textContainer = containerRef.current.querySelector(`.${styles['hero__container']}`) as HTMLDivElement;

//       gsap.to({}, {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const frameIndex = Math.floor(progress * (loadedImages.length - 1));
//             if (imageRef.current && loadedImages.length > 0) {
//               imageRef.current.src = loadedImages[frameIndex];
//             }

//             if (textContainer) {
//               const opacity = gsap.utils.clamp(0, 1, (progress - 0.6) / 0.4);
//               gsap.set(textContainer, { opacity });
//             }
//           }
//         }
//       });
//     }
//   }, [imagesLoaded, loadedImages]);

//   if (!imagesLoaded) {
//     return <div className={styles['loading']}>Загрузка...</div>;
//   }

//   return (
//     <div className={styles['hero']} ref={containerRef}>
//       {loadedImages.length > 0 && (
//         <img
//           className={styles['hero__frame']}
//           ref={imageRef}
//           src={loadedImages[0]}
//           alt="scroll video frame"
//         />
//       )}
//       <div className={styles['hero__container']}>
//         <h1 className={styles['hero__title']}>штукатурные бизнес решения</h1>
//         <p className={styles['hero__subtitle']}>
//           Хотите добиться идеального баланса в своем бизнесе? С штукатурным оборудованием от Personiya вы сможете точно настроить свой бизнес процесс на путь к успеху! Отличное оборудование - залог качественных результатов!
//         </p>
//         <h2 className={styles['hero__hero-title']}>персония хл от 600 000 р</h2>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const images = import.meta.glob('../../vendor/images/frames/*.jpg', { eager: true });

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
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

      // Получение всех путей изображений
      for (const path of paths) {
        const module = images[path] as { default: string };
        imagePaths.push(module.default);
      }

      setTotalImages(imagePaths.length);

      // Предзагрузка изображений с отслеживанием прогресса
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
    if (loadedImages.length > 0 && containerRef.current) {
      const textContainer = containerRef.current.querySelector(
        `.${styles['hero__container']}`
      ) as HTMLDivElement;

      gsap.to({}, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameIndex = Math.floor(progress * (loadedImages.length - 1));
            if (imageRef.current && loadedImages.length > 0) {
              imageRef.current.src = loadedImages[frameIndex];
            }

            if (textContainer) {
              const opacity = gsap.utils.clamp(0, 1, (progress - 0.6) / 0.4);
              gsap.set(textContainer, { opacity });
            }
          }
        }
      });
    }
  }, [loadedImages]);

  if (imagesLoadedCount < totalImages) {
    const progressPercentage = Math.round(
      (imagesLoadedCount / totalImages) * 100
    );
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
        <h1 className={styles['hero__title']}>Штукатурные бизнес решения</h1>
        <p className={styles['hero__subtitle']}>
          Хотите добиться идеального баланса в своем бизнесе? С штукатурным оборудованием от Personiya вы сможете точно настроить свой бизнес-процесс на путь к успеху! Отличное оборудование — залог качественных результатов!
        </p>
        <h2 className={styles['hero__hero-title']}>Персония ХЛ от 600 000 р</h2>
      </div>
    </div>
  );
};

export default Hero;