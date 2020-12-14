import React from 'react'

const Hello = () => {
    // with JSX
    return(
        <div>
            <h1 id= 'idhello' className='dumClass'>Hello ram</h1>
        </div>
    )
    // without JSX
    return React.createElement('div',null,
    React.createElement('h1',{id:'idhello', className: 'dumClass'},'Hello Ramzi'))

   
}
export default Hello