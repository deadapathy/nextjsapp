'use client'

import MainMenu from '@/components/mainMenu';
import styles from '../page.module.css';
import { Box, Paper, Tab, Tabs, TextField, } from '@mui/material';
import { useState } from 'react';
import { vigenereDecrypt, vigenereEncrypt } from './helpers/vigenereCipher';
import { CustomTabPanel, a11yProps } from '@/components/tabPanel';


export default function VigenerCipher() {


    const [encrypt, setEncrypt] = useState({
        alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        key: '',
        resultEncrypt: '',
    });
    const [decrypt, setDecrypt] = useState({
        key: '',
        resultDecryppt: '',
    })
    const [value, setValue] = useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleEncrypt = (e: { target: { value: any; }; }) => {
        const result = vigenereEncrypt(e.target.value, encrypt.key, encrypt.alphabet);
        setEncrypt({ ...encrypt, resultEncrypt: result });
    };

    const handleDecrypt = (e: { target: { value: any; }; }) => {
        const result = vigenereDecrypt(e.target.value, decrypt.key, encrypt.alphabet);
        setDecrypt({ ...decrypt, resultDecryppt: result });
    }


    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />


                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: '2rem' }}>
                        Шифр Виженера
                    </div>

                    <div>
                        Встречайте еще один калькулятор из серии шифрования текста. Данный калькулятор может зашифровать введенный вами текст (правда только на русском языке) с помощью шифра Виженера.
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}> Шифр Виженера </span> - это последовательность ранее описанных шифров Цезаря, но только с разными значениями сдвига.
                    </div>

                    <div>
                        Шифр Виженера считается намного безопасней и сложней, так как он является шифром подстановки. Это означает, что в данном шифре каждая буква введенного текста заменяется буквой уже не простого, а шифр-текста. Для расшифровки такого вида шифра используют частотный криптоанализ.
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
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Алфавит'
                                    size='small'
                                    value={encrypt.alphabet}
                                    disabled
                                />

                                <TextField
                                    autoComplete='off'
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Ключ'
                                    size='small'
                                    onChange={e => setEncrypt({ ...encrypt, key: e.target.value })}
                                    value={encrypt.key}
                                />

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
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Алфавит'
                                    size='small'
                                    value={encrypt.alphabet}
                                    disabled
                                />

                                <TextField
                                    autoComplete='off'
                                    fullWidth
                                    sx={{ marginTop: '20px' }}
                                    label='Ключ'
                                    size='small'
                                    onChange={e => setDecrypt({ ...decrypt, key: e.target.value })}
                                    value={decrypt.key}
                                />

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