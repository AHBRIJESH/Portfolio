import React from "react";
import {
  Smile,
  MessageSquare,
  Layers,
  LucideBriefcaseBusiness,
  Search,
  NotebookPen,
  HandIcon,
  School2,
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

const ProjectCard = ({ project }: { project: any }) => (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:no-underline h-full"
  >
    <Card
      className="
        h-full w-full max-w-[360px] mx-auto
        flex flex-col justify-between
        border border-navy-100
        bg-white
        shadow-md sm:shadow-lg
        hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2
        transition-all duration-300 ease-out
        rounded-xl
      "
    >
      <CardHeader className="pb-2 space-y-3 sm:space-y-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl p-2 flex items-center justify-center">
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
          {project.skills.map((skill: string, i: number) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-navy-50 text-navy-700 border-navy-200 font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </a>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Audit RAG System",
      description:
        "RAG system to answer audit-related queries using official audit manuals",
      icon: <Search className="h-8 w-8 text-navy-600" />,
      skills: ["Langchain", "Ollama", "FAISS"],
      github: "https://github.com/AHBRIJESH/RAG_for_Audit.git",
    },
    {
      title: "Suicide Prevention Chatbot",
      description:
        "AI chatbot that detects distress in conversations using Seq2Seq NLP and offers empathetic support.",
      icon: <MessageSquare className="h-8 w-8 text-navy-600" />,
      skills: ["NLP", "Seq2Seq", "TensorFlow"],
      github: "https://github.com/AHBRIJESH/Sucide_Mitigation_Chatbot.git",
    },
    {
      title: "Handwriting Style Converter",
      description:
        "CNN-based model to classify handwritten digits with high accuracy.",
      icon: <HandIcon className="h-8 w-8 text-navy-600" />,
      skills: ["GAN", "Computer Vision", "Tensorflow"],
      github: "https://github.com/AHBRIJESH/Handwritten-Digit-Predection.git",
    },
    {
      title: "Face Recognition System",
      description:
        "Real-time attendance system using CNN-based face recognition and a MySQL database.",
      icon: <Layers className="h-8 w-8 text-navy-600" />,
      skills: ["CNN", "Flask", "MySQL", "TensorFlow"],
      github:
        "https://github.com/AHBRIJESH/Face_Recognition_Auto_Attendance_System.git",
    },
    {
      title: "Academic Grade Predictor",
      description:
        "ML model that predicts student scores >90% from study habits, sleep, and handwriting.",
      icon: <School2 className="h-8 w-8 text-navy-600" />,
      skills: ["Machine Learning", "Data Analysis", "Scikit-learn"],
      github: "https://github.com/AHBRIJESH/Academic_Grade_Predictor.git",
    },
    {
      title: "Emotion Predictor Model",
      description:
        "RNN-based NLP model to predict emotional tone from text inputs.",
      icon: <Smile className="h-8 w-8 text-navy-600" />,
      skills: ["NLP", "RNN", "TensorFlow", "Keras"],
      github: "https://github.com/AHBRIJESH/Sentence_Emotion_Predictor.git",
    },
    {
      title: "Audit Starter Pack",
      description:
        "10 KNIME workflows developed to streamline audit operations and enhance reporting efficiency.",
      icon: <NotebookPen className="h-8 w-8 text-navy-600" />,
      skills: ["KNIME", "EDA", "Dynamic Reporting"],
      github:
        "https://hub.knime.com/a_h_brijesh/spaces/Public/Audit%20workflows%20with%20Email~fjpOCyM6rLf1UT5O/",
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

  const remainder = projects.length % 3;
  const normalProjects = remainder === 2 ? projects.slice(0, -2) : projects;
  const lastTwo = remainder === 2 ? projects.slice(-2) : [];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-navy-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Animated>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6 text-lg">
              Showcasing my work and technical accomplishments
            </p>
          </div>
        </Animated>

        {/* ✅ Normal projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {normalProjects.map((project, index) => (
            <Animated key={index} delay={150 + index * 150} direction="up">
              <ProjectCard project={project} />
            </Animated>
          ))}
        </div>

        {/* 📱 Mobile / Tablet → last two normal */}
        {lastTwo.length === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:hidden">
            {lastTwo.map((project, index) => (
              <Animated key={index} delay={150 + index * 150} direction="up">
                <ProjectCard project={project} />
              </Animated>
            ))}
          </div>
        )}

        {/* 💻 Desktop → last two centered */}
        {lastTwo.length === 2 && (
          <div className="hidden lg:flex justify-center gap-8 mt-10">
            {lastTwo.map((project, index) => (
              <Animated key={index} delay={150 + index * 150} direction="up">
                <ProjectCard project={project} />
              </Animated>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
