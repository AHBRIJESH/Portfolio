import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import Animated from "./Animated";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Python Trainee Software Engineer",
      company: "WORKTUAL",
      period: "February 2026 – Present",
      description: [
        "Validated and curated datasets used in LLM workflows, improving data quality and consistency for model development.",
        "Developed AI agents and MCP-based integrations to connect multiple services and enable automated workflows.",
        "Investigated methods to improve LLM efficiency and behavior control, including layer sensitivity analysis."
      ],
    },
    {
      title: "AI INTERN",
      company: "IPCS GLOBAL SOLUTIONS Pvt. Ltd.",
      period: "February 2026 – Present",
      description: [
        "Validated and curated datasets used in LLM workflows, improving data quality and consistency for model development.",
        "Developed AI agents and MCP-based integrations to connect multiple services and enable automated workflows.",
        "Investigated methods to improve LLM efficiency and behavior control, including layer sensitivity analysis."
      ],
    },
    {
      title: "BUSINESS ANALYST INTERN",
      company: "AAMIN DATA SOLUTIONS",
      period: "MAY 2025 – NOVEMBER 2025",
      description: [
        "Designed and maintained 10+ KNIME workflows to identify data outliers.",
        "Developed intuitive KNIME-based GUIs to streamline audit navigation.",
        "Explored AI techniques to enhance exception detection.",
        "Generated audit insights and automated reports to reduce manual workload.",
      ],
    },
    {
      title: "SAP ABAP INTERN",
      company: "FORD MOTOR COMPANY",
      period: "JUNE 2024 – AUGUST 2024",
      description: [
        "Supported large-scale SAP ERP data migration using ABAP OOP, BDC, LSMW, LTMC, and BAPI tools.",
        "Optimized ABAP programs and RICEF developments, improving migration efficiency by 20%.",
        "Ensured high data accuracy and consistency across migrated datasets."
      ],
    },
    {
      title: "JOB SIMULATIONS",
      description: [
        "J.P. Morgan: Software Engineering",
        "Cognizant: Artificial Intelligence",
        "Accenture: Data Analytics",
        "British Airways: Data Science",
        "Tata Group: Data Visualization",
      ],
      company:
        "Completed virtual job simulations in various industry-led scenarios, applying Python, Deep Learning, NLP, Computer Vision, and Data Visualization to solve real-world challenges.",
      period: "",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <Animated direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Professional Experience
            </h2>
            <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6">
              Internships and professional projects that have shaped my skills
            </p>
          </div>
        </Animated>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <Animated
              key={index}
              direction="up"
              delay={150 + index * 200}
              duration={600}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-navy-100 transition-transform duration-300 hover:transform hover:scale-[1.01]">
                <div className="p-6 md:p-8">
                  <Animated direction="left" delay={200}>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-navy-600 mt-2">{exp.company}</p>
                        )}
                      </div>
                      {exp.period && (
                        <div className="mt-2 md:mt-0 flex items-center bg-navy-50 px-4 py-2 rounded-full">
                          <Calendar className="h-4 w-4 text-navy-700 mr-2" />
                          <p className="text-navy-700 font-medium">
                            {exp.period}
                          </p>
                        </div>
                      )}
                    </div>
                  </Animated>

                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <Animated
                        key={i}
                        direction="right"
                        delay={300 + i * 100}
                        duration={500}
                      >
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-navy-800">{item}</p>
                        </div>
                      </Animated>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
