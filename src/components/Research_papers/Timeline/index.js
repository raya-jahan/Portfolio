import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'January 2025 - Present',
      title: 'Quantum Bootstrap Sampling for faster Approximate Query Processing Error Assessment',
      description: [
        'Link: https://link.springer.com/chapter/10.1007/978-3-032-02049-9_14',
        'My second research paper has been published at the International Conference on Database and Expert Systems Applications (DEXA) 2025.',
        'I co-authored with Dr. Feng Yu, designing a QBS framework to accelerate error assessment and compute confidence intervals in Approximate Query Processing by generating superposition-based resamples using QRAM, Quantum Counter and ripple-carry adder.',
        'Bootstrap sampling enables error estimation without the need to know the population distribution but requires many random samples with replacement which is computationally intensive.',
        'We implemented our circuits using IBM Qiskit on Ohio Supercomputer cluster.',
        'The extension of this paper, “A Quantum-enabled Error assessment framework for AQP” is under review in the IEEE Transactions on Information Theory Journal.'
      ],
      expanded: false,
    },
    {
      date: 'January 2022 - January 2023',
      title: 'A Quantum Algorithm for Pairwise Sequence Alignment',
      description: [
        'Link: https://dspace.bracu.ac.bd/xmlui/handle/10361/20228',
        'Designed a Quantum circuit which explores mapping DNA sequences and finding the optimal alignments in a faster and efficient way with Grover’s search algorithm through a 2D graph.',
        'The transition which converges to a fixed path on the graph is based on a proposed oracle for profit calculation. In order to generate a graph and create random paths through it, we searched and analyzed several Quantum Walk Algorithms to align sequences in contrast to classical random walk search algorithms',
        'The intent here is to provide a comprehensive elaboration of how path searching algorithm works on DNA sequences according to a quantum algorithm.'
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
