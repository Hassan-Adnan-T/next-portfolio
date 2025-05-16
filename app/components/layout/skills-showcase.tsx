"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Skill categories
const categories = [
  { id: "languages", name: "Programming Languages" },
  { id: "frameworks", name: "Frameworks & Libraries" },
  { id: "databases", name: "Databases" },
  { id: "cloud", name: "Cloud Services" },
  { id: "design", name: "Design Tools" },
  { id: "testing", name: "Testing & Development Tools"}
];

// Skills data with logos
const skills = [
  {
    name: "HTML",
    logo: "https://cdn.simpleicons.org/html5",
    category: "languages",
  },
  {
    name: "CSS",
    logo: "https://cdn.simpleicons.org/css3",
    category: "languages",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript",
    category: "languages",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
    category: "languages",
  },
  {
    name: "Java",
    logo: "/skills/java.png",
    category: "languages",
  },
  {
    name: "C++",
    logo: "https://cdn.simpleicons.org/cplusplus",
    category: "languages",
  },
  {
    name: "C#",
    logo: "/skills/csharp.png",
    category: "languages",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
    category: "frameworks",
  },
  {
    name: "Angular",
    logo: "https://cdn.simpleicons.org/angular",
    category: "frameworks",
  },
  {
    name: "MySQL",
    logo: "https://cdn.simpleicons.org/mysql",
    category: "databases",
  },
  {
    name: "AWS",
    logo: "/skills/aws.png",
    category: "cloud",
  },
  {
    name: "Adobe Photoshop",
    logo: "/skills/ps.png",
    category: "design",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "/skills/pr.png",
    category: "design",
  },
  {
    name: "Adobe Illustrator",
    logo: "/skills/ai.png",
    category: "design",
  },
  {
    name: "Figma",
    logo: "https://cdn.simpleicons.org/figma",
    category: "design",
  },
  {
    name: "Next.Js",
    logo: "https://cdn.simpleicons.org/nextdotjs",
    category: "frameworks"
  },
  {
    name: ".NET",
    logo: "https://cdn.simpleicons.org/dotnet",
    category: "frameworks"
  },
  {
    name: "Canva",
    logo: "https://cdn.simpleicons.org/canva",
    category: "design"
  },
  {
    name: "Typescript",
    logo: "https://cdn.simpleicons.org/typescript",
    category: "languages"
  },
  {
    name: "Postman",
    logo: "https://cdn.simpleicons.org/postman",
    category: "testing"
  },
  {
    name: "Playwright",
    logo: "/skills/playwright.png",
    category: "testing"
  },
  {
    name: "Cypress",
    logo: "https://cdn.simpleicons.org/cypress",
    category: "testing"
  },
];

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-black text-center mb-12 font-barlow">MY SKILLS</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
