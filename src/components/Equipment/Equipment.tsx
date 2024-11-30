// import { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import styles from './Equipment.module.scss';

// gsap.registerPlugin(ScrollTrigger);

// const images = import.meta.glob('../../vendor/images/frames/*.jpg', { eager: true });

// const Equipment: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);

//   const [loadedImages, setLoadedImages] = useState<string[]>([]);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadedCount, setLoadedCount] = useState(0);

//   const imagesCount = Object.keys(images).length;

//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePaths: string[] = [];
//       const paths = Object.keys(images);

//       paths.sort((a, b) => {
//         const regex = /.*_([0-9]+)\.jpg$/;
//         const numA = parseInt(a.match(regex)?.[1] || '0', 10);
//         const numB = parseInt(b.match(regex)?.[1] || '0', 10);
//         return numA - numB;
//       });

//       const promises = paths.map((path) => {
//         const module = images[path] as { default: string };
//         imagePaths.push(module.default);

//         return new Promise<void>((resolve) => {
//           const img = new Image();
//           img.src = module.default;
//           img.onload = () => {
//             setLoadedCount((prev) => prev + 1);
//             resolve();
//           };
//           img.onerror = () => {
//             console.error(`Ошибка загрузки изображения: ${module.default}`);
//             setLoadedCount((prev) => prev + 1);
//             resolve();
//           };
//         });
//       });

//       await Promise.all(promises);
//       setLoadedImages(imagePaths);
//       setIsLoaded(true);
//     };

//     loadImages();
//   }, []);

//   useEffect(() => {
//     if (isLoaded && sectionRef.current && textRef.current) {
//       const sectionElement = sectionRef.current;
//       const textElement = textRef.current;
  
//       gsap.fromTo(
//         textElement,
//         { xPercent: 100 },
//         {
//           xPercent: -190,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionElement,
//             start: "top top",
//             end: "bottom center",
//             scrub: true,
//             onLeave: () => {
//               textElement.style.display = "none";
//             },
//             onEnterBack: () => {
//               textElement.style.display = "block";
//             },
//           },
//         }
//       );
  
//       gsap.to({}, {
//         scrollTrigger: {
//           trigger: sectionElement,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const frameIndex = Math.floor(progress * (loadedImages.length - 1));
//             if (imageRef.current && loadedImages.length > 0) {
//               imageRef.current.src = loadedImages[frameIndex];
//             }
//           },
//         },
//       });
//     }
//   }, [isLoaded, loadedImages]);

//   if (!isLoaded) {
//     const progressPercentage = (loadedCount / imagesCount) * 100;

//     return (
//       <div className={styles['loading']}>
//         <p>Загрузка...</p>
//         <div className={styles['progress-bar']}>
//           <div
//             className={styles['progress-bar__fill']}
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className={styles.equipment} ref={sectionRef}>
//       {loadedImages.length > 0 && (
//         <img
//           className={styles['equipment__background']}
//           ref={imageRef}
//           src={loadedImages[0]}
//           alt="scroll background animation"
//         />
//       )}
//       <div className={styles['equipment__overlay']}>
//         <div className={styles['equipment__text']} ref={textRef}>
//           оборудование
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Equipment;

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Equipment.module.scss';

gsap.registerPlugin(ScrollTrigger);

const images = import.meta.glob('../../vendor/images/frames/*.jpg', { eager: true });

const Equipment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null); // Изменено с imageRef на backgroundRef
  const textRef = useRef<HTMLDivElement>(null);

  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const imagesCount = Object.keys(images).length;

  useEffect(() => {
    const loadImages = async () => {
      const imagePaths: string[] = [];
      const paths = Object.keys(images);

      paths.sort((a, b) => {
        const regex = /.*_([0-9]+)\.jpg$/;
        const numA = parseInt(a.match(regex)?.[1] || '0', 10);
        const numB = parseInt(b.match(regex)?.[1] || '0', 10);
        return numA - numB;
      });

      const promises = paths.map((path) => {
        const module = images[path] as { default: string };
        imagePaths.push(module.default);

        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = module.default;
          img.onload = () => {
            setLoadedCount((prev) => prev + 1);
            resolve();
          };
          img.onerror = () => {
            console.error(`Ошибка загрузки изображения: ${module.default}`);
            setLoadedCount((prev) => prev + 1);
            resolve();
          };
        });
      });

      await Promise.all(promises);
      setLoadedImages(imagePaths);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (isLoaded && sectionRef.current && textRef.current && backgroundRef.current) {
      const sectionElement = sectionRef.current;
      const textElement = textRef.current;
      const backgroundElement = backgroundRef.current;

      // Анимация текста
      gsap.fromTo(
        textElement,
        { xPercent: 100 },
        {
          xPercent: -190,
          ease: "none",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top top",
            end: "bottom center",
            scrub: true,
            onLeave: () => {
              textElement.style.display = "none";
            },
            onEnterBack: () => {
              textElement.style.display = "block";
            },
          },
        }
      );

      // Анимация фонового изображения
      gsap.to({}, {
        scrollTrigger: {
          trigger: sectionElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const frameIndex = Math.floor(progress * (loadedImages.length - 1));
            if (backgroundElement && loadedImages.length > 0) {
              backgroundElement.style.backgroundImage = `url(${loadedImages[frameIndex]})`;
            }
          },
        },
      });
    }
  }, [isLoaded, loadedImages]);

  if (!isLoaded) {
    const progressPercentage = (loadedCount / imagesCount) * 100;

    return (
      <div className={styles['loading']}>
        <p>Загрузка...</p>
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
        <div
          className={styles['equipment__background']}
          ref={backgroundRef}
          style={{ backgroundImage: `url(${loadedImages[0]})` }}
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