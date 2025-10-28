import React from 'react'

const DemoProps = () => {
  return (
     <>
     <tr>
        <td style={styles.container}>{props.name }

        </td>
         <td style={styles.container}>{props.age }

        </td>
         <td style={styles.container}>{props.city }

        </td>
     </tr>
     </>
  )
}

const styles={
    container:{
        background:'#f0f8ff',
        fontSize:'16px'
    }
}

export default DemoProps