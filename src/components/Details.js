import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Details(props) {
    const filteredData = props.filteredData
    return (
        <div>
            <div className="p-5">
                <Table className=" striped bordered hover" variant="light">
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
                                <td key={item.projectName}>{item.projectName}</td>
                                <td> {item.ContractorName}</td>
                                <td>{item.TaskNumber}</td>
                                <Link className="link" to=""> <td>{item.AssignedTo}</td></Link>
                                <td className={item.status === "completed" ? "text-success" : item.status === "ongoing" ? "text-warning" : "text-danger"}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Details