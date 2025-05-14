import React, { useState, useEffect } from 'react';
import { Reorder, motion } from 'framer-motion';
import './Skills.css';

// Initial list of skills (could include icon components or image URLs)
const initialSkills = [
  'C++',
  'JavaScript',
  'Go',
  'Node.js',
  'React',
  'MongoDB',
  'Next.js',
  'GraphQL',
  'PostgreSQL',
  'Python',
  'Java'
];

// Utility to shuffle an array
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function TempSkills() {
  const [skills, setSkills] = useState(initialSkills);

  // Automatically shuffle every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkills(prev => shuffleArray(prev));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <Reorder.Group
        axis="y"
        values={skills}
        onReorder={setSkills}
        className="skills-list"
      >
        {skills.map(skill => (
          <Reorder.Item
            key={skill}
            value={skill}
            whileDrag={{ scale: 1.05 }}
            className="skill-item"
          >
            <motion.div layout className="skill-content">
              <span className="skill-label">{skill}</span>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
}
