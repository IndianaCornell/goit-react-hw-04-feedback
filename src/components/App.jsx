import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Sections/Section';



export const App = () => { 
  const [good, setGood] = useState(0); 
  const [neutral, setNeutral] = useState(0); 
  const [bad, setBad] = useState(0); 

  const opt = {
    good: 0, 
    neutral: 0, 
    bad: 0,
  }

const handleFeedback = (option) => { 
  // console.log(option)
switch (option){
  case "good": 
  setGood(prevState => prevState + 1)
  break; 
  case "bad": 
  setBad(prevState => prevState + 1)
  break; 
  case "neutral": 
  setNeutral(prevState => prevState + 1)
  break; 
  default:
    console.log("Sorry");
}
}

const countTotalFeedback = () => {
  let total = 0;
  total = good + bad + neutral; 
  return total;
}

const countPositiveFeedbackPercentage = () =>{ 
  return countTotalFeedback() === 0
  ? 0
  : ((good / countTotalFeedback()) * 100).toFixed(1);
}


  return (
    <Layout>
      <Card>
        <Section title="Please leave feedback">
          <FeedbackOptions
            clickFeedback={handleFeedback}
            options={Object.keys(opt)}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <h2>There is no feedback :c</h2>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Card>
      <GlobalStyle />
    </Layout>
  );
}