import React from 'react'
import '../styles/Search.css'
import data from '../Data'
import Details from './Details'
import DropDown from './DropDown'


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
                    <Details filteredData={filteredData}></Details>
                </div>
            

        )
    }
}

export default Search