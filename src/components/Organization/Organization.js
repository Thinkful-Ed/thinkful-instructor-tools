import React from "react";
import { Table, Button, Container, FormGroup, Label, Input } from 'reactstrap';
import apiUrl from '../../env';
//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
class Organization extends React.Component {
    state = {
        students: [],
        token: '', 
        error:''
    }

    componentDidMount() {
        this.getItems();
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

    componentWillUnmount() {

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    inviteAll() {
        let sentStudents = [];
        console.log(this.state)
        if (this.state.students.length > 0 && this.state.token !== '') {
            this.state.students.forEach(student => {
                setTimeout(()=>{
                fetch(`https://api.github.com/orgs/${student.githuborg}/invitations`, {
                     method: 'post',
                     headers:{
                        'Authorization': `token ${this.state.token}`,
                        'accept':'application/vnd.github.v3+json'
                    },
                     body: JSON.stringify({
                         "email": student.email,
                         "role": "direct_member",
                         "org": `${student.githuborg}`
                     })
                 }).then(data => {
                     if (data.ok) {
                         console.log(student)
                         student.invite = "yes";
 
                     } else {
                         student.invite = "no";
                     }
                     sentStudents.push(student);
                     console.log(sentStudents);
                     this.setState({ students: sentStudents })
                 }).catch((error) => {
                     console.error('Error:', error);
                 });
                },1000);
            })
        } else{
            this.setState({error:"Please Enter your github Token"})
        }
    }

    inviteOne(student) {
        let sentStudents = [];
        fetch(`https://api.github.com/orgs/${student.githuborg}/invitations`, {
            method: 'post',
            headers:{
                'Authorization': `token ${this.state.token}`
            },
            body: JSON.stringify({
                "email": student.email,
                "role": "direct_member"
            })
        }).then(data => {
            if (data.ok) {
                console.log(student)
                student.invite = "yes";

            } else {
                student.invite = "no";
            }
            sentStudents.push(student);
            //console.log(sentStudents);
         //   this.setState({ students: sentStudents })
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        let items = (<tr><td>No Items</td></tr>);
        if (this.state.students.length > 0) {
            items = this.state.students.map(item => {
                console.log(item)
                let invite = "";
                console.log(item.invite);
                if (item.invite === "yes") {
                    invite = (<td>{item.invite} </td>);
                } else {
                    invite = (<td><Button color="primary" onClick={() => this.inviteOne(item)}>Resend</Button></td>);
                }

                return (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.cohort}</td>
                        <td>{item.githuborg}</td>
                        {invite}
                    </tr>
                )
            })
        }
        return (
            <Container>
                <h2>Organization</h2>
                <FormGroup>
                    <Label for="token">Github Token</Label>
                    <Input type="text" name="token" id="token" onChange={this.onChange} value={this.state.token} />
                </FormGroup>
                {this.state.error !== '' && 
                <div className="alert alert-danger" role="alert">
                    {this.state.error}
                </div>
                }
                <Button color="primary" onClick={() => this.inviteAll()}>Invite All</Button>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Cohort</th>
                            <th>Organization</th>
                            <th>Invite Sent?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </Container>);
    }
}

export default Organization;
