import { Component } from 'react'
import './App.css'
import Statistics from './components/Statistics'
import FeedbackOptions from './components/FeedbackOptions'
import Text from './components/Title'
import Section from './components/Section'

class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
}

addGood = () => {
  this.setState(() => ({good: this.state.good + 1}))
}
addNatural = () => {
  this.setState(() => ({neutral: this.state.neutral + 1}))
}
addBad = () => {
  this.setState(() => ({bad: this.state.bad + 1}))
}



render() {
  const {good, neutral, bad} = this.state

  const total = good + neutral + bad
  const positive = good > 0 ? good / total * 100: '0'

  return (
    <>
    <Section >
        <Text text={'Please leave feedback'}/>
        <FeedbackOptions addGood={this.addGood} addNatural={this.addNatural} addBad={this.addBad}/>
        {total ?  <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}/>: <p>No dani</p>}
       
    </Section>
   
   
     </>
  )
}
}

export default App
