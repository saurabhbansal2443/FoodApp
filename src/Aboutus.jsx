import React from 'react'

// const Aboutus = () => {
//   return (
//     <div>
//       <h1>About us </h1>
//       <h2> Hey I am about us page </h2>
//     </div>
//   )
// }

// export default Aboutus

// extends is inhertitence 

class Aboutus extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props.name)
  }
  render() {
    return (
          <div>
            <h1>{this.props.name}</h1>
            <h1>About us </h1>
            <h2> Hey I am about us page and I am also class component  </h2>
          </div>
        )
  }
}

export default Aboutus


