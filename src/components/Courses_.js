import React from 'react';

function Courses() {
  // Exemple de liste de formations
  const courses = [
    { id: 1, title: 'Formation React', description: 'Apprenez React de A à Z' },
    { id: 2, title: 'Formation Node.js', description: 'Maîtrisez Node.js pour le backend' },
  ];

  return (
    <div>
      <h1>Nos formations</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;