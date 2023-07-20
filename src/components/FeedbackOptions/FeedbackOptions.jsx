import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleFeedback: PropTypes.func.isRequired,
};
