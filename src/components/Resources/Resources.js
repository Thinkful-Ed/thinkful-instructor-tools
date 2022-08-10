import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import apiUrl from '../../env';
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';
import rubericVideo from '../../resources/view_a_ruberic(admins).mp4';
class Resources extends React.Component {
    state = {
        students: []
    }

    componentDidMount() {
        this.getItems();
    }


    generateYaml(e) {
        e.preventDefault();
        console.log("generating");

    }

    getItems() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(students => {
                console.log(students);
                this.setState({ students })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <h2>Helpful Instructor Resources</h2>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Points of Contact</CardHeader>
                            <CardBody>
                                <CardTitle tag='h5'>Careers/Mentors/ASMs</CardTitle>
                                <CardText>Alanna Ellis & Ashley Murry (ASMs)</CardText>
                                <CardTitle tag='h5'>Student's who can't put in a ticket</CardTitle>
                                <CardText>Alexandra Taylor (@Alexandra Taylor) Synchronous Programs Operations Manager</CardText>
                                <CardTitle tag='h5'>Interviews & TA Staffing</CardTitle>
                                <CardText>Derrick Foust (@Derrick Foust) Senior Educator Success Manager</CardText>
                                <CardTitle tag='h5'>Syllabus Generation & Student Auditor</CardTitle>
                                <CardText>Richard Greenhill</CardText>
                                <CardTitle tag='h5'>Curriculum updates</CardTitle>
                                <CardText>Rush Cosgrove & Daphne Isom</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>Curriculum Writing Resources</CardHeader>
                            <CardBody>
                                <p><a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/16d0e8700eb346509ef79ea95a0ef7e0">How to begin your review</a></p>
                                <p><a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/6e309058a8354c50b758905df94d768e">How to submit a review via PR or issue</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>Useful Links</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg.atlassian.net/secure/RapidBoard.jspa?rapidView=1646&projectKey=TFINS&selectedIssue=TFINS-289">Jira (Keep track of Todos)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-portal1.sharepoint.com/default.aspx">Chegg Company Calendar</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-my.sharepoint.com/:x:/p/tauhida/ETnbziQmH6hMtz0PVXckRrgBOgEdKJSlayVg56dEQKMfgw">Cohort Module Completion Doc (EI)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1p0mXIIIC68RCw4UgXLt3Z-ZsyY2eHM3XRlEqXv6ikX8/edit?ts=5ef21b21#gid=168336559">Cohort Staffing</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Thinkful-Ed/full_time_career_path">Thinkful Github (Yamls, Syllabi & Master Syllabi)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg.sharepoint.com/sites/GOComm/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9jaGVnZy5zaGFyZXBvaW50LmNvbS86Zjovcy9HT0NvbW0vRWxIa3hpdmJUODFObUV5OWo4RTVidmdCTnNTWENOX09Lcms4ZTFOLWFJOHEwZz9ydGltZT1vWFFQWHRsRjJFZw&id=%2Fsites%2FGOComm%2FShared%20Documents%2FThinkful%20Accessible%20Comms%2FZoom%20Webinar%20Documentations%2FZoomWebinars-CreatingZoomWebinars%2Epdf&parent=%2Fsites%2FGOComm%2FShared%20Documents%2FThinkful%20Accessible%20Comms%2FZoom%20Webinar%20Documentations">How to Create a Zoom Webinar</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://lark.thinkful.com/students/">Lark (see student dashboards/enrollment status)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1_4sUKlpGaqynWpVW-DTE97RocVj2N0fmqWThkH_rT_s/edit#gid=0">Instructor Peer Review Sheet</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1I3qjTxLL1ONiK6v-ZAAOYScLLIDiTdRohY0wbpyglWw/edit#heading=h.xqnu31mn5s8b">Instructor Peer Review Instructions</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-my.sharepoint.com/:x:/p/emma/EVfx_RaoHJ5Gh0bqFEfogOMBd3G7MwjOeqfg-s0GxUt2qQ?e=QS567v">Student Roster</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Thinkful-Ed/ei-shopping-list-solutions">Shopping List Starter Repo (EI)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://thinkful.slides.com/users/sign_in">Slides</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-my.sharepoint.com/:f:/p/tauhida/EgpyabZsgy5Mhz8yuIBwc4IBahNn7lrwA366oyVmQ4NOlQ?e=CeunqK">Student Health Docs</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://lark.thinkful.com/courses/43/tickets/">Student Tickets (EI)</a></p>
                                     <p><a target="_blank" rel="noopener noreferrer" href="https://student-auditor.herokuapp.com/">Student Auditor</a></p>
                                     <p><a target="_blank" rel="noopener noreferrer" href="https://lark.thinkful.com/student-progress/">Student Progress</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://ftgen-trigger.herokuapp.com/">Syllabus Generator</a></p>                                   
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-my.sharepoint.com/:x:/r/personal/tauhida_chegg_com/_layouts/15/guestaccess.aspx?share=ETwzAHpJQrdDvccTzrF9hDIB_-7wY3xo9ARL3FtoG2l6bA">Audit Spreadsheet</a></p>
                                    
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://dashboard.thinkful.com/">Thinkful Courses Dashboard (Information about courses, modules, grading ruberics and checkpoints)</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg.atlassian.net/wiki/spaces/TFPED/pages/386075112/CMS+Content+Reader">Thinkful PED</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Thinkful-Ed/ei-sample-bookmarks-app">Thinkful Bookmarks App</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg.sharepoint.com/sites/InstructionalDesign/SitePages/Curriculum%20Feedback%20and%20Project%20Requests.aspx">Put in Tickets about Qualified.io and Curriculum</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg.atlassian.net/wiki/spaces/TFPED/pages/175412174/Bugs+Cleanup">Put in Tickets about Sessions</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://chegg-my.sharepoint.com/personal/ttaylor_chegg_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fttaylor%5Fchegg%5Fcom%2FDocuments%2FCohort49Polls&originalPath=aHR0cHM6Ly9jaGVnZy1teS5zaGFyZXBvaW50LmNvbS86ZjovcC90dGF5bG9yL0VxRDVmaUdKaFhWQmlzYmtVYWF0ODZNQkFzYm0wUHdLc3BFR056cHBJMjJrbFE_cnRpbWU9YjdpRHlwWEgyRWc">Upload Poll Results</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://gist.github.com/oampo/da53e70f798dccc9923616d000c820ff">Decoder Capstone</a></p>


                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Grading Ruberics</CardHeader>
                            <CardBody>
                                <CardTitle tag='h5'>How to View a Ruberic</CardTitle>

                                <Player
                                    playsInline
                                    // poster="/assets/poster.png"
                                    src={rubericVideo}
                                />

                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>How to Impersonate a Student</CardHeader>
                            <CardBody>
                                <CardTitle tag='h5'>Impersonate a student to see checkpoint submissions</CardTitle>
                                <CardText>(find student email from their dashboard) <p>How to impersonate a student: <a href="https://accounts.thinkful.com/admin/impersonate/student_email">Impersonate</a></p>
                                    <p>Make sure you unimpersonate after you are done
                                    <a href="https://accounts.thinkful.com/admin/unimpersonate"> Unimpersonate</a></p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Reminder about ASM Changes</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p>Hello EI Instructors,</p>
                                    <p>In order to ensure that students as well as staff (instructors, TAs, ASMs, ops managers) are supported well as we can smoothly run very large cohorts, Aaron is taking an initiative to have cohort specific ASMs. For EI, this will start with the 11/9 EI C47 cohort and we will use this cohort as an opportunity to refine this process.</p>
                                    <p>@Austen Weinhart and @Alanna Ellis will be the ASMs to support C47 starting 11/9.</p>

                                    <p>Our cohort history shows that there are always a higher number of pings than normal during the first week of any program. We would like to reduce the number of pings in the staff channel by minimizing (with the hope of eliminating) pings due to absences and any other non-emergencies in the staff channel. </p>

                                    <p>To achieve this goal of lessening the information posted in the staff channel, reducing the risk of losing valuable information on the slack channel, and have a better place to document and take decisions based on documented information, with the help of the EI instructors, we would like to establish the following - </p>
                                    <ul>
                                       <li> Austen and Alanna are working hard to ensure that students are aware of what an absence is defined as and withdrawal occurs if there is/are absence(s). These expectations have been clearly set with students multiple times. For C47 (and eventually all other cohorts coming after C47), you should assume that the expectations around absences is all made clear to students before they start by the ASMs.</li>
<li>If you see a student absent by our absence policy (consistently late in workshops, not in pair session, not responding to your call within 45 minutes of class time), follow your standard procedure of pinging the student to see if the student is absent or not, establish that there is an absence and ask them to fill out the absence form. After that, please update the health chart. Please DO NOT ping Austen, Alanna or any ASMs with the list of students who are absent in the staff channel. Update the health chart and provide necessary notes there. An updated health chart at the end of the day will be the source of truth for absences. This is where Austen and Alanna will go to find the list of students that are absent. </li>
                                        <li>Austen and/or Alanna will update the staff channel with any administrative changes that needs to happen for the instructor to look at prior to class the next day. Please give them this time to handle all the work that they need to do. This also means that health charts need to be updated at a reasonable time (especially for attendance) so she has the time to take necessary actions. I am going to ask you to complete updating the attendance column by 4 pm EST every day. </li>
                                        <li>Please be sure to put comments in the comment section of the health sheet. When we have to take any actions for student success (absences, withdrawals, SPA etc.), we need to justify them, and your comments plays a vital role in ensuring student success.  For example, if a student is absent, is it for the whole day / morning session only / afternoons session only etc.</li>
                                        <li>To sum up, in this workflow, there should not be any ping to Austen, Alanna (or any ASMs) in the staff channel about absences. </li>
                                        <li>Any other concerns you have on students should also go to the health sheet and Austen / Alanna will be getting information from there and taking the appropriate steps and providing you updates in the slack channel. </li>
                                        <li>Our goal is to use a good process to draw Austen and Alanna's attention and with their help come to a solution for the students. The health chart should be the source of truth for student status. All ASMs has access to this. Therefore, if Austen and Alanna need to draw their attention, they will do so. You don't need to send messages to them. If you need to follow up on a student status that you have reported in the health chart, please use emails as much as possible, and for things that can't wait and there is an immediate need, please use slack. </li>
                                        <li>All ASMs, instructors and students will be using the weekly calendar (Emma has already send this to you and posted in the instructor channel) as the only source of truth for student progress, good standing etc. Please be sure to review this calendar for your section and use only this and point all students to this as their only schedule / calendar. </li>


                                    </ul>

<p>We are looking for your continued feedback and help in making this process a success. I will be asking you for updates in our weekly meetings to hear your thoughts. Also, Austen and Alanna is very interested in a bi-weekly meeting with the C47 instructors to make sure the 2 teams are in sync. The first meeting will be set up by @Aaron Lamphere, so expect that invitation from him. After the first meeting is completed, @Rich Greenhill will take the lead for this meeting to continue at bi-weekly intervals so there is communications between ASM and EI instructor teams to discuss and ensure student success.</p>
<p>Again, this is launching11/9 for C47 and we will be continuing this process going forward for other cohorts with some tweaks as we learn from C47.</p>
<p>Let me know if you have any questions or any clarifications needed. Thank you for all your help in making this process a success.</p>


</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Resources;
