import Button from '@mui/material/Button';
import classNames from "classnames";

import "./components.scss";

const CustomButton = (props) => {
  const { label, className = "", primary, danger, onClick, ...rest } = props;
  return (
    <Button
      {...rest}
      className={classNames("custom-button", {
        primary,
        'secondary-palette': !primary,
        danger
      }, className)}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
