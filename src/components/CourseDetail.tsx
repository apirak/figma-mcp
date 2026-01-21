import { ArrowLeft } from 'lucide-react';
import type { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export default function CourseDetail({ course, onBack }: CourseDetailProps) {
  return (
    <div className="course-detail">
      <button className="course-detail-back" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Back to courses</span>
      </button>

      <div className="course-detail-content">
        <div className="course-detail-hero">
          <img 
            src={course.thumbnailUrl} 
            alt={course.title}
            className="course-detail-hero-image"
          />
          <div className="course-detail-hero-overlay">
            <h1 className="course-detail-title">{course.title}</h1>
            <div className="course-detail-rating">
              <span>⭐</span>
              <span>{course.rating}</span>
            </div>
          </div>
        </div>

        <div className="course-detail-body">
          <section className="course-detail-section">
            <h2>About this course</h2>
            <p>{course.description}</p>
          </section>

          <section className="course-detail-section">
            <h2>Category</h2>
            <p>{course.category}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
