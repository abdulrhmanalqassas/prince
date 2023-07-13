// import VideoThumb from '@/public/images/hero-image.png'
// import ModalVideo from '@/components/modal-video'
import React, { useContext } from "react";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import heroV from "../heroV.mp4";
// const { locale } = useContext(LocaleContext);
// const { t } = useTranslati

export default function Hero() {
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();
  return (
    <section id="hero" className="bg-cover relative  h-full w-full z-99"
     >
<header
  class="relative flex items-center justify-center h-96 mb-12 overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white bg-purple-100 bg-opacity-10 rounded-xl"
  >
 
            <h1
            className="text-6xl md:text-9xl  font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >

            <span className="z-90 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            {t("hero-header")}
            </span>
            <span className="z-90 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {t("hero-brand")}
            </span>
          </h1>
         
            <p
              className="text-4xl text-gray-600 mb-8 z-10"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              {t("hero-text")}
            </p>

   
  </div>
  <video
    autoPlay
    loop
    muted
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src={heroV}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>

     </section>
    
    // <section  className="bg-cover relative  h-full w-full z-99"
    // style={{ backgroundImage: `url(${myImage})` }} >
           
    //   {/* Illustration behind hero content */}
    //   {/* <div
    //     className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
    //     aria-hidden="true"
    //   >
    //     <svg
    //       width="1360"
    //       height="578"
    //       viewBox="0 0 1360 578"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <defs>
    //         <linearGradient
    //           x1="50%"
    //           y1="0%"
    //           x2="50%"
    //           y2="100%"
    //           id="illustration-01"
    //         >
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <g fill="url(#illustration-01)" fillRule="evenodd">
    //         <circle cx="1232" cy="128" r="128" />
    //         <circle cx="155" cy="443" r="64" />
    //       </g>
    //     </svg>
    //   </div>
    //   <div
    //     className="absolute inset-x-32 inset-y-64  bottom-0 pointer-events-none -z-5"
    //     aria-hidden="true"
    //   >
    //     <svg
    //       width="100px"
    //       height="100px"
    //       viewBox="0 0 16 16"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlnsXlink="http://www.w3.org/1999/xlink"
    //     >
    //       <defs>
    //         <linearGradient
    //           x1="50%"
    //           y1="0%"
    //           x2="50%"
    //           y2="100%"
    //           id="illustration-01"
    //         >
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <path
    //         fill="#444"
    //         d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"
    //       />
    //     </svg>
    //   </div>
    //   <div
    //     className="absolute bottom-4 left-16  transform -translate-x-1/2   pointer-events-none "
    //     aria-hidden="true"
    //   >
    //     <svg
    //       width="100px"
    //       height="100px"
    //       viewBox="0 0 16 16"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlnsXlink="http://www.w3.org/1999/xlink"
    //     >
    //       <defs>
    //         <linearGradient
    //           x1="50%"
    //           y1="0%"
    //           x2="50%"
    //           y2="100%"
    //           id="illustration-01"
    //         >
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <path
    //         fill="#444"
    //         d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"
    //       />
    //     </svg>
    //   </div>
    //   <div
    //     className="absolute inset-x-0.5 inset-y-16  transform -translate-x-1/2   pointer-events-none "
    //     aria-hidden="true"
    //   >
    //     <svg
    //       width="100px"
    //       height="100px"
    //       viewBox="0 0 16 16"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlnsXlink="http://www.w3.org/1999/xlink"
    //     >
    //       <defs>
    //         <linearGradient
    //           x1="50%"
    //           y1="0%"
    //           x2="50%"
    //           y2="100%"
    //           id="illustration-01"
    //         >
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <path
    //         fill="#444"
    //         d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"
    //       />
    //     </svg>
    //   </div>
    //   <div
    //     className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-2"
    //     aria-hidden="true"
    //   >
    //     <svg
    //       width="1360"
    //       height="578"
    //       viewBox="0 0 1360 578"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <defs>
    //         <linearGradient
    //           x1="50%"
    //           y1="0%"
    //           x2="50%"
    //           y2="100%"
    //           id="illustration-01"
    //         >
    //           <stop stopColor="#FFF" offset="0%" />
    //           <stop stopColor="#EAEAEA" offset="77.402%" />
    //           <stop stopColor="#DFDFDF" offset="100%" />
    //         </linearGradient>
    //       </defs>
    //       <g fill="url(#illustration-01)" fillRule="evenodd">
    //         <circle cx="1232" cy="128" r="128" />
    //         <circle cx="155" cy="443" r="64" />
    //       </g>
    //     </svg>
    //   </div> */}
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //     {/* Hero content */}
    //     <div className="pt-32 pb-12 md:pt-40  md:pb-20">
    //       {/* Section header */}

    //       <div className="text-center pb-12 md:pb-16">
    
    //           <div
    //             className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
    //             data-aos="zoom-y-out"
    //             data-aos-delay="300"
    //           ></div>
    //         </div>
    //       </div>

    //       {/* Hero image */}
    //       {/* <ModalVideo
    //         thumb={VideoThumb}
    //         thumbWidth={768}
    //         thumbHeight={432}
    //         thumbAlt="Modal video thumbnail"
    //         video="/videos/video.mp4"
    //         videoWidth={1920}
    //         videoHeight={1080} /> */}
    //     </div>
    //   </div>
    // </section>
  );
}
