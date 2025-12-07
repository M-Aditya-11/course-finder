const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.category}</p>
    </div>
  );
};

export default CourseCard;
