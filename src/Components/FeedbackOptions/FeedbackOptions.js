import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map((option) => {
      return (
        <button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
