'use client'

import MainMenu from "@/components/mainMenu";
import styles from '../page.module.css'
import { Box, Paper, Tab, Tabs, TextField } from "@mui/material";
import { CustomTabPanel, a11yProps } from "@/components/tabPanel";
import { useState } from "react";
import { codeInText, textInCode } from "./helpers/codeInText";


export default function Base64() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [encrypt, setEncrypt] = useState('');
    const [decrypt, setDecrypt] = useState('');

    const handleEncrypt = (e: any) => {
        setEncrypt(textInCode(e.target.value));
    }

    const handleDecrypt = (e: any) => {
        setDecrypt(codeInText(e.target.value));
    }


    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />

                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Base64</span> конвертер может изменять введенные вами закодированные символы в текстовый вид. Для этого вам нужно просто ввести код в поле и нажать рассчитать. Код может складываться как из цифр (от 0 до 9), так и из букв латинского алфавита, при чем буквы могут быть как большими так и маленькими.
                    </div>

                    <div>
                        С помощью данного генератора вы легко сможете раскодировать код в удобный для работы текстовый вид.
                    </div>


                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Шифровка" {...a11yProps(0)} />
                                    <Tab label="Дешифровка" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <TextField
                                    autoComplete='off'
                                    onBlur={handleEncrypt}
                                    sx={{ marginTop: '20px' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    label="Входной текст"
                                    multiline
                                    rows={10}
                                />

                                <TextField
                                    autoComplete='off'
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Результат шифра'
                                    size='small'
                                    value={encrypt.toLowerCase()}
                                    disabled
                                />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <TextField
                                    autoComplete='off'
                                    onBlur={handleDecrypt}
                                    sx={{ marginTop: '20px' }}
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    label="Входной текст"
                                    multiline
                                    rows={10}
                                />

                                <TextField
                                    autoComplete='off'
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Результат дешифровки'
                                    size='small'
                                    value={decrypt.toLowerCase()}
                                    disabled
                                />
                            </CustomTabPanel>
                        </Box>
                    </Paper>
                </div>

            </div>
        </main>
    );
}