import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set, onValue, increment, update } from "firebase/database";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const activeCourse = localStorage.getItem("courseName");

  let email;
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      email = currentUser.email;
    }
    else navigate("/")
  });

  return (
    <>
    <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
    </div>
    <div>
      <Link to="/professorcourse">
        <button>Back</button>
      </Link>
    </div>
    <div>
    <b>Western University</b><br></br>
    <b>Faculty of Engineering</b><br></br>
    <b>Department of Electrical and Computer Engineering</b><br></br>
    <h2>{activeCourse}: Course Title</h2>
    <b>Course Outline <input id="yearField" type="number" name="" placeholder="Enter year"></input></b>
    <br></br>
    <br></br>

    <b>Description: </b>
    <div>
    <input id="descriptionField" type="text" name="" placeholder="Enter desciption here"></input>
    </div>
    <br></br>
    <b>Instructor: </b>
    <div>
    <input id="instructorField1" type="text" name="" placeholder="Enter name"></input>
    <input id="instructorField2" type="text" name="" placeholder="Enter building and office number"></input>
    <input id="instructorField3" type="text" name="" placeholder="Extension number"></input>
    <input id="instructorField4" type="text" name="" placeholder="Enter consultation hours"></input>
    </div>
    <br></br>
    <b>Acedemic Calender Copy: </b>
    <div>
    <input id="academicCalenderCopyField" type="text" name="" placeholder="Enter academic calender information"></input>
    </div>
    <br></br>
    <b>Contact Hours: </b>
    <div>
    <input id="contactHoursField1" type="text" name="" placeholder="Enter lecture hours"></input>
    <input id="contactHoursField2" type="text" name="" placeholder="Enter laboratory hours"></input>
    <input id="contactHoursField3" type="text" name="" placeholder="Enter tutorial hours"></input>
    <input id="contactHoursField4" type="text" name="" placeholder="Enter number of credits course is worth"></input>
    </div>
    <br></br>
    <b>Antirequisite: </b>
    <div>
    <input id="antirequisiteField" type="text" name="" placeholder="Enter antirequisites to this course"></input>
    </div>
    <br></br>
    <b>Prerequisite: </b>
    <div>
    <input id="prerequisiteField" type="text" name="" placeholder="Enter prerequisites to this course"></input>
    </div>
    <br></br>
    <b>Co-requisite: </b>
    <div>
    <input id="corequisiteField" type="text" name="" placeholder="Enter co-requisites for this course"></input>
    </div>
    <br></br>
    <b>CEAB Acedemic Units: </b>
    <div>
    <input id="academicUnitsField1" type="text" name="" placeholder="Enter Engineering Science percentage"></input>
    <input id="academicUnitsField2" type="text" name="" placeholder="Enter Engineering Design percentage"></input>
    </div>
    <br></br>
    <b>Required Textbooks: </b>
    <div>
    <input id="requiredTextbooksField" type="text" name="" placeholder="Enter required textbooks"></input>
    </div>
    <br></br>
    <b>Other Required References: </b>
    <div>
    <input id="otherRequiredReferencesField" type="text" name="" placeholder="Enter required references"></input>
    </div>
    <br></br>
    <b>Recommended References: </b>
    <div>
    <input id="recommendedReferencesField" type="text" name="" placeholder="Enter recommended references"></input>
    </div>
    <br></br>
    <b>General Learning Objectives (CEAB Graduate Attributes)</b>
      <table>
      <tbody>
  <tr>
    <td>Knowledge Base</td>
    <th> 
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Knowledge Base"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Knowledge Base"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Knowledge Base"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Knowledge Base"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form> 
 </th>
    <td>Use of Engineering Tools</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Use of Engineering Tools"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Use of Engineering Tools"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Use of Engineering Tools"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Use of Engineering Tools"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Impact on Society and the Environment</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Impact on Society and the Environment"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Impact on Society and the Environment"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Impact on Society and the Environment"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Impact on Society and the Environment"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Problem Analysis</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Problem Analysis"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Problem Analysis"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Problem Analysis"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Problem Analysis"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Individual and Team Work</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Individual and Team Work"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Individual and Team Work"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Individual and Team Work"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Individual and Team Work"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Ethics and Equity</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Ethics and Equity"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Ethics and Equity"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Ethics and Equity"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Ethics and Equity"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Investigation</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Investigation"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Investigation"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Investigation"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Investigation"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Communication Skills</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Communication Skills"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Communication Skills"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Communication Skills"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Communication Skills"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Economics and Project Management</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Economics and Project Management"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Economics and Project Management"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Economics and Project Management"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Economics and Project Management"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Design</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Design"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Design"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Design"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Design"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Professionalism</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Professionalism"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Professionalism"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Professionalism"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Professionalism"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Life-Long Learning</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Life-Long Learning"/>
            <label htmlFor="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Life-Long Learning"/>
            <label htmlFor="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Life-Long Learning"/>
            <label htmlFor="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Life-Long Learning"/>
            <label htmlFor="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  </tbody>
</table>

<br></br>
<table>
<tbody>
  <tr>
    <th>Course Topics and Specific Learning Outcomes</th>
    <th>CEAB Graduate Attributes Indicators</th>
  </tr>
  <tr>
    <td>
      1. <input id="topic1Field" type="text" name="" placeholder="Enter topic 1 title"></input><br></br>
      At the end of this section, students will be able to: <br></br><input id="topic1OutcomesField" type="text" name="" placeholder="Enter learning outcomes for this topic"></input>
    </td>
    <td>
    <input id="topic1GAField" type="text" name="" placeholder="Enter GA indictors for this topic"></input>
    </td>
  </tr>
  <tr>
  <td>
    2. <input id="topic2Field" type="text" name="" placeholder="Enter topic 2 title"></input><br></br>
    At the end of this section, students will be able to: <br></br><input id="topic2OutcomesField" type="text" name="" placeholder="Enter learning outcomes for this topic"></input>
    </td>
    <td>
    <input id="topic2GAField" type="text" name="" placeholder="Enter GA indictors for this topic"></input>
    </td>
  </tr>
  <tr>
  <td>
    3. <input id="topic3Field" type="text" name="" placeholder="Enter topic 3 title"></input><br></br>
    At the end of this section, students will be able to: <br></br><input id="topic3OutcomesField" type="text" name="" placeholder="Enter learning outcomes for this topic"></input>
    </td>
    <td>
    <input id="topic3GAField" type="text" name="" placeholder="Enter GA indictors for this topic"></input>
    </td>
  </tr>
  <tr>
  <td>
    4. <input id="topic4Field" type="text" name="" placeholder="Enter topic 4 title"></input><br></br>
    At the end of this section, students will be able to: <br></br><input id="topic4OutcomesField" type="text" name="" placeholder="Enter learning outcomes for this topic"></input>
    </td>
    <td>
    <input id="topic4GAField" type="text" name="" placeholder="Enter GA indictors for this topic"></input>
    </td>
  </tr>
  </tbody>
  </table>

  <br></br>
  <b>Evaluation</b>
  <div>
  <br></br>
  </div>
<table>
<tbody>
  <tr>
    <th>Course Component</th>
    <th>Weight</th>
  </tr>
  <tr>
    <td> 
        Homework
    </td>
    <td> 
      <div>
        <input id="homeworkPercentField" type="number" name="" placeholder="Enter assignment percentage"></input>%
      </div>
    </td>
  </tr>
  <tr>
    <td> 
        Quizzes
    </td>
    <td> 
    <div>
        <input id="quizzesPercentField" type="number" name="" placeholder="Enter quiz percentage"></input>%
      </div>
    </td>
    </tr>
    <tr>
    <td> 
        Laboratory
    </td>
    <td> 
    <div>
        <input id="laboratoryPercentField" type="number" name="" placeholder="Enter laboratory percentage"></input>%
      </div>
    </td>
    </tr>
    
    <tr>
    <td> 
        Midterm Test
    </td>
    <td> 
    <div>
        <input id="midtermTestPercentField" type="number" name="" placeholder="Enter midterm percentage"></input>%
      </div>
    </td>
    </tr>
    <tr>
    <td> 
        Final Examination
    </td>
    <td> 
    <div>
        <input id="finalExaminationPercentField" type="number" name="" placeholder="Enter final exam percentage"></input>%
      </div>
    </td>
    </tr>
    </tbody>
  </table>

  <br></br>
  <b>Homework Assignments</b>
  <div>
    <input id="homeworkAssignmentsField" type="text" name="" placeholder="Enter homework assignment information"></input>
  </div>
  <br></br>
  <b>Quizzes: </b>
  <div>
    <input id="quizzesField" type="text" name="" placeholder="Enter quiz information"></input>
  </div>
  <br></br>
  <b>Laboratory: </b>
  <div>
    <input id="LaboratoryField" type="text" name="" placeholder="Enter laboratory information"></input>
  </div>
  <br></br>
  <b>Midterm Test: </b>
  <div>
    <input id="midtermTestField" type="text" name="" placeholder="Enter midterm information"></input>
  </div>
  <br></br>
  <b>Final Examination: </b>
  <div>
    <input id="finalExaminationField" type="text" name="" placeholder="Enter final examination information"></input>
  </div>
  <br></br>
  <b>Late Submission Policy: </b>
  <div>
    <input id="lateSubmissionPolicyField" type="text" name="" placeholder="Enter late submission policy"></input>
  </div>
  <br></br>
  <b>Assignment Submission Locker: </b>
  <div>
    <input id="assignmentSubmissionLockerField" type="text" name="" placeholder="Enter locker number and location of submission locker"></input>
  </div>
  <br></br>
  </div>
      <div>
       <b> Enter how to assess GA indicators (this will not be displayed on course outline) </b><br></br>
        <input id="GAIndicatorAssessmentField" type="text" name="" placeholder=" "></input>
      </div>
      <div>
        <button onClick={() => updateOutline(activeCourse, email)}>Submit</button>
      </div>
    </>
  )
}

function getFields() {
  let coContents = [];
  coContents.push(document.getElementById('yearField').value);
  coContents.push(document.getElementById('descriptionField').value);

  coContents.push(document.getElementById('instructorField1').value);
  coContents.push(document.getElementById('instructorField2').value);
  coContents.push(document.getElementById('instructorField3').value);
  coContents.push(document.getElementById('instructorField4').value);

  coContents.push(document.getElementById('academicCalenderCopyField').value);
  
  coContents.push(document.getElementById('contactHoursField1').value);
  coContents.push(document.getElementById('contactHoursField2').value);
  coContents.push(document.getElementById('contactHoursField3').value);
  coContents.push(document.getElementById('contactHoursField4').value);
  
  coContents.push(document.getElementById('antirequisiteField').value);
  coContents.push(document.getElementById('prerequisiteField').value);
  coContents.push(document.getElementById('corequisiteField').value);

  coContents.push(document.getElementById('academicUnitsField1').value);
  coContents.push(document.getElementById('academicUnitsField2').value);
  
  coContents.push(document.getElementById('requiredTextbooksField').value);
  coContents.push(document.getElementById('otherRequiredReferencesField').value);
  coContents.push(document.getElementById('recommendedReferencesField').value);

  let radios = [];
  radios.push(document.getElementsByName('Knowledge Base'), document.getElementsByName('Use of Engineering Tools'), document.getElementsByName('Impact on Society and the Environment'), document.getElementsByName('Problem Analysis'), document.getElementsByName('Individual and Team Work'), document.getElementsByName('Ethics and Equity'), document.getElementsByName('Investigation'), document.getElementsByName('Communication Skills'), document.getElementsByName('Economics and Project Management'), document.getElementsByName('Design'), document.getElementsByName('Professionalism'), document.getElementsByName('Life-Long Learning'));

  radios.forEach(value => {
    let notChecked = 0;
    for (let radio of value) {
      if (radio.checked) {
        if (radio.value === 'Empty') {
          coContents.push('');
        }
        else {
          coContents.push(radio.value);
        }
      } else {
        notChecked++;
      }
      if (notChecked === 4) {
        coContents.push('');
      }
    }
  });

  coContents.push(document.getElementById('topic1Field').value);
  coContents.push(document.getElementById('topic1OutcomesField').value);
  coContents.push(document.getElementById('topic1GAField').value);
  coContents.push(document.getElementById('topic2Field').value);
  coContents.push(document.getElementById('topic2OutcomesField').value);
  coContents.push(document.getElementById('topic2GAField').value);
  coContents.push(document.getElementById('topic3Field').value);
  coContents.push(document.getElementById('topic3OutcomesField').value);
  coContents.push(document.getElementById('topic3GAField').value);
  coContents.push(document.getElementById('topic4Field').value);
  coContents.push(document.getElementById('topic4OutcomesField').value);
  coContents.push(document.getElementById('topic4GAField').value);

  coContents.push(document.getElementById('homeworkPercentField').value);
  coContents.push(document.getElementById('quizzesPercentField').value);
  coContents.push(document.getElementById('laboratoryPercentField').value);
  coContents.push(document.getElementById('midtermTestPercentField').value);
  coContents.push(document.getElementById('finalExaminationPercentField').value);
  coContents.push(document.getElementById('homeworkAssignmentsField').value);
  coContents.push(document.getElementById('quizzesField').value);
  coContents.push(document.getElementById('LaboratoryField').value);
  coContents.push(document.getElementById('midtermTestField').value);
  coContents.push(document.getElementById('finalExaminationField').value);
  coContents.push(document.getElementById('lateSubmissionPolicyField').value);
  coContents.push(document.getElementById('assignmentSubmissionLockerField').value);
  coContents.push(document.getElementById('GAIndicatorAssessmentField').value);

  return coContents;
}

function updateOutline(id, email) {
  // Get form values
  let coContents = getFields();

  const db = getDatabase();
  
  const dbRef = ref(getDatabase());
  const updates = {};
  updates[`OutlineCount/${id}/count`] = increment(1);
  update(dbRef, updates);

  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + ' ' + time;

  const ocRef = ref(db, 'OutlineCount/' + id);
  onValue(ocRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.count);

    const oRef = ref(db, `Outlines/${id}v${data.count}`);
    set(oRef, {
      approvalStatus: "",
      comments: "",
      contents: coContents,
      courseName: id,
      modifiedTime: dateTime,
      versionNum: data.count,
      whoModified: email
    });
  });

  alert("New outline version successfully added");
}