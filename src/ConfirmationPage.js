import React from 'react';

function ConfirmationPage({ submittedData, onConfirm }) {
  return (
    <div className="container">
      <h2>Submitted Data</h2>
      <p><strong>Student Name:</strong> {submittedData.studentName}</p>
      <p><strong>Student ID:</strong> {submittedData.studentID}</p>
      <p><strong>Major:</strong> {submittedData.major}</p>
      <p><strong>Selected Courses:</strong></p>
      <ul>
        {submittedData.selectedCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <button onClick={onConfirm} className="button">
        Confirm
      </button>
    </div>
  );
}

export default ConfirmationPage;
