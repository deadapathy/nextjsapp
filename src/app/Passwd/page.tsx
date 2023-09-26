'use client'
import MainMenu from "@/components/mainMenu";
import styles from '../page.module.css'
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, Slider, Stack, Tab, Tabs, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CachedIcon from '@mui/icons-material/Cached';
import { generateMemorablePassword, generatePassword, generatePin } from "./helpers/generatePasswd";
import RandomPasswd from "./components/randomPasswd";
import AlertComponent from "@/components/alert";
import MemoizdPasswd from "./components/memoizdPasswd";
import PinPasswd from "./components/pinPasswd";

export default function GeneratePasswd() {

    const [data, setData] = useState({
        steps: 20,
        type: 1,
        digits: true,
        symbols: false,
        passwd: '',
    });

    const [alert, setAlert] = useState({
        open: false,
    });

    const generatePasswdHandler = () => {
        if (data.type === 1) {
            setData({ ...data, passwd: generatePassword(data.steps, data.digits, data.symbols) });
        } else if (data.type === 2) {
            setData({ ...data, passwd: generateMemorablePassword(data.steps, data.digits) });
        } else if (data.type === 3) {
            setData({ ...data, passwd: generatePin(data.steps) });
        }
    };

    useEffect(() => {
        generatePasswdHandler();
    }, [data.digits, data.symbols, data.type]);

    const handleSliderChange = (event: any, newValue: any) => {
        if (data.type === 1) {
            setData({ ...data, steps: newValue, passwd: generatePassword(newValue, data.digits, data.symbols) });
        } else if (data.type === 2) {
            setData({ ...data, steps: newValue, passwd: generateMemorablePassword(newValue, data.digits) });
        } else if (data.type === 3) {
            setData({ ...data, steps: newValue, passwd: generatePin(newValue) });
        }
    }

    const handleTypeChange = (event: any) => {
        if (event.target.value === 1) {
            setData({ ...data, steps: 20, type: event.target.value });
        } else if (event.target.value === 2) {
            setData({ ...data, steps: 4, type: event.target.value });
        } else {
            setData({ ...data, steps: 6, type: event.target.value });
        }
    }

    const handleCheckboxChange = (event: any) => {
        if (event.target.name === 'digits') {
            setData({ ...data, digits: event.target.checked });
        } else if (event.target.name === 'symbols') {
            setData({ ...data, symbols: event.target.checked });
        }
    };

    const copyPasswd = () => {
        navigator.clipboard.writeText(data.passwd);
        setAlert({ ...alert, open: true });
    };

    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    }

    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        Нужен пароль? Попробуйте <span style={{ fontWeight: 'bold' }}> Генератор надежных паролей </span>
                    </div>
                    <div>
                        Люди не очень хорошо умеют придумывать уникальные или/и случайные пароли. Поэтому воспользуйтесь генератором надежных паролей, чтобы генерировать надежные и запоминающиеся пароли.
                    </div>
                    <div>
                        81% утечек данных происходят из-за использования слабых или повторно используемых паролей, поэтому случайные уникальные пароли — ваша лучшая защита от различных угроз онлайн.
                    </div>
                    <div>
                    </div>
                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                            <TextField
                                autoComplete='off'
                                fullWidth
                                sx={{ marginTop: '20px', width: '100%' }}
                                label='Созданный пароль'
                                size='small'
                                value={data.passwd}
                                multiline // Включение многострочного режима
                                rows={2} // Начальное количество видимых строк
                            />

                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%' }}>
                                <FormControl size="small" sx={{ width: '50%' }}>
                                    <InputLabel id="demo-simple-select-label">Тип пароля</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Тип пароля"
                                        onChange={handleTypeChange}
                                        defaultValue={1}
                                    >
                                        <MenuItem value={1}>Случайный пароль</MenuItem>
                                        <MenuItem value={2}>Запоминающийся пароль</MenuItem>
                                        <MenuItem value={3}>PIN-код</MenuItem>
                                    </Select>
                                </FormControl>

                                <CachedIcon sx={{ color: 'gray', cursor: 'pointer' }} onClick={generatePasswdHandler} />

                                <Button sx={{ width: '50%' }} onClick={copyPasswd} variant="contained">Скопировать пароль</Button>
                            </Box>

                            <Box sx={{ width: '100%', textAlign: '-webkit-center' }}>
                                {
                                    data.type === 1 && <RandomPasswd handleSliderChange={handleSliderChange} handleCheckboxChange={handleCheckboxChange} />
                                }
                                {
                                    data.type === 2 && <MemoizdPasswd handleSliderChange={handleSliderChange} handleCheckboxChange={handleCheckboxChange} />
                                }
                                {
                                    data.type === 3 && <PinPasswd handleSliderChange={handleSliderChange} />
                                }
                            </Box>
                        </Box>
                    </Paper>
                    <AlertComponent message='Пароль скопирован в буфер обмена' severity='success' open={alert.open} handleClose={handleCloseAlert} />
                </div>
            </div>
        </main>
    );

}