import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';import BottomNav from './components/BottomNav';import CourseCard from './components/CourseCard';
import CourseDetail from './components/CourseDetail';
import type { MenuItem } from './types';
import { courses } from './data/courses';

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const selectedCourse = selectedCourseId 
    ? courses.find(c => c.id === selectedCourseId) 
    : null;

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const handleBackToCourses = () => {
    setSelectedCourseId(null);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        <main className="main-content">
          {selectedCourse ? (
            <CourseDetail course={selectedCourse} onBack={handleBackToCourses} />
          ) : (
            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.id)}
                />
              ))}
            </div>
          )}
        </main>
      </div>
      <BottomNav activeMenu={activeMenu} onMenuClick={setActiveMenu} />
    </div>
  );
}

export default App;
