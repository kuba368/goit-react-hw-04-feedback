import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { useState } from 'react';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const stateNames = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback" />
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={stateNames} />
      <Section title="Statistics" />
      {totalFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={totalPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
