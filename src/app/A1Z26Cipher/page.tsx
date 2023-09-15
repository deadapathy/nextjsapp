'use client'

import MainMenu from '@/components/mainMenu';
import styles from '../page.module.css';
import { Box, Paper, Tab, Tabs, TextField } from '@mui/material';
import { useState } from 'react';
import { CustomTabPanel, a11yProps } from '@/components/tabPanel';
import { decryptA1Z26, encryptA1Z26 } from './helpers/a1z26Cipher';


export default function A1Z26Cipher() {


    const [encrypt, setEncrypt] = useState({
        resultEncrypt: '',
    });
    const [decrypt, setDecrypt] = useState({
        resultDecryppt: '',
    })
    const [value, setValue] = useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleEncrypt = (e: { target: { value: any; }; }) => {
        const result = encryptA1Z26(e.target.value);
        setEncrypt({ ...encrypt, resultEncrypt: result });
    };

    const handleDecrypt = (e: { target: { value: any; }; }) => {
        const result = decryptA1Z26(e.target.value);
        setDecrypt({ ...decrypt, resultDecryppt: result });
    }


    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />


                <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: '2rem' }}>
                        Шифр A1Z26
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}> Шифрование A1Z26 </span> - простой шифр, основан на простой подстановке, где каждая буква способна изменится на свой порядковый номер в алфавите.
                    </div>

                    <div>
                        С зашифровкой вроде все ясно, а вот с расшифровкой есть один нюанс. Нужно прописывать цифры таким образом, чтобы они были отделены друг от друга чертой, дефисом или пробелом, главное, чтобы не были слитные цифры.
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
                                    value={encrypt.resultEncrypt.toLowerCase()}
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
                                    label='Результат дешифрации'
                                    size='small'
                                    value={decrypt.resultDecryppt.toLowerCase()}
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