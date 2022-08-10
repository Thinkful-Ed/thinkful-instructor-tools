import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import apiUrl from '../../env'

class AddEditForm extends React.Component {
  state = {
    id: '',
    fname:'', lname:'', email:'', asm:'', location:'', slack:'', paymentplan:'', cohort:'',githuborg:'',preferredname:''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault();
    console.log(this.state);
    fetch(apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        preferredname: this.state.preferredname,
        email: this.state.email,
        asm: this.state.asm,
        location: this.state.location,
        slack: this.state.slack,
        paymentplan: this.state.paymentplan,
        cohort: this.state.cohort,
        githuborg:this.state.githuborg
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    console.log("Before Update",this.state);
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id:this.state.id,
        fname: this.state.fname,
        lname: this.state.lname,
        preferredname: this.state.preferredname,
        email: this.state.email,
        asm: this.state.asm,
        location: this.state.location,
        slack: this.state.slack,
        paymentplan: this.state.paymentplan,
        cohort: this.state.cohort,
        githuborg:this.state.githuborg
      })
    })
      .then(response => response.json())
      .then(item => {
            console.log("After update",item)
        if(Array.isArray(item)) {
         
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    console.log(this.props.item)
    if(this.props.item){
      const { id, fname, lname, email, asm, location, slack, paymentplan, cohort,githuborg,preferredname } = this.props.item
      this.setState({ id,fname, lname, email, asm, location, slack, paymentplan, cohort,githuborg,preferredname })
    }
  }

  render() {
   // console.log(this.state)
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">First Name</Label>
          <Input type="text" name="fname" id="first" onChange={this.onChange} value={this.state.fname === null ? '' : this.state.fname} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Last Name</Label>
          <Input type="text" name="lname" id="last" onChange={this.onChange} value={this.state.lname === null ? '' : this.state.lname}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">PreferredName</Label>
          <Input type="text" name="preferredname" id="preferredname" onChange={this.onChange} value={this.state.preferredname === null ? '' : this.state.preferredname}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
        <FormGroup>
          <Label for="phone">ASM</Label>
          <Input type="text" name="asm" id="phone" onChange={this.onChange} value={this.state.asm === null ? '' : this.state.asm}  placeholder="Suzy Smith" />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" name="location" id="location" onChange={this.onChange} value={this.state.location === null ? '' : this.state.location}  placeholder="City, State" />
        </FormGroup>
        <FormGroup>
          <Label for="hobby">Slack</Label>
          <Input type="text" name="slack" id="hobby" onChange={this.onChange} value={this.state.slack}  />
        </FormGroup>
        <FormGroup>
          <Label for="payment">Payment Type</Label>
          <Input type="text" name="paymentplan" id="payment" onChange={this.onChange} value={this.state.paymentplan}  />
        </FormGroup>
        <FormGroup>
          <Label for="cohort">Cohort</Label>
          <Input type="text" name="cohort" id="cohort" onChange={this.onChange} value={this.state.cohort}  />
        </FormGroup>
        <FormGroup>
          <Label for="cohort">Github Organization</Label>
          <Input type="text" name="githuborg" id="githuborg" onChange={this.onChange} value={this.state.githuborg}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm;