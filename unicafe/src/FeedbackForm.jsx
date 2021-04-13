import { IconButton } from "./Button";
import neutralIcon from "./icons/neutral-face.svg";
import goodIcon from "./icons/happy-face.svg";
import badIcon from "./icons/sad-face.svg";

const icons = {
  good: goodIcon,
  neutral: neutralIcon,
  bad: badIcon,
};

export const FeedbackForm = ({ formOptions }) => {
  const renderOptions = () => {
    return formOptions.map((option, index) => {
      return (
        <div key={index}>
          <IconButton
            icon={icons[option.name]}
            alt={option.name}
            color={option.color}
            setUpdate={option.updateValue}
            currentValue={option.value}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Help us grow, tell us how was your experience?</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {renderOptions()}
      </div>
    </div>
  );
};
