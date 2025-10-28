import React from 'react'
import DemoProps from './DemoProps'

const App2 = () => {
    const users= [
        {name:"Sans", age:20, city:"Pune"},
          {name:"riya", age:20, city:"Pone"},
      {name:"Shri", age:20, city:"Mumbai" }
    ]
  return (
    <div>App2
        <h1>Demo props</h1>
        <p>claiing the properties from the child.</p>
        <table border="3px">
            <thead>
                <DemoProps th1="Name" th2="age" th3="city"/>

            </thead>
            <tbody >
                <DemoProps th1="sanskrti" th2="20" th3="pune"/>


                 </tbody>
                 {users.map((user, index )=>(
                    <DemoProps 
                    key = {index}
                    name= {user.name}
                    age={user.age}
                    city={user.city}
                    />
                    
                 ))}
        </table>
    </div>
     
  )
}

export default App2