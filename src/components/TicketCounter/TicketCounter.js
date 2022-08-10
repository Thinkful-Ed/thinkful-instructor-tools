import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataTable';
import { CSVLink } from "react-csv";
import apiUrl from '../../env';

class TicketCounter extends React.Component {

    state = {
        students: [],
        studentList: '',
        cohort: '',
        githuborg: '',
        tickets:0,
        requests:[]

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let chat =this.state.studentList.split("\n");
        this.parseStudents(chat);
    }

    parseStudents(tickets) {
        let ticketsArr=[];
        let ticketSenders = [];
        let requests = [];
        tickets.forEach(ticket=>{
          //  console.log(ticket)
            let item = {};
            if(ticket.includes('@')){
                ticketSenders.push(ticket);
            }
            if(ticket.includes('/create-ticket')){
               ticketsArr.push(ticket);
            }
            
        })
       for(let i =0; i < ticketsArr.length;i++)
       if(ticketsArr[i] && ticketSenders[i]){
           requests.push({
               student:ticketSenders[i],
               request:ticketsArr[i]
           });
       }
        this.setState({
            tickets:ticketsArr.length,
            requests:requests
        })
        

    }


    render() {

        let items = (<tr><td>No Items</td></tr>);
        if (this.state.requests.length > 0) {
            items = this.state.requests.map((item,idx) => {
             //   console.log(item)
                return (
                    <div key={idx}>
                        {item.student}  {item.request}
                    </div>
                )
            })
        }

        return (
            <Container className="App">
                <Row>
                    <Col>
                        <h2>Ticket Counter</h2>
                        <form>
                            <div className="form-group">
                                <label>Paste Support Channel Content Here</label>
                                <textarea className="form-control" id="studentList" rows="10" name="studentList" onChange={this.handleChange} value={this.state.studentList} />
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Load Students</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md='2'>
                    Number of Tickets: <strong>{this.state.tickets}</strong>
                    </Col>
                    <Col>
                        {items}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default TicketCounter;
