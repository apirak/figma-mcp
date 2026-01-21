import { Star, Play } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <article className="course-card" onClick={onClick}>
      <div className="course-card-media">
        <img 
          src={course.thumbnailUrl} 
          alt={`${course.title} course thumbnail`}
          className="course-card-image"
        />
        <div className="course-card-overlay" />
        
        <button 
          className="course-card-play-button"
          aria-label={`Play ${course.title} course`}
        >
          <Play size={24} fill="white" strokeWidth={0} />
        </button>

        <div className="course-card-rating">
          <Star size={16} fill="white" strokeWidth={0} />
          <span>{course.rating}</span>
        </div>
      </div>

      <div className="course-card-content">
        <div className="course-card-thumbnail">
          <img 
            src={course.thumbnailUrl} 
            alt=""
            aria-hidden="true"
          />
        </div>
        
        <div className="course-card-info">
          <h3 className="course-card-title">{course.title}</h3>
          <p className="course-card-description">{course.description}</p>
        </div>
      </div>
    </article>
  );
}
