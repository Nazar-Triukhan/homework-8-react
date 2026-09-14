import { useState } from "react";
import "./App.css";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Text from "./components/Title";
import Section from "./components/Section";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };
  const addNatural = () => {
    setNeutral(neutral + 1);
  };
  const addBad = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const positive = good > 0 ? (good / total) * 100 : "0";

  return (
    <>
      <Section>
        <Text text={"Please leave feedback"} />
        <FeedbackOptions
          addGood={addGood}
          addNatural={addNatural}
          addBad={addBad}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <p>No dani</p>
        )}
      </Section>
    </>
  );
}

export default App;
