import React from "react";
import Animated from "./Animated";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex flex-col justify-center bg-gradient-to-b from-white to-navy-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Animated direction="left">
              <div className="flex items-center mb-4 flex-row">
                <div className="mr-4 flex justify-center sm:justify-start sm:items-center -mt-6">
                  <Avatar className="h-28 w-28 rounded-full overflow-hidden border-4 border-blue-300">
                    <AvatarImage
                      src="uploads\3beb2243-0086-46e4-9136-a01b49030d8d.jpg"
                      style={{
                        width: "130%",
                        height: "130%",
                        objectFit: "fill",
                        transform: "translateX(00px) translateY(-6px)",
                      }}
                    />
                  </Avatar>
                </div>
                <div>
                  <h1 className="text-4xl md:text-2xl lg:text-6xl font-bold text-navy-900 mb-4">
                    A H BRIJESH
                  </h1>
                  <h2 className="text-xl md:text-1xl font-medium text-navy-500 mb-6">
                    AI Engineer • Software Developer • Automation Enthusiast
                  </h2>
                </div>
              </div>
            </Animated>

            <Animated delay={150} direction="up">
              <p className="text-lg text-navy-800 mb-8 max-w-2xl">
                KNIME L3 Certified engineering graduate with a solid foundation
                in AI, automation, and data-driven development. I build
                efficient solutions using modern machine learning and software
                engineering practices.
              </p>
            </Animated>

            <Animated delay={300} direction="up">
              <div className="flex flex-wrap gap-4">
                <Button className="bg-navy-700 hover:bg-navy-800 text-white flex items-center gap-2">
                  <a
                    href="/uploads/Brijesh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    View Resume
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="border-navy-600 text-navy-700 hover:bg-navy-100"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </Animated>

            <Animated delay={450} direction="down">
              <div className="mt-16 hidden md:block">
                <a
                  href="#education"
                  className="flex items-center justify-center w-10 h-10 mx-auto rounded-full border border-navy-300 text-navy-600 hover:bg-navy-100 transition-colors duration-300"
                  aria-label="Scroll down"
                >
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </Animated>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Animated delay={600} direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-300 to-navy-500 transform rotate-3 scale-105 opacity-30 blur-sm"></div>
                <div className="rounded-2xl bg-white p-6 shadow-lg relative overflow-hidden border border-navy-100">
                  <div className="flex flex-col space-y-4">
                    {[
                      {
                        icon: <MapPin className="h-5 w-5 text-navy-700" />,
                        text: "Kanyakumari, Tamil Nadu, India, 629151",
                      },
                      {
                        icon: <Mail className="h-5 w-5 text-navy-700" />,
                        text: (
                          <a
                            href="mailto:ahbrijesh2004@gmail.com"
                            className="text-navy-800 hover:text-navy-600"
                          >
                            ahbrijesh2004@gmail.com
                          </a>
                        ),
                      },
                      {
                        icon: <Phone className="h-5 w-5 text-navy-700" />,
                        text: "+91 6384665931",
                      },
                      {
                        icon: (
                          <GraduationCap className="h-5 w-5 text-navy-700" />
                        ),
                        text: "B.E. CSE, Rajiv Gandhi College of Engineering",
                      },
                      {
                        icon: <Award className="h-5 w-5 text-navy-700" />,
                        text: "8.2 CGPA at the end of Course",
                      },
                    ].map((item, idx) => (
                      <Animated
                        key={idx}
                        delay={600 + idx * 100}
                        direction="right"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-navy-100 p-3 rounded-full">
                            {item.icon}
                          </div>
                          <span className="text-navy-800">{item.text}</span>
                        </div>
                      </Animated>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
