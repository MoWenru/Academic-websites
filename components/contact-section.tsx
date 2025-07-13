"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("contact.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Phone className="h-10 w-10 text-[#E67E22] mb-4" />
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-xl font-semibold text-[#2C3E50]">{t("contact.phone")}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[#7F8C8D]">{t("contact.phone.value")}</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Mail className="h-10 w-10 text-[#E67E22] mb-4" />
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-xl font-semibold text-[#2C3E50]">{t("contact.email")}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[#7F8C8D]">{t("contact.email.value")}</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <MapPin className="h-10 w-10 text-[#E67E22] mb-4" />
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-xl font-semibold text-[#2C3E50]">{t("contact.address")}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[#7F8C8D]">{t("contact.address.value")}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
