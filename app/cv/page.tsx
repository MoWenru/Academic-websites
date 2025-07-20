"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function CVPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2C3E50]">{t("cv.title")}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">{t("cv.personal")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("cv.name")}</h3>
                  <p className="text-[#7F8C8D]">{t("profile.name")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("cv.position")}</h3>
                  <p className="text-[#7F8C8D]">{t("profile.position")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("cv.institution")}</h3>
                  <p className="text-[#7F8C8D]">{t("profile.school")}</p>
                  <p className="text-[#7F8C8D]">{t("profile.group")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">{t("cv.email")}</h3>
                  <p className="text-[#7F8C8D]">{t("contact.email.value")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("cv.education")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("cv.work_experience")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("work.experience.1.period")} {t("work.experience.1.institution")} {t("work.experience.1.location")}</h3>
                    <p className="text-[#7F8C8D]">{t("work.experience.1.qualifications")}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("work.experience.1.details")}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("work.experience.2.period")} {t("work.experience.2.institution")} {t("work.experience.2.location")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "职位：" : "Position: "}{t("work.experience.2.position")}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("work.experience.2.details")}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("work.experience.3.period")} {t("work.experience.3.institution")} {t("work.experience.3.location")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "职位：" : "Position: "}{t("work.experience.3.position")}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("work.experience.3.details")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Research Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("cv.research_experience")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.1.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.1.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "研究重点：" : "Research Focus: "}{t("research.experience.1.focus")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "作为导师的职责：" : "Responsibilities as Supervisor: "}{t("research.experience.1.responsibilities")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings: "}{t("research.experience.1.findings")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.2.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.2.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "研究重点：" : "Research Focus: "}{t("research.experience.2.focus")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "作为导师的职责：" : "Responsibilities as Supervisor: "}{t("research.experience.2.responsibilities")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings: "}{t("research.experience.2.findings")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.3.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.3.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "研究重点：" : "Research Focus: "}{t("research.experience.3.focus")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "作为导师的职责：" : "Responsibilities as Supervisor: "}{t("research.experience.3.responsibilities")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings: "}{t("research.experience.3.findings")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.4.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.4.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "研究重点：" : "Research Focus: "}{t("research.experience.4.focus")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "作为研究员的职责：" : "Responsibilities as Researcher:"}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("research.experience.4.responsibilities")}</li>
                    </ul>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "成果：" : "Outputs: "}{t("research.experience.4.outputs")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.5.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.5.duration")}</p>
                    <p className="text-[#7F8C8D]">{t("research.experience.5.supervisor")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "研究重点：" : "Research Focus: "}{t("research.experience.5.focus")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "职责：" : "Responsibilities: "}{t("research.experience.5.responsibilities")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings: "}{t("research.experience.5.findings")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.6.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.6.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "目标：" : "Objectives: "}{t("research.experience.6.objectives")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "职责：" : "Responsibilities: "}{t("research.experience.6.responsibilities")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings:"}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("research.experience.6.findings1")}</li>
                      <li>{t("research.experience.6.findings2")}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("research.experience.7.title")}</h3>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "持续时间：" : "Duration: "}{t("research.experience.7.duration")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "目标：" : "Objectives: "}{t("research.experience.7.objectives")}</p>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "职责：" : "Responsibilities:"}</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("research.experience.7.responsibilities")}</li>
                    </ul>
                    <p className="text-[#7F8C8D]">{language === "zh" ? "主要发现：" : "Key Findings: "}{t("research.experience.7.findings")}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Publications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("publications.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("publications.1.authors")} ({t("publications.1.year")}). {t("publications.1.title")} {t("publications.1.journal")}, {t("publications.1.doi")}.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("publications.2.authors")} ({t("publications.2.year")}). {t("publications.2.title")} {t("publications.2.journal")}, {t("publications.2.doi")}.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("publications.3.authors")} ({t("publications.3.year")}). {t("publications.3.title")} {t("publications.3.journal")}, {t("publications.3.doi")}.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("publications.4.authors")} ({t("publications.4.year")}). {t("publications.4.title")} {t("publications.4.journal")}, {t("publications.4.doi")}.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("publications.5.authors")} ({t("publications.5.year")}). {t("publications.5.title")} {t("publications.5.journal")}, {t("publications.5.doi")}.</h3>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("cv.additional_info")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("cv.languages")}</h3>
                    <p className="text-[#7F8C8D]">{t("skills.languages")}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("cv.technical_skills")}</h3>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>{t("skills.data_analysis")}</li>
                      <li>{t("skills.statistical_modeling")}</li>
                      <li>{t("skills.presentations")}</li>
                      <li>{t("skills.research_platforms")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#7F8C8D]">
            {language === "zh" ? "如需更多信息，请" : "For more information, please "}
            <Link href="#contact" className="text-[#E67E22] hover:underline">
              {t("cv.contact")}
            </Link>
            {language === "zh" ? "。" : "."}
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
