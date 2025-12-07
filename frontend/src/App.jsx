import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import { courses } from "./data/courses.js";

function App() {

  const [search, setSearch] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .catch(() => setQuote("Stay motivated to keep learning!"));
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Course Finder</h1>
      <p><strong>Motivation:</strong> {quote}</p>

      <SearchBar search={search} setSearch={setSearch} />
      <CourseList courses={filteredCourses} />
    </div>
  );
  
}

export default App
