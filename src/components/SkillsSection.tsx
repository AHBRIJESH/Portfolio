import React from "react";
import { Database, Code, Terminal, Brain, ChevronRight } from "lucide-react";
import Animated from "./Animated";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-navy-600" />,
      skills: [
        "Python Programming",
        "Java Programming",
        "C Programming",
        "SAP ABAP",
      ],
    },
    {
      title: "Database & Data",
      icon: <Database className="h-8 w-8 text-navy-600" />,
      skills: [
        "MySQL, MongoDB",
        "Data Analytics (NumPy, Pandas, KNIME & ACL)",
        "Data Visualization (Matplotlib & Seaborn)",
        "ETL & EDA",
      ],
    },
    {
      title: "Machine Learning & Deployment",
      icon: <Brain className="h-8 w-8 text-navy-600" />,
      skills: [
        "Machine Learning (Scikit-learn)",
        "Deep Learning (TensorFlow, PyTorch)",
        "LLMs & RAG (LangChain, Ollama)",
        "Vector Databases (FAISS)",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="h-8 w-8 text-navy-600" />,
      skills: ["GitHub", "Jupyter Lab", "VS Code", "Flask"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
          <p className="text-navy-700 mt-6">
            Key skills and technologies I've mastered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Animated
              key={index}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white rounded-lg shadow-md p-6 border border-navy-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-navy-100 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-navy-500 mr-2" />
                      <span className="text-navy-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
