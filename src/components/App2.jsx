import React from 'react'
import DemoProps from './DemoProps'

const App2 = () => {
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
        </table>
    </div>
     
  )
}

export default App2