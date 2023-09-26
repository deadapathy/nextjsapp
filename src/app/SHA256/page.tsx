'use client'
import MainMenu from "@/components/mainMenu";
import styles from '../page.module.css'
import { Box, Paper, Tab, Tabs, TextField } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel, a11yProps } from "@/components/tabPanel";
import { sha256HashString } from "./helpers/sha256Hash";


export default function VigenerCipher() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [data, setData] = useState({
        hash: '',
    })

    const handleHash = (e: { target: { value: string; }; }) => {
        const hash = sha256HashString(e.target.value);
        setData({ ...data, hash: hash });
    }

    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}> SHA-256 </span> —  хеш-функция из семейства алгоритмов SHA-2 предназначена для создания «отпечатков» или «дайджестов» для сообщений произвольной длины.
                    </div>

                    <div>
                        SHA-256 является новой хэш-функцией, вычисляемой с 32-разрядными и 64-разрядными словами соответственно.
                    </div>
                    <div>
                        Он использует различные количества сдвига и аддитивные константы, но их структуры в остальном практически идентичны, отличаясь только количеством раундов.
                    </div>
                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Хеширование" {...a11yProps(0)} />
                                    {/* <Tab label="Дехеширование" {...a11yProps(1)} /> */}
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <TextField
                                    autoComplete='off'
                                    onBlur={handleHash}
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
                                    label='Результат хеширования'
                                    size='small'
                                    value={data.hash}
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