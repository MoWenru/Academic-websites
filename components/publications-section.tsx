"use client"

import { useLanguage } from "./language-provider"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download } from "lucide-react"

export default function PublicationsSection() {
  const { t, language } = useLanguage()
  const [yearFilter, setYearFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [fieldFilter, setFieldFilter] = useState("all")

  const publications = [
    {
      id: 1,
      titleKey: "publications.1.title",
      authorsKey: "publications.1.authors",
      journalKey: "publications.1.journal",
      year: 2023,
      typeKey: "publications.1.type",
      fieldKey: "publications.1.field",
      doiKey: "publications.1.doi",
      abstractKey: "publications.1.abstract",
    },
    {
      id: 2,
      titleKey: "publications.2.title",
      authorsKey: "publications.2.authors",
      journalKey: "publications.2.journal",
      year: 2024,
      typeKey: "publications.2.type",
      fieldKey: "publications.2.field",
      doiKey: "publications.2.doi",
      abstractKey: "publications.2.abstract",
    },
    {
      id: 3,
      titleKey: "publications.3.title",
      authorsKey: "publications.3.authors",
      journalKey: "publications.3.journal",
      year: 2024,
      typeKey: "publications.3.type",
      fieldKey: "publications.3.field",
      doiKey: "publications.3.doi",
      abstractKey: "publications.3.abstract",
    },
    {
      id: 4,
      titleKey: "publications.4.title",
      authorsKey: "publications.4.authors",
      journalKey: "publications.4.journal",
      year: 2024,
      typeKey: "publications.4.type",
      fieldKey: "publications.4.field",
      doiKey: "publications.4.doi",
      abstractKey: "publications.4.abstract",
    },
    {
      id: 5,
      titleKey: "publications.5.title",
      authorsKey: "publications.5.authors",
      journalKey: "publications.5.journal",
      year: 2024,
      typeKey: "publications.5.type",
      fieldKey: "publications.5.field",
      doiKey: "publications.5.doi",
      abstractKey: "publications.5.abstract",
    },
  ]

  const filteredPublications = publications.filter((pub) => {
    return (
      (yearFilter === "all" || pub.year.toString() === yearFilter) &&
      (typeFilter === "all" || t(pub.typeKey) === typeFilter) &&
      (fieldFilter === "all" || t(pub.fieldKey) === fieldFilter)
    )
  })

  return (
    <section id="publications" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("publications.title")}</h2>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.year")}
          </label>
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.type")}
          </label>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="journal">{t("publications.journal.label")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.field")}
          </label>
          <Select value={fieldFilter} onValueChange={setFieldFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Fields" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="labor-economics">{t("publications.field.labor-economics")}</SelectItem>
              <SelectItem value="political-science">{t("publications.field.political-science")}</SelectItem>
              <SelectItem value="agricultural-economics">{t("publications.field.agricultural-economics")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPublications.map((pub) => (
          <Card key={pub.id} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-[#2C3E50] dark:text-white">
                    {t(pub.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D] dark:text-gray-400 mt-1">{t(pub.authorsKey)}</CardDescription>
                </div>
                <Badge className="bg-[#E67E22] text-white hover:bg-[#D35400]">{pub.year}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#34495E] dark:text-gray-300 mb-4">
                {t(pub.abstractKey)}
              </p>
              <div className="text-sm text-[#7F8C8D] dark:text-gray-400">
                {pub.typeKey === "journal" && (
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Journal:</span>
                    <span>{t(pub.journalKey)}</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                  {t(pub.typeKey)}
                </Badge>
                <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                  {t(pub.fieldKey)}
                </Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
