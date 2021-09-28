import React from 'react';

const Search = (props) => {
    return (
        <div>
            <div className="bg-warning">
                <form className="d-flex col-md-6 p-3 mx-auto ">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleSearch}/>
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search;