// import React, { Component } from 'react'

// export default class Square extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: null,
//     }
//   }

//   render() {
//     return (
//       <button
//         className='square'
//         onClick={() => {
//           this.setState({ value: 'X' })
//           console.log('click')
//         }}>
//         {this.state.value}
//       </button>
//     )
//   }
// }

import React from 'react'

export default function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}
