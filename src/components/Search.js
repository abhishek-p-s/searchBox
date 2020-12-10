import React from 'react'
import '../styles/Search.css'
import data from '../Data'
import Details from './Details'
import DropDown from './DropDown'
import { MDBCol } from "mdbreact";


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
            <div className="container" >
                <div className="searchBox">
                    <DropDown filteredData={filteredData}></DropDown>
                    <MDBCol md="6">
                        <input className="form-control" type="text" placeholder="Search task" value={this.state.search}
                            aria-label="Search"
                            onChange={this.data} />
                    </MDBCol>
                </div>
                <div >
                </div>
                <Details filteredData={filteredData}></Details>
            </div>
        )
    }
}

export default Search