import React, { useState } from "react";
import './grade.css';
import AdminNav from './NavBar1'
const GradeEvaluation = () => {
  const [marks, setMarks] = useState({
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: ""
  });

  const [overallGrade, setOverallGrade] = useState("");

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  const evaluateGrade = () => {
    const totalMarks =
      parseInt(marks.subject1) +
      parseInt(marks.subject2) +
      parseInt(marks.subject3) +
      parseInt(marks.subject4) +
      parseInt(marks.subject5);

    const averageMarks = totalMarks / 5;

    if (isNaN(averageMarks)) {
      setOverallGrade("Invalid Input");
    } else if (averageMarks >= 90) {
      setOverallGrade("A");
    } else if (averageMarks >= 80) {
      setOverallGrade("B");
    } else if (averageMarks >= 70) {
      setOverallGrade("C");
    } else if (averageMarks >= 60) {
      setOverallGrade("D");
    } else {
      setOverallGrade("F");
    }
  };

  return (
    <div className="containergr mt-3">
    <AdminNav/> 
    <center>
    <br></br><br></br><br></br>
      <h1 className="textgr-center">Grade Evaluation</h1>
      <div className="rowgr justify-content-center">
        <div className="colgr-md-6">
          <form>
            <div className="mbgr-3">
              <label>Subject 1 Marks</label>
              <input
                type="number"
                name="subject1"
                className="formgr-control"
                value={marks.subject1}
                onChange={handleMarksChange}
              />
            </div>
            <div className="mbgr-3">
              <label>Subject 2 Marks</label>
              <input
                type="number"
                name="subject2"
                className="formgr-control"
                value={marks.subject2}
                onChange={handleMarksChange}
              />
            </div>
            <div className="mbgr-3">
              <label>Subject 3 Marks</label>
              <input
                type="number"
                name="subject3"
                className="formgr-control"
                value={marks.subject3}
                onChange={handleMarksChange}
              />
            </div>
            <div className="mbgr-3">
              <label>Subject 4 Marks</label>
              <input
                type="number"
                name="subject4"
                className="formgr-control"
                value={marks.subject4}
                onChange={handleMarksChange}
              />
            </div>
            <div className="mbgr-3">
              <label>Subject 5 Marks</label>
              <input
                type="number"
                name="subject5"
                className="formgr-control"
                value={marks.subject5}
                onChange={handleMarksChange}
              />
            </div>

          

            <button
              type="button"
              className="btngr btn-primary"
              onClick={evaluateGrade}
            >
              Evaluate
            </button>
          </form>
          <div className="textgr-center">
            <h2>Overall Grade: {overallGrade}</h2>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
};

export default GradeEvaluation;