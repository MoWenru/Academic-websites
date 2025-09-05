"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-4">{t("footer.about")}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t("footer.about.desc")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-300 hover:text-white">
                  {t("nav.research")}
                </Link>
              </li>
              <li>
                <Link href="#publications" className="text-gray-300 hover:text-white">
                  {t("publications.title")}
                </Link>
              </li>
              <li>
                <Link href="#teaching" className="text-gray-300 hover:text-white">
                  {t("nav.teaching")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} 学术个人主页. {t("footer.copyright")}.
          </p>
          <p className="mt-2">
            <Link href="#" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            {" | "}
            <Link href="#" className="hover:text-white">
              {t("footer.terms")}
            </Link>
          </p>
          <p className="mt-2">ORCID: 0000-0000-0000-0000</p>
        </div>
      </div>
    </footer>
  )
}
