import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Amazon Web Services (AWS)", progress: 80, className: "aws-progress", years: 1 },
    { name: "Postman", progress: 90, className: "postman-progress", years: 2 },
    { name: "Jupyter Notebook", progress: 100, className: "pbi-progress", years: 3 },
    { name: "Visual Studio Code", progress: 100, className: "docker-progress", years: 3 },
    { name: "Git", progress: 90, className: "github-progress", years: 2 },
    { name: "MongoDB", progress: 80, className: "azure-progress", years: 1 },
    { name: "Qdrant Vector Database", progress: 80, className: "aws-progress", years: 1 },
    { name: "Docker", progress: 80, className: "docker-progress", years: 1 },
    { name: "Oracle SQL developer", progress: 100, className: "pbi-progress", years: 2 },
    { name: "Firebase", progress: 100, className: "postman-progress", years: 1 },
    { name: "Oracle Virtual Box", progress: 100, className: "github-progress", years: 1 },
    { name: "Linux Ubuntu", progress: 100, className: "pbi-progress", years: 2 },
    { name: "Overleaf Latex", progress: 100, className: "docker-progress", years: 3 },
    { name: "Microsoft 365", progress: 100, className: "github-progress", years: 3 },
    { name: "Canva", progress: 100, className: "azure-progress", years: 3 },
    { name: "Figma", progress: 100, className: "docker-progress", years: 3 },
    { name: "Framer", progress: 80, className: "aws-progress", years: 3 },
    { name: "Streamlit", progress: 90, className: "pbi-progress", years: 2 },

  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} year`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
