import React from 'react';

function Table() {
    return(

        <div className='container-fluid mt-3'>
            <table className='table table-striped'>
                <thead className='thead-dark'>
                    <tr>
                    <th scope='col'>Image</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>555-555-5555</td>
                        <td>mark@email.com</td>
                        <td>11-29-1974</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>555-555-5555</td>
                        <td>mark@email.com</td>
                        <td>11-29-1974</td>
                    </tr>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>555-555-5555</td>
                        <td>mark@email.com</td>
                        <td>11-29-1974</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
};

export default Table;