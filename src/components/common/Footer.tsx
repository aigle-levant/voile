// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <footer
      id="footer"
      className="relative bottom-0 z-50 w-full bg-zinc-50 p-2 font-sans text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50"
    >
      <div id="footer-links-container" className="flex flex-col">
        <nav
          id="footer-links"
          className="flex flex-row flex-wrap items-center justify-center gap-x-[2.5rem] gap-y-3 sm:gap-x-[3.5rem]"
        >
          <NavLink to="/about" className="block hover:underline">
            {t("about")}
          </NavLink>
          <NavLink to="/history" className="block hover:underline">
            {t("history")}
          </NavLink>
          <NavLink to="/contact" className="block hover:underline">
            {t("contact")}
          </NavLink>
        </nav>
        <div
          id="social-media-links"
          className="mt-6 flex flex-row justify-center gap-x-[2.5rem] gap-y-3 hover:text-zinc-50 sm:gap-x-[3.5rem]"
        >
          <a href="https://github.com/aigle-levant">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/prajanya-subramanian/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/aiglelevant">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
        <div id="attribution" className="mt-6 flex flex-row justify-center">
          <p className="font-sans text-zinc-700 dark:text-zinc-500">
            {t("credits")}
          </p>
        </div>
      </div>
    </footer>
  );
}
