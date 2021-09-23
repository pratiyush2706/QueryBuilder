import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { useStyles } from './useStyles';

interface ISwitchButtonProps {
  isLogicalAndActive: boolean;
  onLogicalButtonClick: (logicalField: "and" | "or") => void;
}

const SwitchButton = ({ isLogicalAndActive, onLogicalButtonClick } : ISwitchButtonProps) => {
  const classes = useStyles();
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button className={!isLogicalAndActive ? classes.inactiveButton : ""} onClick={() => onLogicalButtonClick("and")}>AND</Button>
        <Button className={isLogicalAndActive ? classes.inactiveButton : ""} onClick={() => onLogicalButtonClick("or")}>OR</Button>
      </ButtonGroup>
    </div>
  );
};

export default SwitchButton;
