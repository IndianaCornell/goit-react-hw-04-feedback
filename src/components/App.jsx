import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Sections/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() === 0
      ? 0
      : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  }

  render() {
    return (
      <Layout>
        <Card>
          <Section title="Please leave feedback">
            <FeedbackOptions
              clickFeedback={this.handleFeedback}
              options={Object.keys(this.state)}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <h2>There is no feedback :c</h2>
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </Card>
        <GlobalStyle />
      </Layout>
    );
  }
}
