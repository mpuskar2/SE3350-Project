import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Home() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  const download = ((url) => {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  });

  return (
    <>
    <b>Western University</b><br></br>
    <b>Faculty of Engineering</b><br></br>
    <b>Department of Electrical and Computer Engineering</b><br></br>
    <h2>ECE XXXXA/B: Course Title</h2>
    <b>Course Outline 20YY-YY</b>
    <br></br>
    <br></br>

    <b>Description: </b>
    <div>
    <input id="descriptionField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Instructor: </b>
    <div>
    <input id="instructorField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Acedemic Calender Copy: </b>
    <div>
    <input id="acedmicCalenderCopyField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Contact Hours: </b>
    <div>
    <input id="contactHoursField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Antirequisite: </b>
    <div>
    <input id="antirequisiteField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Prerequisite: </b>
    <div>
    <input id="prerequisiteField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Co-requisite: </b>
    <div>
    <input id="corequisiteField" type="text" name=""></input>
    </div>
    <br></br>
    <b>CEAB Acedemic Units: </b>
    <div>
    <input id="academicUnitsField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Required Textbooks: </b>
    <div>
    <input id="requiredTextbooksField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Other Required References: </b>
    <div>
    <input id="otherRequiredReferencesField" type="text" name=""></input>
    </div>
    <br></br>
    <b>Recommended References: </b>
    <div>
    <input id="recommendedReferencesField" type="text" name=""></input>
    </div>
    <br></br>
    <b>General Learning Objectives (CEAB Graduate Attributes)</b>
      <table>
  <tr>
    <td>Knowledge Base</td>
    <th> 
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Knowledge Base"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Knowledge Base"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Knowledge Base"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Knowledge Base"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form> 
 </th>
    <td>Use of Engineering Tools</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Use of Engineering Tools"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Use of Engineering Tools"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Use of Engineering Tools"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Use of Engineering Tools"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Impact on Society and the Environment</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Impact on Society and the Environment"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Impact on Society and the Environment"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Impact on Society and the Environment"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Impact on Society and the Environment"/>
            <label for="empty">Empty</label><br></br>
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
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Problem Analysis"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Problem Analysis"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Problem Analysis"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Individual and Team Work</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Individual and Team Work"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Individual and Team Work"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Individual and Team Work"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Individual and Team Work"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Ethics and Equity</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Ethics and Equity"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Ethics and Equity"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Ethics and Equity"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Ethics and Equity"/>
            <label for="empty">Empty</label><br></br>
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
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Investigation"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Investigation"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Investigation"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Communication Skills</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Communication Skills"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Communication Skills"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Communication Skills"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Communication Skills"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Economics and Project Management</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Economics and Project Management"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Economics and Project Management"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Economics and Project Management"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Economics and Project Management"/>
            <label for="empty">Empty</label><br></br>
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
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Design"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Design"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Design"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Professionalism</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Professionalism"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Professionalism"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Professionalism"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Professionalism"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
    <td>Life-Long Learning</td>
    <th>
    <form>
          <label>
            <input type="radio" id="i" value="I" name="Life-Long Learning"/>
            <label for="i">I</label><br></br>
            <input type="radio" id="d" value="D" name="Life-Long Learning"/>
            <label for="d">D</label><br></br>
            <input type="radio" id="a" value="A" name="Life-Long Learning"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="empty" value="Empty" name="Life-Long Learning"/>
            <label for="empty">Empty</label><br></br>
          </label>
    </form>
    </th>
  </tr>
</table>

<br></br>
<table>
  <tr>
    <th>Course Topics and Specific Learning Outcomes</th>
    <th>CEAB Graduate Attributes Indicators</th>
  </tr>
  <tr>
    <td> 
        <ol>
            <li>Topic 1</li>
            <p>At the end of this section, students will be able to:</p>
            <li>Topic 2</li>
            <p>At the end of this section, students will be able to:</p>
            <li>Topic 3</li>
            <p>At the end of this section, students will be able to:</p>
            <li>Topic 4</li>
            <p>At the end of this section, students will be able to:</p>
        </ol>
    </td>
  </tr>
  </table>

  <br></br>
<table>
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
        <input id="homeworkPercentField" type="number" name=""></input>%
      </div>
    </td>
  </tr>
  <tr>
    <td> 
        Quizzes
    </td>
    <td> 
    <div>
        <input id="quizzesPercentField" type="number" name=""></input>%
      </div>
    </td>
    </tr>
    <tr>
    <td> 
        Laboratory
    </td>
    <td> 
    <div>
        <input id="laboratoryPercentField" type="number" name=""></input>%
      </div>
    </td>
    </tr>
    
    <tr>
    <td> 
        Midterm Test
    </td>
    <td> 
    <div>
        <input id="midtermTestPercentField" type="number" name=""></input>%
      </div>
    </td>
    </tr>
    <tr>
    <td> 
        Final Examination
    </td>
    <td> 
    <div>
        <input id="finalExaminationPercentField" type="number" name=""></input>%
      </div>
    </td>
    </tr>

  </table>

  <br></br>
  <b>Evaluation</b>
  <div>
    <input id="evaluationField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Homework Assignments</b>
  <div>
    <input id="homeworkAssignmentsField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Quizzes: </b>
  <div>
    <input id="quizzesField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Laboratory: </b>
  <div>
    <input id="LaboratoryField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Midterm Test: </b>
  <div>
    <input id="midtermTestField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Final Examination: </b>
  <div>
    <input id="finalExaminationField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Late Submission Policy: </b>
  <div>
    <input id="lateSubmissionPolicyField" type="text" name=""></input>
  </div>
  <br></br>
  <b>Assignment Submission Locker: </b>
  <div>
    <input id="assignmentSubmissionLockerField" type="text" name=""></input>
  </div>
  <br></br>
    </>
  )

/*/ PDF document
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  ); 
  */
}
