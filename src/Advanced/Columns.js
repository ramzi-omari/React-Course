import React from 'react'

function Columns() {
    const items =['lool']
    return (
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.id}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Ramzi</td>
        </React.Fragment>
    )
}

export default Columns
