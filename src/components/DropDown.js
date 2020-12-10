import React, { useState } from "react";
import Select from "react-select";
import '../components/DropDown.css'

import Search from './Search'
import Resources from './Resources'
import Contract from "./Contract";


const options = [
    { value: 'Projects', label: 'Projects' },
    { value: 'Contracters', label: 'Contracters' },
    { value: 'Resources', label: 'Resources' },
];

export default function DropDown(props) {
    const [selectedOption, setSelectedOption] = useState([]);
    return (
        <div >
            <Select className="list"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                value={selectedOption}
            />
            {
                selectedOption.value === "Project" ? <Search></Search> : selectedOption.value === "Contracters" ?
                    <Contract filteredData={props.filteredData}></Contract> : selectedOption.value === "Resources" ?
                        <Resources filteredData={props.filteredData}></Resources>:""
            }
        </div>
    );
}
