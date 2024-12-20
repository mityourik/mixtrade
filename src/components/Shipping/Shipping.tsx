// import React, { useEffect, useRef } from 'react';
// import styles from './Shipping.module.scss';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Shipping: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const airshipImageRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const section = sectionRef.current;
//     const airshipImage = airshipImageRef.current;
//     const content = contentRef.current;

//     if (section && airshipImage && content) {
//       gsap.set(content, { opacity: 0 });

//       gsap.fromTo(
//         airshipImage,
//         { xPercent: 100 },
//         {
//           xPercent: 0,
//           ease: 'power2.out',
//           duration: 5,
//           scrollTrigger: {
//             trigger: section,
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: 3,
//           },
//         }
//       );

//       gsap.fromTo(
//         content,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 10%',
//             end: 'top top',
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     // <section className={`${styles.shipping} scroll-section`} ref={sectionRef}>
//     <section className={styles.shipping} ref={sectionRef}>

//       <div className={styles['shipping__airship-image']} ref={airshipImageRef}></div>
//       <div className={styles['shipping__content']} ref={contentRef}>
//         <h1 className={styles['shipping__title']}>доставим куда угодно</h1>
//       </div>
//     </section>
//   );
// };

// export default Shipping;

import React, { useEffect, useRef } from 'react';
import styles from './Shipping.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Shipping: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const airshipImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const airshipImage = airshipImageRef.current;
    const content = contentRef.current;

    if (section && airshipImage && content) {
      gsap.set(content, { opacity: 0 });

      gsap.fromTo(
        airshipImage,
        { xPercent: 100 },
        {
          xPercent: 0,
          ease: 'power2.out',
          duration: 5,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        content,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 10%',
            end: 'top top',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.shipping} ref={sectionRef}>
      <div className={styles['shipping__airship-image']} ref={airshipImageRef}></div>
      <div className={styles['shipping__content']} ref={contentRef}>
        <h1 className={styles['shipping__title']}>доставим куда угодно</h1>
        <p className={styles['shipping__paragraph']}>
          во все регионы РФ, а так же в ближнее зарубежье
        </p>
      </div>
    </section>
  );
};

export default Shipping;