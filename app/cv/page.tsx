import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function CVPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2C3E50]">{t("cv.title")}</h1>
          <div className="flex space-x-2">
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">
              <Download className="h-4 w-4 mr-2" />
              <a href="/Academic-websites/Wenru Mo_CV-2025-07-13.docx" download>
                {t("cv.download.zh")}
              </a>
            </Button>
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white">
              <Download className="h-4 w-4 mr-2" />
              <a href="/Academic-websites/Wenru Mo_CV-2025-07-13.docx" download>
                {t("cv.download.en")}
              </a>
            </Button>
          </div>
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
                    <h3 className="font-medium text-[#34495E]">2021.09-2022.12 University of Birmingham Master of Arts (Merit) England, United Kingdom</h3>
                    <p className="text-[#7F8C8D]">MA International Political Economy, Social Science | GPA:63%</p>
                    <p className="text-[#34495E] mt-1">Relevant Modules: International Political Economy, Globalisation &amp; Governance, Global Environmental Governance, Doing Political Research</p>
                    <p className="text-[#34495E] mt-1">Course Paper: Does the Increase in Female Workers In The Textile Industry Lead To Empowerment Or Exploitation: A Literature Review; Is Globalization Good for Women; The Contributions of Environmental NGOs and Business Actors in Global Environmental Governance; etc.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">2019.09-2020.09 University of Huddersfield Bachelor of Arts (Upper Second Class) England, United Kingdom</h3>
                    <p className="text-[#7F8C8D]">BA International Business, Business School | GPA:68%</p>
                    <p className="text-[#34495E] mt-1">Relevant Courses: International Business, Strategic Management, Cross-Cultural Studies, Environmental Policy, Business Responsibility and Sustainability, The Psychology of Work &amp; Organisations</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">2016.09-2020.06 Guangzhou Huashang College Bachelor of Management Guangdong, China</h3>
                    <p className="text-[#7F8C8D]">BBM International Business, School of Economics and Finance</p>
                    <p className="text-[#34495E] mt-1">Relevant Courses: Econometrics, International Finance, Global Marketing Management, International Trade in Technology and Services</p>
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
                    <h3 className="font-medium text-[#34495E]">2024.07-Present Zhanjiang University of Science and Technology Zhanjiang, China</h3>
                    <p className="text-[#7F8C8D]">Current Qualifications:&nbsp;Assistant Professor of International Trade; Higher Education Teacher Certification of International Trade Certified by Guangdong Provincial Department of Education, China</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Work Details: Teach 8+ modules including International Trade, International Economics, Trade Practices, and Cross-border E-commerce; Serve as Researcher at Swine Industry Economics Institute; Participate in research projects on economics curriculum reform in universities; Supervise 10+ undergraduate theses.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">2023.09-2024.06 Guangdong Institute of Arts and Sciences Zhanjiang, China</h3>
                    <p className="text-[#7F8C8D]">Position: Assistant Professor of International Trade</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Work Details: Taught 10+ courses including Management, International Trade, International Economics, and E-commerce Fundamentals; Participated in research projects on e-commerce curriculum reform for rural revitalization; Coached student teams for international business competitions, e.g. Led teams to win first prizes and 8+ prizes at the 4th National Digital Trade Skills Competition (International Trade Track) 2024.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">2020.10-2021.06 Bank of China (BoC) Zhanjiang Branch Zhanjiang, China</h3>
                    <p className="text-[#7F8C8D]">Position: Manager Assistant, Credit Card Department</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Work Details: Performed microeconomic analysis of client portfolios using banking datasets; Contributed to electronic toll collection (ETC) market penetration strategies</li>
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
                    <h3 className="font-medium text-[#34495E]">1. Advised a bachelor&apos;s thesis titled &lsquo;A Study on the Existing Problems of Guangdong&apos;s Mechanical and Electrical Products Export to Japan under the RCEP Framework&rsquo; (CNKI)</h3>
                    <p className="text-[#7F8C8D]">Duration: Sep 2024 &ndash; May 2025</p>
                    <p className="text-[#7F8C8D]">Research Focus: Impact of RCEP on regional trade competitiveness; Empirical analysis of electromechanical exports (market share, comparative advantage); Policy recommendations for industrial upgrading.</p>
                    <p className="text-[#7F8C8D]">Responsibilities as Supervisor: Guided quantitative analysis using&nbsp;MS, TC, and RCA indices&nbsp;to assess competitiveness; Supervised data collection (China Customs, UN Comtrade); Advised on theoretical frameworks (Porter&apos;s Value Chain, Trade Competitiveness Theory).</p>
                    <p className="text-[#7F8C8D]">Key Findings: RCEP boosted Guangdong&apos;s market share (MS index &uarr;5.75%), but technical barriers limited trade competitiveness (TC index remained negative); Exports were dominated by low-value-added products (80% machinery), highlighting a need for innovation and branding; Proposed dual strategies:&nbsp;technology standardization (JIS/PSE)&nbsp;and&nbsp;brand differentiation.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">2. Advised a bachelor&apos;s thesis titled &lsquo;Study on The Problems and Countermeasures of Tea Export in Zhejiang Province&rsquo; (CNKI)</h3>
                    <p className="text-[#7F8C8D]">Duration: Sep2024 &ndash; May2025</p>
                    <p className="text-[#7F8C8D]">Research Focus: Impact of RCEP on regional agricultural trade competitiveness; Empirical analysis of tea export efficiency (market share, value chain); Policy recommendations for overcoming non-tariff barriers</p>
                    <p className="text-[#7F8C8D]">Responsibilities as Supervisor: Guided quantitative analysis using Heckscher-Ohlin (H-O) model and trade indices (RCA/MS); Supervised data collection from Chinese Customs, UN Comtrade, and provincial statistical yearbooks; Advised on comparative advantage theory application to tea export structure optimization.</p>
                    <p className="text-[#7F8C8D]">Key Findings: Zhejiang&apos;s tea exports dominated by low-value-added green tea (96% volume), misaligned with global demand of black tea; RCA index &gt;1.25 confirmed comparative advantage, but MS index declined (5.2B USD in 2015 &rarr; 4.6B USD in 2023); Non-tariff barriers (EU pesticide standards) increased compliance costs by ~30%.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">3. Advised a bachelor&apos;s thesis titled &lsquo;Research on problems and countermeasures in the export trade of electromechanical products in Jiangsu Province&rsquo; (CNKI)</h3>
                    <p className="text-[#7F8C8D]">Duration: Sep2024 &ndash; May2025</p>
                    <p className="text-[#7F8C8D]">Research Focus: Analysis of structural challenges (e.g., low-value-added dominance) and trade barriers in Jiangsu&apos;s electromechanical exports, with proposed strategies for competitiveness enhancement.</p>
                    <p className="text-[#7F8C8D]">Responsibilities as Supervisor: Directed data collection/analysis using Nanjing Customs records (2013-2024) and comparative market studies; Oversaw methodology design (quantitative regression + case studies) and policy recommendation development</p>
                    <p className="text-[#7F8C8D]">Key Findings: High-tech exports reached 46.7% but faced low-profit bottlenecks; Trade barriers (e.g., RoHS) increased compliance costs by 8-12%.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">4. Swine Industry Economics Institute, Zhanjiang University of Science and Technology</h3>
                    <p className="text-[#7F8C8D]">Duration: Sep2024 &ndash; Present</p>
                    <p className="text-[#7F8C8D]">Research Focus: Global pork market dynamics (supply-demand shifts, price volatility); Agricultural commodity market dynamics (wheat, corn, soybean meal); Vertical integration efficiency in swine industry chains; Policy impact analysis on genetic resource conservation &amp; smallholder sustainability</p>
                    <p className="text-[#7F8C8D]">Responsibilities as Researcher:</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Data Collection &amp; Analysis: Collected and validated global production/consumption data from USDA, FAO, and national statistical yearbooks (2019-2025); Conducted monthly price trend analysis for 24 provinces using 10+ indicators (e.g., feed costs, sow inventories)</li>
                      <li>Field Research: Surveyed 15 swine enterprises (e.g., Muyuan, WH Group); Interviewed 120+ smallholders on cost structures.</li>
                      <li>Policy Reporting &amp; Market Analysis: Authored monthly market reports (Guangdong Province Swine Market Report) featuring: Price-volume trend forecasting (feed costs, sow inventories, slaughter volumes), Agricultural commodity market dynamics (corn and soybean), Risk assessment of ASF outbreaks and price volatility, Policy recommendations for smallholder subsidies and breed conservation.</li>
                    </ul>
                    <p className="text-[#7F8C8D]">Outputs: 8 policy reports adopted by Agricultural and Rural Department of Guangdong Province, e.g. Guangdong Province Swine Market Report (2025 Issues 1-5), Guangdong Province Livestock Bulletin (2025 Issues 2-5); 3 publications on swine industry economics.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">5. Barriers to Women&apos;s Gaining a Role in Grassroots Government: The Case of A Questionnaire Survey of Grassroots Civil Servants in China</h3>
                    <p className="text-[#7F8C8D]">Duration: April 2022 &ndash; September 2022</p>
                    <p className="text-[#7F8C8D]">Supervisor: Dr Ash Kayte Stokoe, University of Birmingham</p>
                    <p className="text-[#7F8C8D]">Research Focus: Applied labor economics frameworks to quantify gender disparities in political labor markets; Examined institutional inefficiencies through organizational economics lens; Measured social capital returns using network analysis metrics.</p>
                    <p className="text-[#7F8C8D]">Responsibilities: Designed mixed-methods study incorporating labor economics frameworks to analyze: Employed mixed-methods research, including a non-quantitative questionnaire and qualitative pilot studies; Opportunity costs of political participation using human capital theory; Institutional barriers through gendered organizational economics lens; &quot;Guanxi&quot; networks as social capital with differential gender returns.</p>
                    <p className="text-[#7F8C8D]">Key Findings: Gender norms and inadequate care infrastructure hinder women&apos;s career progression; The patriarchal &apos;guanxi&apos; culture negatively affects the development of female civil servants</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">6. Does the Increase in Female Workers in the Textile Industry Lead to Empowerment or Increased Female Exploitation?</h3>
                    <p className="text-[#7F8C8D]">Duration: December 2021 &ndash; January 2022</p>
                    <p className="text-[#7F8C8D]">Objectives: Examine the impact of increased female participation in the textile industry on empowerment versus exploitation, considering working conditions, wages, career advancement, and societal status</p>
                    <p className="text-[#7F8C8D]">Responsibilities: Conducted literature reviews, analyzed economic participation&apos;s effects on women&rsquo;s autonomy, and synthesized data on female employment in the textile industry in developing countries</p>
                    <p className="text-[#7F8C8D]">Key Findings:</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Women in textile factories gain enhanced social skills and decision-making capacity, but lack of labor law knowledge hinders resistance to exploitation</li>
                      <li>The textile industry offers empowerment but requires attention to eliminate exploitation for sustainability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">7. The Drivers of Conservative Party Support in the 2019 General Election</h3>
                    <p className="text-[#7F8C8D]">Duration: April 2022&ndash; May 2022</p>
                    <p className="text-[#7F8C8D]">Objectives: Analyze factors influencing Conservative Party support in the 2019 UK General Election</p>
                    <p className="text-[#7F8C8D]">Responsibilities:</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Formulated hypotheses on Brexit sentiment, homeownership, and retirement demographics</li>
                      <li>Conducted statistical analyses and evaluated the regression model&apos;s fit and coefficient significance</li>
                    </ul>
                    <p className="text-[#7F8C8D]">Key Findings: Pro-Brexit citizens, homeowners, and older individuals are more likely to support the Conservatives</p>
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
                    <h3 className="font-medium text-[#34495E]">Mo, W. (2023). Does the Increase in Female Workers in the Textile Industry Lead to Empowerment or Increased Female Exploitation? Journal of Theory and Practice of Social Science, 2790-1513.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">Mo, W. (2024). Barriers to Women&apos;s Gaining a Role in Grassroots Government: The Case of a Questionnaire Survey of Grassroots Civil Servants in China. Studies in Social Science &amp; Humanities, 2709-7862.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">Zhang, H., Mo, W., Liang, J., et al. (2024). Conservation of Indigenous Pig Breeds and Cooperative Development with Small-scale Farmers in Guangdong.&nbsp;Swine Industry, 4, 15-18.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">Zhang, H., Liu, S.,&nbsp;Mo, W., &amp; Liu, W. (2024). Current status and trends in the pork consumption market.&nbsp;Swine Industry, 4, 25-30.</h3>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">Liu, L., Feng, X., Mo, W., &amp; Zhang, H. (2024). Reflections on the construction of a full-industry-chain pig farming conglomerate. Swine Industry, 4, 31-35.</h3>
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
                    <p className="text-[#7F8C8D]">English (Fluent), Mandarin (Native), Cantonese (Native)</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">{t("cv.technical_skills")}</h3>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>Data Analysis: Excel (Financial modeling; automated reporting; complex data visualization)</li>
                      <li>Statistical Modeling: SPSS (e.g. Multivariate regression; hypothesis testing; survey analysis), EViews (Econometric forecasting; market analysis)</li>
                      <li>Executive Presentations: PowerPoint (Lecture design; academic conference presentations; animated economic models e.g. supply-demand curves)</li>
                      <li>Research Platforms: Qualtrics (Survey design; experimental studies), SurveyMonkey (Market research; data collection), Python(Questionnaire data processing)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#7F8C8D]">
            {t("cv.complete")}
            <Link href="#contact" className="text-[#E67E22] hover:underline">
              {t("cv.contact")}
            </Link>
            。
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
