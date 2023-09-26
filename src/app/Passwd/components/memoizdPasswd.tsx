import { Checkbox, FormControlLabel, Slider, Stack } from "@mui/material";


export default function MemoizdPasswd({
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
                defaultValue={4}
                valueLabelDisplay="auto"
                disableSwap
                min={3}
                max={15}
                onChange={handleSliderChange}
            />
            <FormControlLabel control={<Checkbox defaultChecked name="digits" onChange={handleCheckboxChange} />} label="Каждое слово с прописной буквы" />
            {/* <FormControlLabel control={<Checkbox />} label="Полные слова" name="symbols" onChange={handleCheckboxChange} /> */}
        </Stack>
    );

}
