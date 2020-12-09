import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Resources(props) {
    const filteredData = props.filteredData
    return (
        <div>
            <div className="p-5">
                <Table className=" striped bordered hover" variant="light">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Company short Name</th>
                            <th>company code</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {filteredData.map(item => (
                            <tr>
                                <td>{item.projectName}</td>
                                <td> {item.ContractorName}</td>
                                <td>{item.TaskNumber}</td>
                                <Link className="link" to="arun.html"> <td>{item.AssignedTo}</td></Link>
                                <td className={item.status === "completed" ? "text-success" : item.status === "ongoing" ? "text-warning" : "text-danger"}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Resources