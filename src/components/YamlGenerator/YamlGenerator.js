import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import avoidExample from "../../resources/avoid-example.png";
import { DateTime } from 'luxon';

class YamlGenerator extends React.Component {
  state = {
    students: [],
    courseCode: "dev-301",
    cohortNum: 58,
    startDate: new Date().toISOString(),
    workshopUrl: "https://rebrand.ly/WORKSHOP",
    timezone: "EST",
    breakWeek1: 5,
    breakWeek2: 13,
    studentList: "",
    slackHandles: "",
    githubUrl: "https://github.com/our-cool-cohort"
  };

  componentWillUnmount() { }
  onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "rewriteInputPath") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  generateYaml = (e) => {
    console.log(this.state.startDate);
    e.preventDefault();
    let students = this.state.studentList
      .trim()
      .replace("	", " ")
      .split("\n")
      .sort();
    var nameList = students.map(function (item) {
      return item.trim();
    });
    let output = [];
    for (let i = 0; i < nameList.length; i++) {
      let name = nameList[i].split("	");
      console.log(nameList[i], name, name.length);
      if (name.length === 1) {
        name = name[0].split(" ");
      }
      let firstName = name[0];
      let lastName = name[1] || ' ';
      let lastInitial = lastName[0];
      if (this.checkIfDups(firstName, nameList)) {
        output[
          i
        ] = `  - name: ${firstName} ${lastName}\n     shortName: ${firstName}${lastInitial}\n`;
      } else {
        output[i] = `  - name: ${firstName} ${lastName}\n`;
      }
    }
    console.log(output);
    let date = new Date(this.state.startDate);
    let [month, day, year] = date.toLocaleDateString("en-US").split("/");
    let formattedDate = `${month - 10 ? '0' + month : month}-${parseInt(day) + 1}-${year.substring(2)}`;
    console.log(formattedDate)
    this.setState({ students: output });
  };

  checkIfDups(firstName, list) {
    let counter = 0;
    console.log(firstName, list);
    if (list) {
      for (let i = 0; i < list.length; i++) {
        let fname = list[i];
        if (fname.includes(firstName)) {
          counter++;
        }
      }
    }
    return counter > 1;
  }

  courseCodes = {
    'dev-301': {
      name: 'Engineering',
      shortCode: 'ei'
    },
    'data_analytics-301': {
      name: 'Data Analytics',
      shortCode: 'dai'
    },
    'ux-301': {
      name: 'User Experience',
      shortCode: 'uxi'
    }
  }

  render() {
    let dateString = DateTime.fromISO(this.state.startDate).toFormat('MM-dd-yy');
    let slackChannel = `#${this.courseCodes[this.state.courseCode].shortCode}-${dateString}`
    return (
      <Container>
        <h2>YamlGenerator</h2>
        <Form onSubmit={this.generateYaml}>
          <FormGroup>
            <Label for="courseCode">Course Code</Label>
            <select
              id="courseCode"
              name="courseCode"
              className="form-control"
              onChange={this.onChange}
              value={this.state.courseCode}
            >
              {Object.keys(this.courseCodes).map((code) => (
                <option value={code} key={code}>{code}</option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="cohortNum">Cohort Number</Label>
            <Input
              type="text"
              name="cohortNum"
              id="cohortNum"
              onChange={this.onChange}
              value={this.state.cohortNum}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              onChange={this.onChange}
              value={this.state.startDate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="workshopUrl">Workshop URL</Label>
            <Input
              type="url"
              name="workshopUrl"
              id="workshopUrl"
              onChange={this.onChange}
              value={this.state.workshopUrl}
            />
          </FormGroup>
          <FormGroup>
            <Label for="discordServerUrl">Discord URL</Label>
            <Input
              type="url"
              name="discordServerUrl"
              id="discordServerUrl"
              onChange={this.onChange}
              value={this.state.discordServerUrl}
            />
          </FormGroup>
          {this.state.courseCode === 'dev-301' && (
            <>
              <FormGroup>
                <Label for="githubUrl">GitHub Repo URL (EI Only)</Label>
                <Input
                  type="url"
                  name="githubUrl"
                  id="githubUrl"
                  onChange={this.onChange}
                  value={this.state.githubUrl}
                />
              </FormGroup>
            </>
          )}
          <FormGroup>
            <Label for="breakWeeks">BreakWeeks</Label>
            <Row>
              <Col md="2">
                <Input
                  type="text"
                  name="breakWeek1"
                  id="breakWeek1"
                  onChange={this.onChange}
                  value={
                    this.state.breakWeek1 === null ? "" : this.state.breakWeek1
                  }
                />
              </Col>
              <Col md="2">
                <Input
                  type="text"
                  name="breakWeek2"
                  id="breakWeek2"
                  onChange={this.onChange}
                  value={
                    this.state.breakWeek2 === null ? "" : this.state.breakWeek2
                  }
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Label for="studentList">Student List</Label>
            <textarea
              className="form-control"
              type="text"
              name="studentList"
              id="studentList"
              onChange={this.onChange}
              value={
                this.state.studentList === null ? "" : this.state.studentList
              }
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>

        <Row>
          <Col>
            <div className="yaml segment">
              <div>courseCode: {this.state.courseCode}</div>
              <div>cohortNumber: {this.state.cohortNum}</div>
              <div>
                students:{" "}
                <div className="students-yaml">{this.state.students}</div>
              </div>
              <div></div>
              {/*this.state.rewriteInputPath === true && (
                <div>
                  flags:
                  <div>&nbsp;&nbsp;rewriteInputPath:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;from: master-syllabus</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;to: master-syllabus-groups</div>
                </div>
              )*/}
              <div>oddStudent: pair</div>
              <div>startDate: {this.state.startDate}</div>
              <div>workshopUrl: {this.state.workshopUrl}</div>
              <div>discordServerUrl: {this.state.discordServerUrl}</div>
              {this.state.courseCode === 'dev-301' && (<div>githubUrl: {this.state.githubUrl}</div>)}
              <div>timezone: ET</div>
              <div>breakWeeks:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- {this.state.breakWeek1}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;- {this.state.breakWeek2}</div>
            </div>
            <div className="slackReminders segment">
              <div>
                <strong># Slack /remind command for morning Workshop</strong>
              </div>
              <div>
                # /remind {slackChannel} "Morning workshop
                starting in 10 minutes - {this.state.workshopUrl}" at 9:50AM{" "}
                {this.state.timeZone} every weekday.
              </div>
              <div>
                <strong># Slack /remind command for Lunch</strong>
              </div>
              <div>
                # /remind {slackChannel} "Lunch Time!" at 12:45PM{" "}
                {this.state.timeZone} every weekday.
              </div>
              <div>
                <strong>
                  # Slack /remind command for afternoon Workshop
                </strong>
              </div>
              <div>
                # /remind {slackChannel} "Afternoon session
                starting in 10 minutes - {this.state.workshopUrl}" at 1:20PM{" "}
                {this.state.timeZone} every weekday
              </div>
              <div>
                <strong># Slack /remind command before end of TA session</strong>
              </div>
              <div>
                # /remind {slackChannel} "TA support is available
                until 5 PM Eastern. Please submit tickets at least 15
                minutes before EOD" at 4:30PM {this.state.timeZone} every
                weekday
              </div>
              <div>
                <strong>
                  # Slack /remind command at end of TA session
                </strong>
              </div>
              <div>
                # /remind {slackChannel} "Support is
                finished for the day, but you can still get help from
                ThinkChat using each checkpoint in your curriculum" at 5PM{" "}
                {this.state.timeZone} every weekday
              </div>
            </div>
            <h3>Example welcome message to class</h3>
            <div className="welcome segment">
              <p>Hello and welcome to {this.courseCodes[this.state.courseCode].name} Immersion!</p>
              <p>
                I will be your instructor for the first 6 weeks of your
                program. The first week of your syllabus has now been posted,
                and you may find it by looking at your student dashboards.
                Please pay special attention to all items posted on Sunday's
                dashboard, including opening and reading the absence form
                which contains details of Thinkful's absence policy throughout
                your course. Also, please read through the document about
                working in teams: https://rebrand.ly/group-work-protocol . You
                can also find this and other helpful links in the "Hover here
                for helpful links!" section at the top of this slack channel.
              </p>
              {this.state.courseCode === 'dev-301' && <p>
                Throughout the course, when I write demo code during lecture,
                that demo code will be posted at {this.state.githubUrl}. You
                can bookmark that link now to be able to find reference code
                throughout the course.
              </p>}
              <p>
                Also, please register for our course BlueJeans video session
                here: {this.state.workshopUrl} You need to register with your
                first name, last name and email address to be able to attend
                class. You only need to register once.
              </p>
              <p>I look forward to meeting you all on Monday!</p>
            </div>
            <h3>Note for TA Channel</h3>
            <div className="segment">
              <p>Good Afternoon @everyone !</p>
              <p>
                Here is the link for {this.courseCodes[this.state.courseCode].name} Immersion
                cohort {this.state.cohortNum} workshop on Monday: {this.state.workshopUrl}
              </p>
              <p>
                Please join at the start of your shift at 11am EST and be
                prepared to introduce yourself to the students. During this
                workshop, students will create practice tickets.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              How to use avoid keyword to make sure students who have requested
              not to be paired with other students aren't paired.
            </h5>
            <img src={avoidExample} alt="example of avoid function" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default YamlGenerator;
