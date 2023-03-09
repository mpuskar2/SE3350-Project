import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer, Font } from '@react-pdf/renderer';


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

  <PDFDownloadLink document={<MyDocument />} fileName={"courseOutline.pdf"}>
    {({loading}) =>
      loading ? (
        <button>Loading Document...</button>
      ) : (
        <button>Download</button>
      )
    }
  </PDFDownloadLink>

    </>
  )
 
  //
}

let description = document.getElementById("descriptionField");

// stylesheet for PDF
Font.register({ family: 'Times-Roman', src: "/C:/Windows/Fonts/Times New Roman" });
Font.register({ family: 'Times-Bold', src: "/C:/Windows/Fonts/Times New Roman" });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  section: {
    padding: 50,
    paddingBottom: 50,
    paddingTop: 50,
    flexGrow: 1
  },
  sectionTitle: {
    textAlign: 'center',
    margin: 20,
    padding: 20,
    flexGrow: 1
  },
  textBold: {
    fontFamily:'Times-Bold',
    fontSize:12,
    margin:0,
    padding:0,
  },
  textRegular: {
    fontFamily:'Times-Roman',
    fontSize:12,
    margin:0,
    padding:0,
  }
});
// PDF document

const MyDocument = () => (
<Document>
  <Page size="A4" style={styles.page} wrap>
    <View style={styles.section}>
    
    <Text style={styles.textBold}>
    <Text style={{textAlign:'center'}}>Western University</Text>
      </Text>

      
<Text style={styles.textBold}>
<Text style={{textAlign:'center'}}>Faculty of Engineering</Text>
</Text>
<Text style={styles.textBold}>
<Text style={{textAlign:'center'}}>Department of Electrical and Computer Engineering{'\n'}</Text>
</Text>
<Text style={styles.textBold}>
<Text style={{textAlign:'center', fontSize:14}}>ECE XXXXA/B: Course Title</Text>
</Text>
<Text style={styles.textBold}>
<Text style={{textAlign:'center'}}>Course Outline 20YY-YY{'\n'}</Text>
</Text>

<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>Description: </Text>
 
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold', paddingLeft:30}}>{'\n'}Instructor:	</Text>
{'\t'}    Dr. Name, P.Eng.
{'\n'} {'\t                   '}    TEB XXX, 519-661-2111 ext. XXXXX, UWO e-mail address as hyperlink
{'\n'} {'\t                   '}    Consultation hours:
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Academic Calendar Copy:	</Text>

</Text> 
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Contact Hours:	</Text>
X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Antirequisite:	</Text>
 
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Prerequisites:	</Text>

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Co-requisite:	</Text>

</Text>
<Text style={styles.textRegular}>
Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your record. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites.

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}CEAB Academic Units:	</Text>
Engineering Science X%, Engineering Design Y%.

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Required Textbook:	</Text>

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Other Required References:	</Text>

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Recommended References:	</Text>
 
</Text>
<Text style={styles.textBold}>
{'\n'}General Learning Objectives (CEAB Graduate Attributes)
</Text>

Knowledge Base	x	Use of Engineering Tools	x	Impact on Society and the Environment	x
Problem Analysis	x	Individual and Team Work	x	Ethics and Equity	x
Investigation	x	Communication Skills	x	Economics and Project Management	x
Design	x	Professionalism	x	Life-Long Learning	x

<Text style={styles.textRegular}>
Notation: where x be I: Introductory, D: Intermediate, A: Advanced, or empty. I – The instructor will introduce the topic at the level required.  It is not necessary for the student to have seen the material before. D – There may be a reminder or review, but the student is expected to have seen and been tested on the material before taking the course. A – It is expected that the student can apply the knowledge without prompting (e.g. no review).
</Text>

Course Topics and Specific Learning Outcomes	CEAB Graduate Attributes Indicators
1.	Topic 1	
	At the end of this section, students will be able to:	
a.	 	 
b.	 	 
2.	Topic 1	
	At the end of this section, students will be able to:	
a.		
b.		
3.	Topic 1	
	At the end of this section, students will be able to:	
a.		
b.		
4.	Topic 1	
	At the end of this section, students will be able to:	
a.		
b.	  	

<Text style={styles.textBold}>
{'\n'}Evaluation
</Text>
Course Component	Weight
Homework Assignments	%
Quizzes	%
Laboratory	%
Midterm Test	%
Final Examination	50%

<Text style={styles.textRegular}>
To obtain a passing grade in the course, a mark of 50% or more must be achieved on the final examination as well as on the laboratory. A final examination or laboratory mark LESS THAN 50% will result in a final course grade of 48% or less.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Homework Assignments:	</Text> 

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Quizzes:	</Text> 

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Laboratory:	</Text> 

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Midterm Test:	</Text>

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Final Examination:	</Text>
The final examination will be take place during the regular examination period. 

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Late Submission Policy:	</Text>

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Assignment Submission Locker:	</Text>
Locker XYZ located on the second floor of TEB.

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Use of English:	</Text>
In accordance with Senate and Faculty Policy, students may be penalized up to 10% of the marks on all assignments, tests, and examinations for improper use of English. Additionally, poorly written work with the exception of the final examination may be returned without grading. If resubmission of the work is permitted, it may be graded with marks deducted for poor English and/or late submission.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Attendance:	</Text>
Any student who, in the opinion of the instructor, is absent too frequently from class, laboratory, or tutorial periods will be reported to the Dean (after due warning has been given). On the recommendation of the department, and with the permission of the Dean, the student will be debarred from taking the regular final examination in the course.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Absence Due to Illness or Other Circumstances:	</Text>
Absence Due to Illness or Other Circumstances: Students should immediately consult with the instructor or department Chair if they have any problems that could affect their performance in the course. Where appropriate, the problems should be documented (see the attached “Instructions for Students Unable to Write Tests or Examinations or Submit Assignments as Scheduled”). The student should seek advice from the instructor or department Chair regarding how best to deal with the problem. Failure to notify the instructor or department Chair immediately (or as soon as possible thereafter) will have a negative effect on any appeal.
</Text>
<Text style={styles.textRegular}> {'\n'}
For more information concerning medical accommodations, see the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf
</Text>
<Text style={styles.textRegular}> {'\n'}
For more information concerning accommodations for religious holidays, see the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Missed Midterm Examination:	</Text>
If a student misses a midterm examination, she or he must follow the Instructions for Students Unable to Write Tests and provide documentation to Undergraduate Services Office within 24 hours of the missed test. If accommodation is granted, the department will decide whether to provide a make-up test or allow reweighting of the test, where reweighting means the marks normally allotted for the midterm will be added to the final exam. If no reasonable justification for missing the test can be found, then the student will receive a mark of zero for the test.
</Text>
<Text style={styles.textRegular}>{'\n'}
If a student is going to miss the midterm examination for religious reasons, they must inform the instructor in writing within 48 hours of the announcement of the exam date or they will be required to write the exam. 
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Cheating and Plagiarism:	</Text>
Students must write their essays and assignments in their own words. Whenever students take an idea or a passage from another author, they must acknowledge their debt both by using quotation marks where appropriate and by proper referencing such as footnotes or citations. University policy states that cheating, including plagiarism, is a scholastic offence. The commission of a scholastic offence is attended by academic penalties, which might include expulsion from the program. If you are caught cheating, there will be no second warning.
</Text>
<Text style={styles.textRegular}>{'\n'}
All required papers may be subject to submission for textual similarity review to commercial plagiarism-detection software under license to the University for the detection of plagiarism. All papers submitted will be included as source documents on the reference database for the purpose of detecting plagiarism of papers subsequently submitted to the system. Use of the service is subject to the licensing agreement, currently between the University of Western Ontario and Turnitin.com (http://www.turnitin.com).
</Text>
<Text style={styles.textRegular}>{'\n'}
Scholastic offences are taken seriously and students are directed to read the appropriate policy, specifically, the definition of what constitutes a Scholastic Offence, in the relevant section of the Academic Handbook:
http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Use of Electronic Devices:	</Text>
 
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Use of Personal Response Devices (“Clickers”): </Text>
 
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Policy on Repeating All Components of a Course: </Text>
Students who are required to repeat an Engineering course must repeat all components of the course. No special permissions will be granted enabling a student to retain laboratory, assignment, or test marks from previous years. Previously completed assignments and laboratories cannot be resubmitted by the student for grading in subsequent years.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Internet and Electronic Mail: </Text>
Students are responsible for regularly checking their Western e mail and the course web site (https://owl.uwo.ca/portal/) and making themselves aware of any information that is posted about the course.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Accessibility: </Text>
Please contact the course instructor if you require material in an alternate format or if any other arrangements can make this course more accessible to you. You may also wish to contact Services for Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any specific question regarding an accommodation.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Support Services: </Text>
{'\t  '}	Office of the Registrar, http://www.registrar.uwo.ca/
{'\n'}{'\t                                 '} Student Development Centre, http://www.sdc.uwo.ca/
{'\n'}{'\t                                 '}	Engineering Undergraduate Services, http://www.eng.uwo.ca/undergraduate/
{'\n'}{'\t                                 '}	USC Student Support Services, http://westernusc.ca/services/
          </Text>
          <Text style={styles.textRegular}>{'\n'}
Students who are in emotional/mental distress should refer to Mental Health @ Western, http://www.health.uwo.ca/mental_health/, for a complete list of options about how to obtain help.

      </Text>
    </View>
  </Page>
</Document>
);

