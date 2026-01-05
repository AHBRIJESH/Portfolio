import { useEffect } from "react";
import Animated from "./Animated";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const badges = [
  {
    id: "b1597196-db6d-4193-8434-c22f5fceb3bd",
  },
  {
    id: "73c2a918-a482-4409-a410-112884752d13",
  },
  {
    id: "842fbd20-8f67-4d09-a375-9591baa7fc06",
  },
];

const CredlyBadges = () => {
  useEffect(() => {
    if (!document.getElementById("credly-script")) {
      const script = document.createElement("script");
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.id = "credly-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-white to-navy-50"
    >
      <div className="container mx-auto px-4">
        <Animated>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Certifications
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6 text-lg">
              Industry-recognized credentials validating my AI & ML expertise
            </p>
          </div>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <Animated key={badge.id} delay={150 + index * 150} direction="up">
              <Card
                className="
                  h-full flex flex-col items-center
                  border border-navy-100
                  bg-white/60 backdrop-blur-sm
                  shadow-xl
                  hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-300 ease-out
                  rounded-xl
                "
              >
                <CardHeader className="pb-2 text-center"></CardHeader>
                <CardContent className="flex justify-center pt-2 pb-6">
                  <div className="scale-[1.25] origin-top">
                    <div
                      data-iframe-width="230"
                      data-iframe-height="320"
                      data-share-badge-id={badge.id}
                      data-share-badge-host="https://www.credly.com"
                    />
                  </div>
                </CardContent>
              </Card>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredlyBadges;
