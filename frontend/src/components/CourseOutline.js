import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

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
    
    <br></br>
    <b>Instructor: </b>

    <br></br>
    <b>Acedemic Calender Copy: </b>

    <br></br>
    <b>Contact Hours: </b>

    <br></br>
    <b>Antirequisite: </b>

    <br></br>
    <b>Prerequisite: </b>

    <br></br>
    <b>Co-requisite: </b>

    <br></br>
    <b>CEAB Acedmic Units: </b>

    <br></br>
    <b>Required Textbooks: </b>

    <br></br>
    <b>Other Required References: </b>

    <br></br>
    <b>Recommended References: </b>

    <br></br>
    <b>General Learning Objectives (CEAB Graduate Attributes)</b>
      <table>
  <tr>
    <td>Knowledge Base</td>
    <th> 
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Knowledge Base"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Knowledge Base"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Knowledge Base"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Knowledge Base"/>
            <label for="d">D</label><br></br>
          </label>
    </form> 
 </th>
    <td>Use of Engineering Tools</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Use of Engineering Tools"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Use of Engineering Tools"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Use of Engineering Tools"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Use of Engineering Tools"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Impact on Society and the Environment</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Impact on Society and the Environment"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Impact on Society and the Environment"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Impact on Society and the Environment"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Impact on Society and the Environment"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Problem Analysis</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Problem Analysis"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Problem Analysis"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Problem Analysis"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Problem Analysis"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Individual and Team Work</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Individual and Team Work"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Individual and Team Work"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Individual and Team Work"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Individual and Team Work"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Ethics and Equity</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Ethics and Equity"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Ethics and Equity"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Ethics and Equity"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Ethics and Equity"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Investigation</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Investigation"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Investigation"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Investigation"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Investigation"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Communication Skills</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Communication Skills"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Communication Skills"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Communication Skills"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Communication Skills"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Economics and Project Management</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Economics and Project Management"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Economics and Project Management"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Economics and Project Management"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Economics and Project Management"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
  </tr>
  <tr>
    <td>Design</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Design"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Design"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Design"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Design"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Professionalism</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Professionalism"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Professionalism"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Professionalism"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Professionalism"/>
            <label for="d">D</label><br></br>
          </label>
    </form>
    </th>
    <td>Life-Long Learning</td>
    <th>
    <form>
          <label>
            <input type="radio" id="a" value="A" name="Life-Long Learning"/>
            <label for="a">A</label><br></br>
            <input type="radio" id="b" value="B" name="Life-Long Learning"/>
            <label for="b">B</label><br></br>
            <input type="radio" id="c" value="C" name="Life-Long Learning"/>
            <label for="c">C</label><br></br>
            <input type="radio" id="d" value="D" name="Life-Long Learning"/>
            <label for="d">D</label><br></br>
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
        %
    </td>
  </tr>
  <tr>
    <td> 
        Quizzes
    </td>
    <td> 
        %
    </td>
    </tr>
    <tr>
    <td> 
        Laboratory
    </td>
    <td> 
        %
    </td>
    </tr>
    
    <tr>
    <td> 
        Midterm Test
    </td>
    <td> 
        %
    </td>
    </tr>
    <tr>
    <td> 
        Final Examination
    </td>
    <td> 
        %
    </td>
    </tr>

  </table>

  <br></br>
  <b>Evaluation</b>

  <br></br>
  <b>Homework Assignments</b>

  <br></br>
  <b>Quizzes: </b>

  <br></br>
  <b>Laboratory: </b>

  <br></br>
  <b>Midterm Test: </b>

  <br></br>
  <b>Final Examination: </b>

  <br></br>
  <b>Late Submission Policy: </b>

  <br></br>
  <b>Assignment Submission Locker: </b>

  <br></br>
  <b>Description: </b>
    </>
  )
}
