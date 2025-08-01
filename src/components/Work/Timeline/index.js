import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'May - August 2025',
      title: 'Research Assistant Intern, Research Services and Graduate Studies, Youngstown State University',
      description: [
        'Been awarded a competitive Student Grant worth <b>$5000</b> from YSU to do research in <b>Quantum Computing</b> and <b>Quantum Reinforcement Learning</b> under the guidance of Dr. Feng George Yu.',
        'My research paper <b>“Quantum Bootstrap Sampling for faster Approximate Query Processing Error Assessment”</b>, has been accepted for publication at the International Conference on Database and Expert Systems Applications (DEXA) 2025. Implemented circuits using IBM Qiskit and Ohio Supercomputer Jupyter Notebook.',
        'Additionally, conducting research on Quantum reinforcement learning-based controller for bootstrap sampling of large-scale databases.'
        
      ],
      expanded: false,
    },
    {
      date: 'February 2024 - December 2025',
      title: 'Graduate Assistant, STEM Workforce Education & Innovation, Youngstown State University',
      description: [
        'Designed a CRM in <b>Salesforce</b> to track <b>1,400+</b> user interactions for credit and non-credit courses',
        'Achieved certifications in <b>WIA’s 5G Readiness Cellular program</b> and ongoing <b>Cisco Networking</b> course. Trained <b>160+</b> students teaching Networking courses through in-person and online classes offered by <b>Wireless Infrastructure Association</b>, contributing to <b>27</b> students securing jobs during my tenure as an instructor',
        'Collaborated with program managers to organize over <b>3,000</b> student records in YSU’s education platform <b>Blackboard</b> and <b>Excel</b>'
      ],
      expanded: false,
    },
    {
      date: 'October 2022 - December 2023',
      title: 'Software Engineer, Banglalink Digital Communications Ltd',
      description: [
        'Built an <b>AI image generation web app</b> using <b>DALL-E APIs</b> and <b>MERN</b> stack, delivered fully functional solution within one week',
        'Integrated real-time bidirectional <b>chat</b> system using <b>WebSocket (Socket.IO)</b>, following SDLC principles',
        'Developed gaming features and trivia questions for <b>300+</b> MyBL app active users using <b>Framer, Canva, Figma, and REST API</b>',
        'Authored <b>technical documentation</b> for Paywall Plus, an intermediary-integrated payment solution, streamlining payments across Toffee and BL Labs for new onboarding integration partners',
        'Executed complex SQL queries to validate data integrity across Oracle and MySQL databases',
        'Coordinated with the DevOps team to deploy Java projects from prototype-to-production, configuring external APIs using Python to automate JSON report generation that optimized operational workflows.'
      ],
      expanded: false,
    },
    {
      date: 'August 2020 - December 2022',
      title: 'Teaching Assistant, BRAC University',
      description: [
        'Taught <b>PHY112 (Principles of Physics II)</b> course',
        'Graded the quizzes and assignment papers, and assisted faculty supervisor in organizing and recording grades in <b>Excel</b>, ensuring timely submission',
        'Provided one-on-one consultation hours helping with homework, quiz solutions, and exam planning strategies'
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
