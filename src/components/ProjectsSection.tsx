import React from "react";
import {
  Code,
  Brain,
  Smile,
  MessageSquare,
  Layers,
  BriefcaseBusinessIcon,
  Briefcase,
  BriefcaseConveyorBelt,
  LucideBriefcaseBusiness,
  Workflow,
  WorkflowIcon,
  LucideWorkflow,
  NetworkIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Animated from "./Animated";
import KnimeLogo from "./assets/knime.svg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Emotion Predictor Model",
      description:
        "RNN-based NLP model to predict emotional tone from text inputs.",
      icon: <Smile className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "RNN", "TensorFlow", "Keras"],
      github: "https://github.com/AHBRIJESH/Sentence_Emotion_Predictor.git",
    },
    {
      title: "Audit Starter Pack",
      description:
        "10 KNIME workflows developed to streamline audit operations and enhance reporting efficiency.",
      icon: <NetworkIcon className="h-8 w-8 text-navy-600" />,
      skills: ["KNIME", "EDA", "KNIME Hub", "Dynamic Reporting"],
      github:
        "https://hub.knime.com/a_h_brijesh/spaces/Public/Audit%20workflows%20with%20Email~fjpOCyM6rLf1UT5O/",
    },
    {
      title: "Handwriting Style Converter",
      description:
        "CNN-based model to classify handwritten digits with high accuracy.",
      icon: <Code className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "GAN", "Computer Vision", "PyTorch"],
      github: "https://github.com/AHBRIJESH/Handwritten-Digit-Predection.git",
    },
    {
      title: "Face Recognition Auto Attendance System",
      description:
        "Real-time attendance system using CNN-based face recognition and a MySQL database.",
      icon: <Layers className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "CNN", "Flask", "MySQL", "TensorFlow"],
      github:
        "https://github.com/AHBRIJESH/Face_Recognition_Auto_Attendance_System.git",
    },
    {
      title: "Academic Grade Predictor",
      description:
        "ML model that predicts student scores >90% from study habits, sleep, and handwriting.",
      icon: <Brain className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      github: "https://github.com/AHBRIJESH/Academic_Grade_Predictor.git",
    },
    {
      title: "Suicide Prevention Chatbot",
      description:
        "AI chatbot that detects distress in conversations using Seq2Seq NLP and offers empathetic support.",
      icon: <MessageSquare className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "Seq2Seq", "TensorFlow", "Mental Health"],
      github: "https://github.com/AHBRIJESH/Sucide_Mitigation_Chatbot.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      icon: <LucideBriefcaseBusiness className="h-8 w-8 text-navy-600" />,
      skills: ["React", "Javascript", "Netlify", "TailwindCSS"],
      github: "https://github.com/AHBRIJESH/Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-navy-50"
    >
      <div className="container mx-auto px-4">
        <Animated>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6 text-lg">
              Showcasing my work and technical accomplishments
            </p>
          </div>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isLastAndCentered =
              projects.length % 3 === 1 && index === projects.length - 1;

            return (
              <div
                key={index}
                className={isLastAndCentered ? "lg:col-start-2" : ""}
              >
                <Animated delay={150 + index * 150} direction="up">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:no-underline h-full"
                  >
                    <Card className="h-full flex flex-col justify-between border border-navy-100 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                      <CardHeader className="pb-2 space-y-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl p-2 flex items-center justify-center">
                          {project.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-navy-900">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex flex-col flex-grow space-y-4">
                        <CardDescription className="text-navy-700 text-sm leading-relaxed flex-grow">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-navy-50/50 text-navy-700 border-navy-200 backdrop-blur-sm font-medium"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Animated>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
