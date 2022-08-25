import React from 'react'

const SomeComp = () => {
     const userArray = [
      {name: "mishka", age: 20, id: 1},
      {name: "gigi", age: 22, id: 2},
     ];
     
     return (
      <div >
        {userArray.map((user)=>{
          const { name, age, id} = user;
          return(
          <div key={id}>
            <p>{name}</p>
            <p>{age}</p>
          </div>
          )
 })}
      </div>
     )
  
};

export default SomeComp

const Button = (props) => {
  console.log("props", props)
    return (
       <div style={{backgroundColor: "yellow", color: "red",}}>
        {props.children}
       </div>
    )
}