import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Equipment.module.scss';

gsap.registerPlugin(ScrollTrigger);

const images = import.meta.glob('../../vendor/images/frames/*.jpg', { eager: true });

const Equipment: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const imagesCount = Object.keys(images).length;

  useEffect(() => {
    const loadImages = async () => {
      const paths = Object.keys(images);

      // Сортируем пути к изображениям
      paths.sort((a, b) => {
        const regex = /.*_([0-9]+)\.jpg$/;
        const numA = parseInt(a.match(regex)?.[1] || '0', 10);
        const numB = parseInt(b.match(regex)?.[1] || '0', 10);
        return numA - numB;
      });

      const imageElements: HTMLImageElement[] = new Array(paths.length);

      const promises = paths.map((path, index) => {
        const module = images[path] as { default: string };
        const img = new Image();
        img.src = module.default;

        return new Promise<void>((resolve) => {
          img.onload = () => {
            imageElements[index] = img; // Сохраняем изображение по индексу
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
      setLoadedImages(imageElements);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (isLoaded && sectionRef.current && textRef.current && canvasRef.current) {
      const sectionElement = sectionRef.current;
      const textElement = textRef.current;
      const canvasElement = canvasRef.current;
      const context = canvasElement.getContext('2d');

      let currentFrameIndex = -1; // Текущий индекс кадра

      // Устанавливаем размер canvas
      const setCanvasSize = () => {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
      };

      setCanvasSize();

      // Функция отрисовки кадра
      const render = (frameIndex: number) => {
        const index = Math.min(loadedImages.length - 1, Math.max(0, Math.floor(frameIndex)));
        if (index !== currentFrameIndex) {
          const image = loadedImages[index];
          context?.clearRect(0, 0, canvasElement.width, canvasElement.height);
          context?.drawImage(image, 0, 0, canvasElement.width, canvasElement.height);
          currentFrameIndex = index;
        }
      };

      // Отрисовываем первый кадр
      render(0);

      // Анимация текста
      gsap.fromTo(
        textElement,
        { xPercent: 100 },
        {
          xPercent: -190,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top top',
            end: 'bottom center',
            scrub: true,
            onLeave: () => {
              textElement.style.display = 'none';
            },
            onEnterBack: () => {
              textElement.style.display = 'block';
            },
          },
        }
      );

      // Анимация Canvas
      const totalFrames = loadedImages.length - 1;

      gsap.to({ frame: 0 }, {
        frame: totalFrames,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
        onUpdate: function () {
          render(this.targets()[0].frame);
        },
      });

      // Обновляем размер canvas при изменении размера окна
      const handleResize = () => {
        setCanvasSize();
        // Перерисовываем текущий кадр
        render(currentFrameIndex);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
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
      <canvas
        className={styles['equipment__canvas']}
        ref={canvasRef}
      />
      <div className={styles['equipment__overlay']}>
        <div className={styles['equipment__text']} ref={textRef}>
          оборудование
        </div>
      </div>
    </section>
  );
};

export default Equipment;