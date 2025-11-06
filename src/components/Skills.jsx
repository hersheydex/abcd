import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "💻" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "🧠" },
    { name: "C", icon: "💾" },
    { name: "AI & Machine Learning", icon: "🤖" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
