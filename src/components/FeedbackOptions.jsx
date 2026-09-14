

function FeedbackOptions ({addGood, addNatural, addBad}) {



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

export default FeedbackOptions