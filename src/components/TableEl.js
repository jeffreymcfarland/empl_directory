import React from 'react';

function TableEl(props) {
    return(

        <tr>
            <th scope='row'><img alt='Headshot' src={props.image} className='img-fluid' /></th>
            <td>{props.name} </td>
            <td>{props.phone} </td>
            <td>{props.email} </td>
            <td>{props.dob} </td>
        </tr>    

    )
};

export default TableEl;