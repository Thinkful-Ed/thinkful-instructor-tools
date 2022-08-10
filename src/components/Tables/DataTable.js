import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import apiUrl from '../../env';

class DataTable extends Component {

    deleteItem = id => {
        let confirmDelete = window.confirm('Delete item forever?')
        if (confirmDelete) {
            fetch(apiUrl, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            })
                .then(response => response.json())
                .then(item => {
                    this.props.deleteItemFromState(id)
                })
                .catch(err => console.log(err))
        }

    }

    render() {
        let items = (<tr><td>No Items</td></tr>);
        if (this.props.students.length > 0) {
            items = this.props.students.map(item => {
             //   console.log(item)
                return (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.preferredname}</td>
                        <td>{item.email}</td>
                        <td>{item.slack}</td>
                        <td>{item.cohort}</td>
                        <td>
                            <div style={{ width: "110px" }}>
                                <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState} />
                                {' '}
                                <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Preferred Name</th>
                        <th>Email</th>
                        <th>Slack</th>
                        <th>Cohort</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
        )
    }
}

export default DataTable