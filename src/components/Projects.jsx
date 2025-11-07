import React from "react";
import "./Projects.css";
import project1 from "../assets/project1.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.PNG";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
        <a href="https://github.com/hersheydex/my-projects/blob/main/ZenMood.app.zip" target="_blank" rel="noopener noreferrer">
        <img src={project1} alt="Text Summarization NLP" />
        </a>
          <h3>ZenMood-Mental Health App</h3>
          <p>An AI-powered mental health app for mood tracking and relaxation.</p>
        </div>

        <div className="project-card">
        <a href="https://github.com/hersheydex/my-projects/blob/main/mushroom.ipynb" target="_blank" rel="noopener noreferrer">
        <img src={project2} alt="Text Summarization NLP" />
        </a>
          <h3>Mushroom Edibility Classification using ANN</h3>
          <p>It predicts whether a mushroom is edible or poisonous based on its physical characteristics and features</p>
        </div>

        <div className="project-card">
        <a href="https://github.com/hersheydex/my-projects/blob/main/textsummarisation2.ipynb" target="_blank" rel="noopener noreferrer">
        <img src={project3} alt="Text Summarization NLP" />
        </a>
          <h3>Text Summarization using NLP</h3>
          <p>It automatically condenses large documents into concise and meaningful summaries while preserving key information.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
