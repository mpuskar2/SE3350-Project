import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';

export default function Home() {
  const [user, setUser] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);
  const outlinesData = useRef([]);
  const commentData = useRef('');
  const approved = useRef('');
  const whoModified = useRef('');
  const needData = useRef(true);
  const navigate = useNavigate();
  const activeCourse = localStorage.getItem("courseName");
  const courseandversion = localStorage.getItem('cNameAndVer');

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      if (currentUser.displayName === "A") {
        setIsAdmin(true);
      }
    }
    else navigate("/")
  });

  useEffect(() => {
    if (needData.current) {
      needData.current = false;
      const db = getDatabase();
      const ocRef = ref(db, 'Outlines/' + courseandversion);
    
      onValue(ocRef, (snapshot) => {
        const data = snapshot.val();
        const fields = data.contents;
        outlinesData.current = fields;
        commentData.current = data.comments;
        approved.current = data.approvalStatus;
        whoModified.current = data.whoModified;
      });
    }
    else {
      const db = getDatabase();
      const ocRef = ref(db, 'Outlines/' + courseandversion);
    
      onValue(ocRef, (snapshot) => {
        const data = snapshot.val();
        const fields = data.contents;
        outlinesData.current = fields;
        commentData.current = data.comments;
        approved.current = data.approvalStatus;
        whoModified.current = data.whoModified;
      });
    }
  });

  function addComment(id, comment) {
    const db = getDatabase();
    const oRef = ref(db, 'Outlines/' + id);

    onValue(oRef, (snapshot) => {
      const data = snapshot.val();

      set(oRef, {
        approvalStatus: data.approvalStatus,
        comments: comment,
        contents: data.contents,
        courseName: data.courseName,
        modifiedTime: data.modifiedTime,
        versionNum: data.versionNum,
        whoModified: data.whoModified
      });
    });
  }
  
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
  },
  viewer: {
    width: window.innerWidth, // The pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  table: { 
    display: "table", 
    width: "100%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  table1: { 
    display: "table", 
    width: "40%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0, 
  },
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "29.3%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableColx: { 
    width: "4%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCol1: { 
    width: "70%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCol2: { 
    width: "30%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "5", 
    marginTop: 5, 
    fontFamily:'Times-Roman',
    fontSize:12,
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
<Text style={{textAlign:'center', fontSize:14}}>{activeCourse}: Course Title</Text>
</Text>
<Text style={styles.textBold}>
<Text style={{textAlign:'center'}}>Course Outline {outlinesData.current[0]}{'\n'}</Text>
</Text>

<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>Description: </Text>
{outlinesData.current[1]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold', paddingLeft:30}}>{'\n'}Instructor:	</Text>
{'\t'}    {outlinesData.current[2]}
{'\n'} {'\t                   '}    {outlinesData.current[3]}, 519-661-2111 ext. {outlinesData.current[4]}, UWO e-mail address as hyperlink
{'\n'} {'\t                   '}    Consultation hours: {outlinesData.current[5]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Academic Calendar Copy:	</Text>
{outlinesData.current[6]}
</Text> 
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Contact Hours:	</Text>
{outlinesData.current[7]} lecture hours, {outlinesData.current[8]} laboratory hours, {outlinesData.current[9]} tutorial hours, {outlinesData.current[10]} course.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Antirequisite:	</Text>
{outlinesData.current[11]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Prerequisites:	</Text>
{outlinesData.current[12]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Co-requisite:	</Text>
{outlinesData.current[13]}
</Text>
<Text style={styles.textRegular}>
Unless you have either the requisites for this course or written special permission from your Dean to enroll in it, you will be removed from this course and it will be deleted from your record. This decision may not be appealed. You will receive no adjustment to your fees in the event that you are dropped from a course for failing to have the necessary prerequisites.

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}CEAB Academic Units:	</Text>
Engineering Science {outlinesData.current[14]}%, Engineering Design {outlinesData.current[15]}%.

</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Required Textbook:	</Text>
{outlinesData.current[16]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Other Required References:	</Text>
{outlinesData.current[17]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Recommended References:	</Text>
{outlinesData.current[18]}
</Text>
<Text style={styles.textBold}>
{'\n'}General Learning Objectives (CEAB Graduate Attributes)
</Text>


<View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Knowledge Base</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[19]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Use of Engineering Tools</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[20]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Impact on Society and Environment</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[21]}</Text> 
          </View> 
      
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Problem Analysis</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[22]}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Individual and Team Work</Text> 
          </View>
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[23]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Ethics and Equity</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[24]}</Text> 
          </View> 
        </View> 
        
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Investigation</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[25]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Communication Skills</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[26]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Econmics and Project Management</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[27]}</Text> 
          </View> 
        </View>
        
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Design</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[28]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Professionalism</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[29]}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Life-Long Learning</Text> 
          </View> 
          <View style={styles.tableColx}> 
            <Text style={styles.tableCell}>{outlinesData.current[30]}</Text> 
          </View> 
        </View>
        
      </View>

<Text style={styles.textRegular}>
Notation: where x be I: Introductory, D: Intermediate, A: Advanced, or empty. I – The instructor will introduce the topic at the level required.  It is not necessary for the student to have seen the material before. D – There may be a reminder or review, but the student is expected to have seen and been tested on the material before taking the course. A – It is expected that the student can apply the knowledge without prompting (e.g. no review). {'\n'}
{'\n'}
</Text>

<View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Course Topics and Specific Leaning Outcomes</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>CEAB Graduate Attribute Indicators</Text> 
          </View> 
          
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>1. {outlinesData.current[31]}{'\n'}At the end of this section, students will be able to:{'\n'}{outlinesData.current[32]} </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[33]} </Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>2. {outlinesData.current[34]}{'\n'}At the end of this section, students will be able to:{'\n'}{outlinesData.current[35]} </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[36]} </Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>3. {outlinesData.current[37]}{'\n'}At the end of this section, students will be able to:{'\n'}{outlinesData.current[38]} </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[39]} </Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>4. {outlinesData.current[40]}{'\n'}At the end of this section, students will be able to:{'\n'}{outlinesData.current[41]} </Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[42]} </Text> 
          </View>        
        </View> 

      </View>  	

<Text style={styles.textBold}>
{'\n'}Evaluation
</Text>


<View style={styles.table1}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Course Component</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>Weight</Text> 
          </View> 
          
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Homework Assignments</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[43]}%</Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Quizzes</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[44]}%</Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Laboratory</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[45]}%</Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Midterm Test</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[46]}%</Text> 
          </View>        
        </View> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol1}> 
            <Text style={styles.tableCell}>Final Examination</Text> 
          </View> 
          <View style={styles.tableCol2}> 
            <Text style={styles.tableCell}>{outlinesData.current[47]}%</Text> 
          </View>        
        </View> 
      </View>

<Text style={styles.textRegular}>
To obtain a passing grade in the course, a mark of 50% or more must be achieved on the final examination as well as on the laboratory. A final examination or laboratory mark LESS THAN 50% will result in a final course grade of 48% or less.
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Homework Assignments:	</Text> 
{outlinesData.current[48]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Quizzes:	</Text> 
{outlinesData.current[49]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Laboratory:	</Text> 
{outlinesData.current[50]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Midterm Test:	</Text>
{outlinesData.current[51]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Final Examination:	</Text> 
{outlinesData.current[52]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Late Submission Policy:	</Text>
{outlinesData.current[53]}
</Text>
<Text style={styles.textRegular}>
<Text style={{fontFamily:'Times-Bold'}}>{'\n'}Assignment Submission Locker:	</Text>
Locker {outlinesData.current[54]} located on the second floor of TEB.
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

  return (
    <>
        <div>Home {user?.email}
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
      <div>
        <Link to="/alloutlines">
          <button>Back</button>
        </Link>
      </div>
      <div id='com'>
        <label>Comments:</label><br></br>
        {commentData.current}
      </div>
      {approved.current === "approved" && 
          <PDFDownloadLink document={<MyDocument />} fileName={"courseOutline.pdf"}>
            {({loading}) =>
              loading ? (
                <button>Loading Document...</button>
                ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
        }
      <PDFViewer className='pdf'>
            <MyDocument />
        </PDFViewer>
        <div>
          <label>GA Indicator Assessment:</label>
          {outlinesData.current[55]}
        </div>
        {isAdmin && <>
          <label>Add Comments:</label> <br></br>
          <textarea id='comments' rows='20' cols='60'></textarea> <br></br>
          <button onClick={() => {
            addComment(courseandversion, document.getElementById('comments').value);
            }}>Add</button>
        </>}
    </>
  )
}
