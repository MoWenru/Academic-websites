"use client"

import { useLanguage } from "./language-provider"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"

export default function ResearchSection() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  const researchAreas = [
    {
      id: "international-trade",
      nameKey: "research.item1",
      descriptionKey: "research.overview.desc1",
      image: "/Academic-websites/international-trade.png",
    },
    {
      id: "agricultural-economics",
      nameKey: "research.item2",
      descriptionKey: "research.overview.desc2",
      image: "/Academic-websites/agricultural-economics.png",
    },
    {
      id: "commodity-markets",
      nameKey: "research.item3",
      descriptionKey: "research.overview.desc3",
      image: "/Academic-websites/commodity-markets.jpg",
    },
    {
      id: "women-labor",
      nameKey: "research.item4",
      descriptionKey: "research.overview.desc4",
      image: "/Academic-websites/women-labor.png",
    },
    {
      id: "rural-revitalization",
      nameKey: "research.item5",
      descriptionKey: "research.overview.desc5",
      image: "/Academic-websites/rural-revitalization.jpg",
    },
  ]

  return (
    <section id="research" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("research.title")}</h2>

      <div className="mb-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-3 mb-8">
            <TabsTrigger value="overview">{t("research.overview")}</TabsTrigger>
            <TabsTrigger value="timeline">{t("research.timeline")}</TabsTrigger>
            <TabsTrigger value="projects">{t("research.projects")}</TabsTrigger>
            {/* <TabsTrigger value="collaborations">{t("research.collaborations")}</TabsTrigger> */}
            {/* <TabsTrigger value="funding">{t("research.funding")}</TabsTrigger> */}
            {/* <TabsTrigger value="impact">{t("research.impact")}</TabsTrigger> */}
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area) => (
                <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={t(area.nameKey)}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#2C3E50] dark:text-white">{t(area.nameKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#34495E] dark:text-gray-300">
                      {t(area.descriptionKey)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-[#E67E22] text-white hover:bg-[#D35400]">
                        {t("research.badge")}
                      </Badge>
                      <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                        {area.id}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="relative border-l-2 border-[#2C3E50] ml-4 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.1.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.1.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.1.focus")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.1.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.1.findings")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.2.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.2.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.2.focus")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.2.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.2.findings")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.3.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.3.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.3.focus")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.3.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.3.findings")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.4.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.4.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.4.focus")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.4.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.4.outputs")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.5.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.5.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.5.supervisor")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.5.focus")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.5.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.5.findings")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.6.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.6.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.6.objectives")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.6.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.6.findings1")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.6.findings2")}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">{t("research.experience.7.duration")}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">{t("research.experience.7.title")}</h3>
                <p className="text-[#34495E] mt-2">{t("research.experience.7.objectives")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.7.responsibilities")}</p>
                <p className="text-[#34495E] mt-2">{t("research.experience.7.findings")}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("research.experience.1.title")}</CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("research.experience.1.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("research.experience.1.focus")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("research.experience.2.title")}</CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("research.experience.2.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("research.experience.2.focus")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("research.experience.3.title")}</CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("research.experience.3.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("research.experience.3.focus")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">{t("research.experience.4.title")}</CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("research.experience.4.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("research.experience.4.focus")}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* <TabsContent value="collaborations">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-university-crest.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {t("collaboration.tsinghua")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-research-logo.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {t("collaboration.cas")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/global-knowledge-emblem.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">{t("collaboration.mit")}</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-tech-logo.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {t("collaboration.huawei")}
                </p>
              </div>
            </div>
          </TabsContent> */}

          {/* <TabsContent value="funding">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {t("funding.nsfc.title")}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("funding.nsfc.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {t("funding.nsfc.desc")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {t("funding.most.title")}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">{t("funding.most.duration")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {t("funding.most.desc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent> */}

          {/* <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">25+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("impact.sci_papers")}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{t("impact.citations")}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">10+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {t("impact.international_projects")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  )
}
