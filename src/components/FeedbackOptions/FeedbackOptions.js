import { FeedbackBox, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ clickFeedback, options }) => {
  return (
    <FeedbackBox>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => clickFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </FeedbackBox>
  );
};
