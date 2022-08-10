import React from "react";
import AttendanceTable from "../Tables/AttendanceTable";
import { CSVLink } from "react-csv";
import { Container, Row, Col } from "reactstrap";
import apiUrl from "../../env";
//import * as moment from 'moment';
class Attendance extends React.Component {
  state = {
    students: [],
    classRoster: [],
    attendenceRecord: [],
    report: "",
    roster: "",
    absences: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({absences:''})
    let formattedRoster = this.getItems(this.state.roster.toLowerCase())
    this.takeAttendance(formattedRoster);

  }

  takeAttendance(roster) {
    let attendanceArray = [],notificationArr=[];
    roster.sort()
    console.log(roster);
    let id=0;
    for (let student of roster) {
      if (this.state.report.toLowerCase().includes(student)) {
        attendanceArray.push({id:id++, name: student, present: "x" });
      } else {
        attendanceArray.push({ id:id++,name: student, present: " " });
        notificationArr.push(student);
      }
    }
   this.setState({
      attendenceRecord: attendanceArray,
      absences: notificationArr,
    });
  }

  getItems(names) {
    console.log(typeof names)
    let classRoster = names.replace(/\t/g, " ").split("\n");

    this.setState({ classRoster });
    return classRoster;
  }

  updateState = (student) => {
    const itemIndex = this.state.students.findIndex(
      (data) => data.id === student.id
    );
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.students.slice(0, itemIndex),
      // add the updated item to the array
      student,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.students.slice(itemIndex + 1),
    ];
    this.setState({ students: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.students.filter((item) => item.id !== id);
    this.setState({ students: updatedItems });
  };

  componentDidMount() {
    //this.getItems();
  }

  componentWillUnmount() { }

  render() {
    let absences = "";
    let students = "";
    if (this.state.absences.length > 0) {
      console.log(this.state.absences);
      students = this.state.absences.map((item, idx) => {
        //  console.log(item)
        let studentStatement = `@${item} Please submit an absence request for today's session. http://bit.ly/AbsenceRequests`;
        return <div key={idx}>{studentStatement}</div>;
      });
    }

    return (
      <Container className="App">
        <Row>
          <Col>
            <h2>Attendance</h2>
            <form>
              <Row>
                <Col>
                <div className="form-group">
                  <label>Paste Class Roster Here (Student Health Sheet)</label>
                  <textarea
                    className="form-control"
                    id="roster"
                    rows="10"
                    name="roster"
                    onChange={this.handleChange}
                    value={this.state.roster}
                  />
                </div></Col>
                <Col>
                  <div className="form-group">
                    <label>Paste Zoom Report Here</label>
                    <textarea
                      className="form-control"
                      id="report"
                      rows="10"
                      name="report"
                      onChange={this.handleChange}
                      value={this.state.report}
                    /></div></Col>
              </Row>


              <div className="form-group row" >
                <div className="col-md-12" style={{display:'flex',justifyContent:'center'}}>
                  <button disabled={this.state.roster=='' && this.state.report==''}
                    className="btn btn-primary"
                    onClick={this.handleSubmit.bind(this)}
                  >

                    Take Attendance
                  </button>
                  
                </div>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{ margin: "20px 0" }}>Absence Notifications</h5>
            <div>
              <strong>For Staff Slack Channel</strong>
            </div>
            {absences}
            <div>
              <strong>For Student Slack Channel</strong>
            </div>
            {students}
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{ margin: "20px 0" }}>Attendance</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <AttendanceTable
              students={this.state.attendenceRecord}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.attendenceRecord.length > 0 && (
              <CSVLink
                filename={"attendance.csv"}
                color="primary"
                style={{ float: "left", marginRight: "10px" }}
                className="btn btn-primary"
                data={this.state.attendenceRecord}
              >
                Download CSV
              </CSVLink>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Attendance;
