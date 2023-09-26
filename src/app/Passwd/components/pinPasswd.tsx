import { Checkbox, FormControlLabel, Slider, Stack } from "@mui/material";



export default function PinPasswd({
    handleSliderChange,
}: {
    handleSliderChange: (event: Event, newValue: number | number[]) => void;
}) {

    return (
        <Stack spacing={1} direction="row" sx={{ mb: 1, gap: '15px', width: '100%', textAlign: '-webkit-center' }} alignItems="center">
            Длина
            <Slider
                aria-label="Temperature"
                defaultValue={6}
                valueLabelDisplay="auto"
                disableSwap
                min={3}
                max={12}
                onChange={handleSliderChange}
            />
        </Stack>
    );

}
