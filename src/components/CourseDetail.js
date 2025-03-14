import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();

  // Exemple de détail de formation
  const course = {
    id,
    title: 'Formation React',
    description: 'Apprenez React de A à Z',
    content: 'Contenu détaillé de la formation React...',
  };

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>{course.content}</p>
    </div>
  );
}

export default CourseDetail;