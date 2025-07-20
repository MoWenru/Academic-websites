"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { FileText, Users, Award } from "lucide-react"

export default function TeachingSection() {
  const { t, language } = useLanguage()

  const courses = [
    {
      id: 1,
      codeZh: "MG401",
      codeEn: "MG401",
      nameZh: "管理学",
      nameEn: "Management",
      semesterZh: "2024秋季",
      semesterEn: "Fall 2024",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程涵盖管理学的基本原理和方法，包括计划、组织、领导和控制等管理职能，培养学生的管理思维和实践能力。",
      descriptionEn:
        "This course covers the basic principles and methods of management, including planning, organizing, leading, and controlling functions, developing students' management thinking and practical skills.",
      students: 45,
      rating: 4.8,
    },
    {
      id: 2,
      codeZh: "EC402",
      codeEn: "EC402",
      nameZh: "电子商务",
      nameEn: "E-commerce",
      semesterZh: "2024秋季",
      semesterEn: "Fall 2024",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程介绍电子商务的基本概念、商业模式、技术架构和法律法规，探讨数字化时代的商业创新。",
      descriptionEn:
        "This course introduces the basic concepts, business models, technical architecture, and legal regulations of e-commerce, exploring business innovation in the digital age.",
      students: 38,
      rating: 4.7,
    },
    {
      id: 3,
      codeZh: "IT403",
      codeEn: "IT403",
      nameZh: "国际贸易实务",
      nameEn: "International Trade Practice",
      semesterZh: "2024春季",
      semesterEn: "Spring 2024",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程专注于国际贸易的实际操作，包括贸易合同、信用证、运输保险、报关报检等实务技能。",
      descriptionEn:
        "This course focuses on the practical operations of international trade, including trade contracts, letters of credit, transportation insurance, customs clearance, and inspection procedures.",
      students: 42,
      rating: 4.6,
    },
    {
      id: 4,
      codeZh: "TD404",
      codeEn: "TD404",
      nameZh: "外贸单证实务",
      nameEn: "Foreign Trade Documentation Practice",
      semesterZh: "2024春季",
      semesterEn: "Spring 2024",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程教授外贸单证的制作、审核和管理，包括商业发票、装箱单、提单、保险单等核心单证。",
      descriptionEn:
        "This course teaches the preparation, review, and management of foreign trade documents, including commercial invoices, packing lists, bills of lading, and insurance policies.",
      students: 35,
      rating: 4.9,
    },
    {
      id: 5,
      codeZh: "IL405",
      codeEn: "IL405",
      nameZh: "国际商法",
      nameEn: "International Business Law",
      semesterZh: "2023秋季",
      semesterEn: "Fall 2023",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程介绍国际商法的基本理论和实践应用，包括国际货物买卖法、国际商事仲裁等法律制度。",
      descriptionEn:
        "This course introduces the basic theories and practical applications of international business law, including international sales law and international commercial arbitration.",
      students: 40,
      rating: 4.5,
    },
    {
      id: 6,
      codeZh: "EM406",
      codeEn: "EM406",
      nameZh: "会展策划与管理",
      nameEn: "Exhibition Planning and Management",
      semesterZh: "2023秋季",
      semesterEn: "Fall 2023",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程教授会展活动的策划、组织、实施和管理，培养学生的会展策划能力和项目管理技能。",
      descriptionEn:
        "This course teaches the planning, organization, implementation, and management of exhibition events, developing students' exhibition planning and project management skills.",
      students: 32,
      rating: 4.4,
    },
    {
      id: 7,
      codeZh: "IT407",
      codeEn: "IT407",
      nameZh: "国际经济与贸易专业导论",
      nameEn: "Introduction to International Economics and Trade",
      semesterZh: "2023春季",
      semesterEn: "Spring 2023",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程为国际经济与贸易专业的入门课程，介绍专业概况、发展前景和核心知识体系。",
      descriptionEn:
        "This is an introductory course for the International Economics and Trade major, covering professional overview, development prospects, and core knowledge systems.",
      students: 48,
      rating: 4.6,
    },
    {
      id: 8,
      codeZh: "IT408",
      codeEn: "IT408",
      nameZh: "国际贸易学",
      nameEn: "International Trade Theory",
      semesterZh: "2023春季",
      semesterEn: "Spring 2023",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程系统介绍国际贸易的基本理论，包括比较优势理论、要素禀赋理论、新贸易理论等。",
      descriptionEn:
        "This course systematically introduces the basic theories of international trade, including comparative advantage theory, factor endowment theory, and new trade theory.",
      students: 45,
      rating: 4.7,
    },
    {
      id: 9,
      codeZh: "BC409",
      codeEn: "BC409",
      nameZh: "外贸函电",
      nameEn: "Foreign Trade Correspondence",
      semesterZh: "2022秋季",
      semesterEn: "Fall 2022",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程教授外贸业务中的英文函电写作技巧，包括询盘、报盘、还盘、订单等商业信函。",
      descriptionEn:
        "This course teaches English correspondence writing skills in foreign trade business, including inquiries, offers, counter-offers, and orders.",
      students: 36,
      rating: 4.3,
    },
    {
      id: 10,
      codeZh: "CE410",
      codeEn: "CE410",
      nameZh: "跨境电商英语",
      nameEn: "Cross-border E-commerce English",
      semesterZh: "2022秋季",
      semesterEn: "Fall 2022",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程专注于跨境电商领域的专业英语，包括平台运营、客户服务、营销推广等英语应用。",
      descriptionEn:
        "This course focuses on professional English in cross-border e-commerce, including platform operations, customer service, and marketing promotion.",
      students: 30,
      rating: 4.2,
    },
    {
      id: 11,
      codeZh: "IE411",
      codeEn: "IE411",
      nameZh: "国际经济学",
      nameEn: "International Economics",
      semesterZh: "2022春季",
      semesterEn: "Spring 2022",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程深入探讨国际经济学的核心概念，包括国际贸易理论、国际金融、汇率制度和全球经济治理。",
      descriptionEn:
        "This course delves into the core concepts of international economics, including international trade theory, international finance, exchange rate systems, and global economic governance.",
      students: 42,
      rating: 4.8,
    },
  ]

  const achievements = [
    {
      id: 1,
      titleZh: "全国数字贸易技能竞赛一等奖",
      titleEn: "First Prize in National Digital Trade Skills Competition",
      year: "2024",
      descriptionZh: "带领团队在第四届全国数字贸易技能竞赛（国际贸易赛道）中获得一等奖和8+个奖项",
      descriptionEn: "Led teams to win first prizes and 8+ prizes at the 4th National Digital Trade Skills Competition (International Trade Track) 2024",
      icon: Award,
    },
    {
      id: 2,
      titleZh: "农村振兴电商课程改革",
      titleEn: "E-commerce Curriculum Reform for Rural Revitalization",
      year: "2023-2024",
      descriptionZh: "参与农村振兴电商课程改革研究项目，推动地方经济发展",
      descriptionEn: "Participated in research projects on e-commerce curriculum reform for rural revitalization",
      icon: FileText,
    },
    {
      id: 3,
      titleZh: "广东省教育厅认证",
      titleEn: "Guangdong Provincial Department of Education Certification",
      year: "2024",
      descriptionZh: "获得广东省教育厅认证的国际贸易高等教育教师资格",
      descriptionEn: "Obtained Higher Education Teacher Certification of International Trade Certified by Guangdong Provincial Department of Education, China",
      icon: Award,
    },
  ]

  return (
    <section id="teaching" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("teaching.title")}</h2>

      <Tabs defaultValue="courses">
        <TabsList className="mb-8">
          <TabsTrigger value="courses">{t("teaching.courses")}</TabsTrigger>
          <TabsTrigger value="achievements">{language === "zh" ? "教学成就" : "Teaching Achievements"}</TabsTrigger>
          <TabsTrigger value="students">{t("teaching.students")}</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-[#2C3E50] dark:text-white">
                        {language === "zh" ? course.nameZh : course.nameEn}
                      </CardTitle>
                      <CardDescription className="text-[#7F8C8D] dark:text-gray-400 mt-1">
                        {course.codeEn} | {language === "zh" ? course.levelZh : course.levelEn}
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#E67E22] text-white hover:bg-[#D35400]">
                      {language === "zh" ? course.semesterZh : course.semesterEn}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E] dark:text-gray-300 mb-4">
                    {language === "zh" ? course.descriptionZh : course.descriptionEn}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-[#7F8C8D] dark:text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>
                        {course.students} {language === "zh" ? "学生" : "Students"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">{language === "zh" ? "评分:" : "Rating:"}</span>
                      <div className="flex items-center ml-1">
                        <span>{course.rating}/5.0</span>
                        <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-2">
                          <div
                            className="h-full bg-[#E67E22] rounded-full"
                            style={{ width: `${(course.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <achievement.icon className="h-6 w-6 text-[#E67E22]" />
                    <CardTitle className="text-[#2C3E50] dark:text-white text-lg">
                      {language === "zh" ? achievement.titleZh : achievement.titleEn}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#7F8C8D] dark:text-gray-400">
                    {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E] dark:text-gray-300">
                    {language === "zh" ? achievement.descriptionZh : achievement.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "教学统计" : "Teaching Statistics"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? "教授课程数量" : "Courses Taught"}
                    </span>
                    <span className="font-bold text-[#E67E22]">11</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? "指导论文数量" : "Theses Supervised"}
                    </span>
                    <span className="font-bold text-[#E67E22]">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? "学生总数" : "Total Students"}
                    </span>
                    <span className="font-bold text-[#E67E22]">433</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? "平均评分" : "Average Rating"}
                    </span>
                    <span className="font-bold text-[#E67E22]">4.7/5.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "指导论文学生" : "Thesis Supervised Students"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? t("teaching.student.1.name") : t("teaching.student.1.name.en")}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "本科生 (2024-2025)" : "Undergraduate (2024-2025)"}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "论文题目：RCEP框架下广东省机电产品对日出口现状研究" : "Thesis: A Study on the Existing Problems of Guangdong's Mechanical and Electrical Products Export to Japan under the RCEP Framework"}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? t("teaching.student.2.name") : t("teaching.student.2.name.en")}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "本科生 (2024-2025)" : "Undergraduate (2024-2025)"}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "论文题目：浙江省茶叶出口问题与对策研究" : "Thesis: Study on The Problems and Countermeasures of Tea Export in Zhejiang Province"}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? t("teaching.student.3.name") : t("teaching.student.3.name.en")}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "本科生 (2024-2025)" : "Undergraduate (2024-2025)"}
                    </p>
                    <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                      {language === "zh" ? "论文题目：江苏省机电产品出口贸易问题与对策研究" : "Thesis: Research on problems and countermeasures in the export trade of electromechanical products in Jiangsu Province"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "学生评价" : "Student Feedback"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "教学质量" : "Teaching Quality"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "94%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.7/5</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "课程内容" : "Course Content"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.6/5</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "互动性" : "Interaction"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "96%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.8/5</p>
                    </div>

                    <div className="flex items-center">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "实用性" : "Practicality"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.5/5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}

