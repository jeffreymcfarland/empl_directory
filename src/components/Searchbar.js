import React from 'react';

function Searchbar(prop) {
    return (

        <div className='container-fluid pt-3 pb-3 searchBar'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <form onSubmit={prop.handleSubmit}>
                        <input 
                        className='form-control' 
                        type='text' 
                        placeholder='Search'
                        name='search'
                        onChange={e => prop.setSearch(e.target.value)}
                        ></input>
                    </form>
                </div>
                <div className='col-4'></div>
            </div>
        </div>

    )
};

export default Searchbar;