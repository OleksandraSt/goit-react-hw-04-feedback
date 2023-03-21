import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onleaveFeedback }) => (
    <ButtonContainer>
      {options.map(option => (
        <Button
          type="button"
          name={option}
          key={option}
          onClick={() => onleaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );

FeedbackOptions.propsType = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;