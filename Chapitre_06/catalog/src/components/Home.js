import React, { useState } from 'react'
// jSon files
import moviesList from "../movies.json";
// reactstrap 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Home = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggle = () => {
        setDropDownOpen(!dropDownOpen)
    };

    return(
        <div>
            <div className="d-flex justify-content-center input-group mb-3 mt-5">
                <Dropdown isOpen={dropDownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        {moviesList.map((movie, id) => (
                            <DropdownItem key={id} href={`/${movie.id}`}>{movie.title}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Home;