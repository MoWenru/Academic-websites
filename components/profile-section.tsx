"use client"

import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Mail, Github, Linkedin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function ProfileSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#2C3E50] dark:border-[#E67E22]">
            <Image
              src="/Academic-websites/scholar.png"
              alt="Profile Photo"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-[#2C3E50] dark:text-white">{t("profile.name")}</h1>
          <p className="text-[#7F8C8D] dark:text-gray-400">{t("profile.position")}</p>
          <p className="text-[#7F8C8D] dark:text-gray-400">
            {t("profile.group")} | {t("profile.school")}
          </p>
          <div className="flex space-x-3 mt-4">
            <Button variant="outline" size="icon" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="ResearchGate">
              <BookOpen className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro1")}</p>
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro2")}</p>
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro3")}</p>
          </div>

          <Tabs defaultValue="education" className="w-full mt-4">
            <TabsList>
              <TabsTrigger value="education">{t("education.title") || "教育背景"}</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("education.1.period")} {t("education.1.school")}</h3>
                  <p className="text-[#7F8C8D]">{t("education.1.degree")} | {t("education.1.gpa")}</p>
                  <p className="text-[#34495E] mt-1">{t("education.1.courses")}</p>
                  <p className="text-[#34495E] mt-1">{t("education.1.paper")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("education.2.period")} {t("education.2.school")}</h3>
                  <p className="text-[#7F8C8D]">{t("education.2.degree")} | {t("education.2.gpa")}</p>
                  <p className="text-[#34495E] mt-1">{t("education.2.courses")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("education.3.period")} {t("education.3.school")}</h3>
                  <p className="text-[#7F8C8D]">{t("education.3.degree")}</p>
                  <p className="text-[#34495E] mt-1">{t("education.3.courses")}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
