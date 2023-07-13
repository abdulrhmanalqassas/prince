import "./App.css";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ImgSlider from "./components/utils/ImgSlider";
import Footer from "./components/footer";
import About from "./components/About";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import { Helmet } from "react-helmet";
function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
    <Helmet
      htmlAttributes={{
        lang: locale,
        dir: locale === "en" ? "ltr" : "rtl",
      }}
    />
    <body
      className={`font-inter bg-gradient-to-r from-cyan-200 to-blue-300 antialiased  text-gray-900 tracking-tight`}
    >
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        <Hero></Hero>
        <About></About>
        <ImgSlider></ImgSlider>
        <Footer></Footer>
       
      </div>
  
    </body>

  </LocaleContext.Provider>

    //     <div className='grow' >
    //  <Hero></Hero>
    //     </div>
  );
}

export default App;
