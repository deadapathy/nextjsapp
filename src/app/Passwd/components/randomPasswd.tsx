import { Checkbox, FormControlLabel, Slider, Stack } from "@mui/material";



export default function RandomPasswd({
    handleSliderChange,
    handleCheckboxChange
}: {
    handleSliderChange: (event: Event, newValue: number | number[]) => void;
    handleCheckboxChange: (event: any) => void;
}) {

    return (
        <Stack spacing={1} direction="row" sx={{ mb: 1, gap: '15px', width: '100%', textAlign: '-webkit-center' }} alignItems="center">
            Длина
            <Slider
                aria-label="Temperature"
                defaultValue={20}
                valueLabelDisplay="auto"
                disableSwap
                min={8}
                max={100}
                onChange={handleSliderChange}
            />
            <FormControlLabel control={<Checkbox defaultChecked name="digits" onChange={handleCheckboxChange} />} label="Цифры" />
            <FormControlLabel control={<Checkbox />} label="Символы" name="symbols" onChange={handleCheckboxChange} />
        </Stack>
    );

}
