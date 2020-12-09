import React from 'react'
import { Table } from 'react-bootstrap'
import '../styles/Search.css'
import data from '../Data'
import { Link } from 'react-router-dom'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    data = (e) => {
        this.setState({ search: e.target.value })
    }
    renderEmploy = (emp) => {
        const { search } = this.state;
        if (search in data) {

        }
    }

    render() {

        const { search } = this.state;
        const lowercasedSearch = search.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedSearch)
            );
        })
        return (
            <div className="bg-light">
                <div className="container" >
                    <div className="searchBox">
                        <input
                            type="text"
                            value={this.state.search}
                            placeholder="Search task"
                            onChange={this.data}
                            id="searchBox"
                        />
                        <i class="fa fa-search search-icon"></i>
                    </div>
                    <div >
                    </div>
                    <div className="p-5">
                        <Table className=" striped bordered hover">
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Contractor Name</th>
                                    <th>Task Number</th>
                                    <th>Assigned To</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {filteredData.map(item => (
                                    <tr>
                                        <td>{item.projectName}</td>
                                        <td> {item.ContractorName}</td>
                                        <td>{item.TaskNumber}</td>
                                      <Link className="link" to="index.html"> <td>{item.AssignedTo}</td></Link>
                                        <td className={item.status==="completed"?"text-success":item.status==="ongoing"?"text-warning":"text-danger"}>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Search