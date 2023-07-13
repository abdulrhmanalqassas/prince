import React, { useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocaleContext from "../../LocaleContext";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import p1 from "../../p1.png";
import p2 from "../../p2.jpeg";
import p3 from "../../p3.jpeg";
import p4 from "../../p4.jpeg";
// const { locale } = useContext(LocaleContext);
// const { t } = useTranslation();

const Images = [
  {
    id: 1,
    src: p1,
    alt: "Image 1",
    title: "LK-92",
    description: "Laser Type: Nd:YAG, Q-Switche",
  },
  {
    id: 2,
    src: p2,
    alt: "Image 2 ",
    title: "OCT  Mocean 3000 Plus",
    description: "OCT Imaging ",
  },
  {
    id: 3,
    src: p3,
    alt: "Image 3",
    title: "AL-1000",
    description:
      "With PD Meter +Pupil Height+ +Improved Printer + UV + Bluetooth+ Blue light New capacitive touch panel with high resolution ",
  },
  {
    id: 4,
    src: p4,
    alt: "ARK-980",
    title: "ARK-980",
    description:
      "Aventador SV provide thrills unlike anything that has ever been experienced before.",
  },
];

export default function ImgSlider() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('optical.pptx').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'optical.pptx';
            alink.click();
        })
    })
}
  const { locale } = useContext(LocaleContext);
  const { t } = useTranslation();
  const slider = useRef(null);
  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="slider" className="slider">
      <div>
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">
            {t("Our-Product")}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            {t("about")}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <Slider ref={slider} {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="sm:text-2xl text-1xl m-6 font-medium title-font text-gray-900 mt-0 mb-2">
                {item.title}
              </h2>
              <ul class="list-disc">
                <li className=" leading-relaxed  mx-6 text-gray-500s">
                  {item.description}
                </li>
              </ul>
            </div>
          ))}
        </Slider>
      </div>
      <div class=" py-8 container flex justify-center mx-auto">
        <div class="flex flex-row mx-auto">
          <button
            type="button"
            onClick={() => previous()}
            class="bg-gray-800 text-white  m-1  border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
          >
            <div class="flex flex-row align-middle">
              <svg
                class="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="ml-2">{t("Prev")}</p>
            </div>
          </button>
          <button
            onClick={() => next()}
            type="button"
            class="bg-gray-800 text-white m-1 py-2  border-gray-200 hover:bg-red-700 hover:text-white px-3"
          >
            <div class="flex flex-row align-middle">
              <span class="mr-2">{t("Next")}</span>
              <svg
                class="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          
        </div>
       
      
      </div>
      <div className="block text-center mb-4">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            {t("for-more")}
          </h1>
        <button onClick={onButtonClick}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
        </div>
    </div>
  );
}
