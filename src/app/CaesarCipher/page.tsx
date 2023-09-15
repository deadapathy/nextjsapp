'use client'

import MainMenu from '@/components/mainMenu';
import styles from './page.module.css';
import { Divider, Paper, Typography, TextField } from '@mui/material';
import { caesarCipherDecrypt, caesarCipherEncrypt } from './helpers/caesarCipher';
import { useState } from 'react';
import { KeyboardEvent } from 'react';


export default function CaesarCipher() {


    const [rot, setRot] = useState(0);
    const [result, setResult] = useState('');
    const [decrypt, setDecrypt] = useState('');

    const handleEncrypt = (e: { target: { value: any; }; }) => {
        if (rot !== 0) {
            setResult(caesarCipherEncrypt(e.target.value, rot));
        }
    }

    const handleDecrypt = (e: { target: { value: any; }; }) => {
        if (rot !== 0) {
            setDecrypt(caesarCipherDecrypt(e.target.value, rot));
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <p>
                    CipherHub
                </p>
            </div>
            <div className={styles.centerBlock}>
                <MainMenu />

                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: '2rem' }}>
                        Шифр Цезаря
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}> Шифр Цезаря </span> - считается одним из самых старых шифров. Схема его достаточно простая - для шифрования используется сдвиг буквы на определенное число позиций. Это так называемый циклический сдвиг. Для примера: обозначение ROT5 будет говорить о том, буква А станет преобразуется в букву под номером 5 (Д).
                    </div>

                    <div>
                        Данный шифр когда дойдет до буквы Я, то она станет, например, буквой А (смотря какую позицию задать). То есть шифр идет на повторение, уникальность заканчивается. Это и есть недостаток данного шифра, его можно разгадать, проверив все эти варианты.
                    </div>

                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Typography fontSize={'1.3rem'} >Шифр Цезаря</Typography>
                        <Divider />

                        <TextField
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label='Количество ROT'
                            size='small'
                            onChange={e => setRot(Number(e.target.value))}
                        />
                        <TextField
                            onBlur={handleEncrypt}
                            sx={{ marginTop: '20px' }}
                            fullWidth
                            id="outlined-multiline-flexible"
                            label="Входной текст"
                            multiline
                            rows={10}
                        />

                        <TextField
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label='Результат шифра'
                            size='small'
                            disabled
                            value={result}
                        />
                    </Paper>

                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Typography fontSize={'1.3rem'} >Дешифровка Цезаря</Typography>
                        <Divider />

                        <TextField
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label='Количество ROT'
                            size='small'
                            onChange={e => setRot(Number(e.target.value))}
                        />

                        <TextField
                            onBlur={handleDecrypt}
                            sx={{ marginTop: '20px' }}
                            fullWidth
                            id="outlined-multiline-flexible"
                            label="Входной текст"
                            multiline
                            rows={10}
                        />

                        <TextField
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label='Результат дешифровки'
                            size='small'
                            disabled
                            value={decrypt}
                        />
                    </Paper>
                </div>

            </div>
        </main>
    )

}