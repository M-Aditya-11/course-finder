const CourseCard = ({ course }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{course.name}</h3>
      <p>{course.category}</p>
    </div>
  );
};

export default CourseCard;
