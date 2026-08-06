import { Component  } from "react";

class FeedbackOptions extends Component {

    render() {
        const {addGood, addNatural, addBad} = this.props
        return(
            <ul className='btn-list'>
      <li>
        <button type='button' onClick={ addGood}>Good</button>
      </li>
      <li>
        <button type='button' onClick={addNatural}>Netural</button>
      </li>
      <li>
        <button type='button' onClick={addBad}>bad</button>
      </li>
    </ul>
        )
    }
}

export default FeedbackOptions