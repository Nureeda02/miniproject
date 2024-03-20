import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // นำเข้า useHistory มาใช้งาน
import ConfirmationPage from './ConfirmationPage';
import './App.css';

function RegistrationForm() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [major, setMajor] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const history = useHistory(); // ใช้ hook useHistory เพื่อเข้าถึง history object

  const courses = [
    "การจัดการเชิงกลยุทธ์ทางการจัดการเทคโนโลยี",
    "วิชาการพัฒนาเว็บแอปพลิเคชัน",
    "โปรแกรมออกแบบงานสามมิติ",
    "การตลาดบนอินเทอร์เน็ต",
    "Reseach",
    "วิชาการเขียนโปรแกรมบนเว็บ",
    "การสื่อสารข้อมูลและเครือข่ายคอมพิวเตอร์",
    "Database System",
    "VPT",
    "System Analysis"
  ];

  const handleAddCourse = () => {
    setSelectedCourses([...selectedCourses, newCourse]);
    setNewCourse('');
  };

  const handleDeleteCourse = (course) => {
    setSelectedCourses(selectedCourses.filter((c) => c !== course));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      studentName,
      studentID,
      major,
      selectedCourses,
    };
    setSubmittedData(data);
    setStudentName('');
    setStudentID('');
    setMajor('');
    setSelectedCourses([]);
  };

  // ถ้ายืนยันการลงทะเบียน กลับไปยังหน้าหลัก
  const handleConfirm = () => {
    setSubmittedData(null);
    history.push('/');
  };

  return (
    <div className="container">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Student Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="input-field"
          />
        </label>
        <label className="label">
          Student ID:
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className="input-field"
          />
        </label>
        <label className="label">
          Major:
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="input-field"
          />
        </label>
         <label className="label">
          Add Course:
          <select value={newCourse} onChange={(e) => setNewCourse(e.target.value)} className="select-field">
            <option value="">-- เลือกวิชาที่ต้องการ --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddCourse} className="button" style={{ marginLeft: '10px' }}>
            Add
          </button>
        </label>
        <ul className="course-list">
          {selectedCourses.map((course, index) => (
            <li key={index} className="course-item">
              {course}
              <button type="button" onClick={() => handleDeleteCourse(course)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/* แสดงปุ่มยืนยันการลงทะเบียนเมื่อมีข้อมูลที่ส่งไปแล้ว */}
        {submittedData && (
          <div>
            <p>Student Name: {submittedData.studentName}</p>
            <p>Student ID: {submittedData.studentID}</p>
            <p>Major: {submittedData.major}</p>
            <p>Selected Courses:</p>
            <ul>
              {submittedData.selectedCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit" className="button" style={{ display: 'block', margin: 'auto', marginTop: '20px' }}>
          ยืนยัน
        </button>
        {/* แสดงปุ่มยืนยันการลงทะเบียนเมื่อมีข้อมูลที่ส่งไปแล้ว */}
        {submittedData && (
          <button type="button" onClick={handleConfirm} className="button" style={{ display: 'block', margin: 'auto', marginTop: '20px' }}>
            ยืนยันการลงทะเบียนเรียน
          </button>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;
