import React from 'react'

const ChildComponent = ({isUserLoggedIn, users}) => {
  return <div>{isUserLoggedIn ? (
    users.length > 0 ?
    users.map((users) => {
       return <React.Fragment key={users.id}>
            <p> {users.name} {users.age}</p> 
        </React.Fragment>
    })
    : ( <h1>no users in the system.</h1>)
    
  ) :
    <p>you are not authorized to see user list.</p>}
    </div>
};

export default ChildComponent