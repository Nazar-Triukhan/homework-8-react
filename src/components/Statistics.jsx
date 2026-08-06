import { Component } from "react";

class Statistics extends Component{


    render() {
        const {good, neutral, bad, total, positive} = this.props
        return(
            <>

                <h2>Statistics</h2>
             <ul className='statistics-list'>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutural: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {Math.floor(positive) }%</p>
      </li>
    </ul>
            </>
        )
    }
}

export default Statistics