import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  setCheckedList: (checkedList:any) => void;
};

function CheckBox({ label = "false", checked, setChecked, setCheckedList }: Props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={checked}
          onChange={(e) => {
            setChecked(!checked)
            if (e.target.checked) {
              setCheckedList((prev: any) => [...prev, label]);
            } else {
              setCheckedList((prev: any) => prev.filter((item: string) => item !== label));
            }
          }}
        />
      }
      label={label}
    />
  );
}

export default CheckBox;
