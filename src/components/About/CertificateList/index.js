import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const CertificateList = () => {
  const [devs] = useState([
    {
      name: "Python Data Structures",
      progress: 95,
      className: "pbi-progress",
      years: 5,
      url: "https://www.coursera.org/account/accomplishments/verify/KJM7FA5XTM9P?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      name: "AI Agents Fundamentals",
      progress: 93,
      className: "postman-progress",
      years: 2,
      url: "https://github.com/raya-jahan/AI_Agent_Unit1/blob/main/First_Unit_Certificate.png"
    },
    {
      name: "Applied Machine Learning: Ensemble Learning",
      progress: 90,
      className: "pbi-progress",
      years: 2,
      url: "https://www.linkedin.com/learning/certificates/6e5e47b88b29881c30796751b24db5995727f739a7a01366d28d4edf90670727?u=186162204"
    },
    {
      name: "Programming for Everybody",
      progress: 100,
      className: "docker-progress",
      years: 5,
      url: "https://www.coursera.org/account/accomplishments/verify/MVHF7MH7QWMV?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
    },
    {
      name: "WIA's 5G Readiness: Wireless Broadband Infrastructure",
      progress: 100,
      className: "postman-progress",
      years: 1,
      url: "https://www.linkedin.com/in/raya-jahan-42b793201/details/certifications/1727450295756/single-media-viewer/?profileId=ACoAADONE6MBy1DOrtb51v9xPajn7uEfgSOMJZc"
    },
  ]);

  return (
    <div>
      <h2>Certifications</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} year`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
            <button className="btn" onClick={() => window.open(dev.url, "_blank")}>VIEW</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
