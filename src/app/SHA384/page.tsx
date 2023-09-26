'use client'
import MainMenu from "@/components/mainMenu";
import styles from '../page.module.css'
import { Box, Paper, Tab, Tabs, TextField } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel, a11yProps } from "@/components/tabPanel";
import { sha384HashString } from "./helpers/sha384Hash";


export default function VigenerCipher() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [data, setData] = useState({
        hash: '',
    })

    const handleHash = (e: { target: { value: string; }; }) => {
        const hash = sha384HashString(e.target.value);
        setData({ ...data, hash: hash });
    }

    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />
                <div style={{ width: '35%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}> SHA-384 </span> —  одна из нескольких криптографических хеш-функций, которая принимает входные данные и выдает 384-битное (48-байтовое) значение хеш-функции.
                    </div>

                    <div>
                        SHA-384 чаще всего используется для проверки того, что файл не был изменен. Это делается путем создания контрольной суммы до того, как файл был передан, а затем снова проверяется хеш, после того как он будет скачан.
                    </div>
                    <div>
                        Хэш SHA384 НЕ является шифрованием. Это всего лишь отпечаток записи(строки или файла). Однако это односторонняя транзакция, и поэтому почти невозможно повернуть хеш SHA384 для получения исходной строки.
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
                                    multiline
                                    rows={3}
                                />
                            </CustomTabPanel>
                        </Box>
                    </Paper>
                </div>
            </div>
        </main>
    );

}