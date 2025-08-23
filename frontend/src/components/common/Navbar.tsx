// libraries
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("navbar");
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 rounded-full bg-zinc-950 px-2 py-1 font-sans dark:bg-zinc-950">
      <div className="relative flex items-center justify-center">
        {/* theme switch */}
        <div className="absolute left-4">
          <button
            className="mx-4 text-sm text-zinc-950 dark:text-zinc-50"
            onClick={() => i18n.changeLanguage("en")}
          >
            {t("en")}
          </button>
          <button
            className="mx-4 text-sm text-zinc-950 dark:text-zinc-50"
            onClick={() => i18n.changeLanguage("fr")}
          >
            {t("fr")}
          </button>
        </div>

        {/* Logo - center */}
        <div>
          <a href="/" className="text-lg text-zinc-950 dark:text-zinc-50">
            {t("logo")}
          </a>
        </div>

        {/* Hamburger - right */}
        <div className="absolute right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-900 focus:outline-none dark:text-zinc-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-1/2 z-40 w-[90%] max-w-4xl -translate-x-1/2 rounded-xl bg-white p-4 shadow-lg dark:bg-zinc-950">
          <ul className="space-y-3 text-center text-base text-zinc-900 dark:text-zinc-100">
            <li>
              <NavLink to="/about" className="block hover:underline">
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" className="block hover:underline">
                {t("history")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block hover:underline">
                {t("contact")}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
