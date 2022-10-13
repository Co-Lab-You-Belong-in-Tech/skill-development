import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


type Props = {
    label: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
};

function CheckBox({ label = "false", checked, setChecked }: Props) {
    return (
        <FormControlLabel control={<Checkbox defaultChecked={checked} onChange={(e) => setChecked(!checked)}
        />} label={label} />
    )
}

export default CheckBox;