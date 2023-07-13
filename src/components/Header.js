import { useState, useEffect, useContext } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [top, setTop] = useState(true);
  const { locale } = useContext(LocaleContext);
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-40 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <img className="h-56" src={logo} alt="image description"></img>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  onClick={() => handleClickScroll("hero")}
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                 onClick={() => handleClickScroll("about")}
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t("nav-li1")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleClickScroll("slider")}
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t("nav-li2")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleClickScroll("footer")}
                  href="/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  {t("contact-us")}
                </Link>
              </li>

              <li>
                <Link href="#" onClick={() => changeLocale("en")}>
                  {" "}
                  EN{" "}
                </Link>{" "}
                /{" "}
                <Link href="#" onClick={() => changeLocale("ar")}>
                  {" "}
                  عربي
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
