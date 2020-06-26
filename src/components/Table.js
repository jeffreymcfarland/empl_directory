import React from 'react';
import TableEl from './TableEl';

function Table(props) {

    return(

        <div className='container-fluid mt-3'>
            <table className='table table-striped'>
                <thead className='thead-dark'>
                    <tr>
                    <th scope='col'>Image</th>
                    <th scope='col'><button>Name</button></th>
                    <th scope='col'><button>Phone</button></th>
                    <th scope='col'><button>Email</button></th>
                    <th scope='col'><button>DOB</button></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <TableEl 
                        image={user.image}
                        name={user.name}
                        phone={user.phone}
                        email={user.email}
                        dob={user.dob}
                        key={user.name}
                        />
                    ))}
                    
                </tbody>
            </table>
        </div>

    )
};

export default Table;