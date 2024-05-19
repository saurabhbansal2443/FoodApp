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
    console.log(props.name)
    this.state = {
      count: 10,
      count2: 99,

    }
  }


  componentDidMount(){
    let  getData = async ()=>{
      let data = await fetch(`https://fakestoreapi.com/products/1`)
      let obj = await data.json();
  
     
     console.log(obj , );
  }
    getData()
  }



  


  render() {
 
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button className="border-2 border-red-600 p-2" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increse </button>
        <h1 className="border-2 border-green-500 p-3 mx-2 inline">{this.state.count}</h1>
        <button className="border-2 border-red-600 p-2" onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decrese</button>
        {/* <h1>{this.state.count2}</h1> */}
        <h1>About us </h1>
        <h2> Hey I am about us page and I am also class component  </h2>
      </div>
    )
  }
}

export default Aboutus


