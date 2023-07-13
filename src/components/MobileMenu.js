import { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);
  const { locale } = useContext(LocaleContext);
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  const { t } = useTranslation();
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            {/* <li>
              <Link href="/signin" className="" onClick={}>Sign in</Link>
            </li> */}
            <li  onClick={() => {
                  setMobileNavOpen(false);
                }} >
              <Link
                href="/signin"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("nav-li2")}
              </Link>
            </li>
            <li  onClick={() => {
                  setMobileNavOpen(false);
                }}>
              <Link
                href="/signin"
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
               
              >
                {t("nav-li1")}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => {
                  setMobileNavOpen(false);
                  changeLocale("en");
                }}
              >
                EN
              </Link>
              //
              <Link
                href="#"
                onClick={() => {
                  setMobileNavOpen(false);
                  changeLocale("ar");
                }}
              >
                عربي
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
