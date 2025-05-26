import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "IBM Qiskit", progress: 85, className: "node-progress", years: 2 },
    { name: "ReactJS", progress: 75, className: "react-progress", years: 1 },
    { name: "NodeJS", progress: 50, className: "node-progress", years: 2 },
    { name: "ExpressJS", progress: 50, className: "nlp-progress", years: 1 },
    { name: "scikit-learn", progress: 80, className: "postgre-progress", years: 2 },
    { name: "PyTorch", progress: 100, className: "springboot-progress", years: 2 },
    { name: "Large Language Models", progress: 70, className: "llm-progress", years: 1 },
    { name: "TensorFlow", progress: 70, className: "vue-progress", years: 1 },
    
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} year`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
