'use client'

import MainMenu from '@/components/mainMenu';
import styles from './page.module.css'
import { Divider, Paper, Typography, TextField } from '@mui/material';
import { encryptHill } from './helpers/hillCipher';
import { useState } from 'react';





export default function CaesarCipher() {

    const [encrypt, setEncrypt] = useState({
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
        blockSize: 0,
        keyText: '',
        result: '',
    });

    const handleEncrypt = (e: { target: { value: any; }; }) => {
        const result = encryptHill(encrypt.keyText, encrypt.blockSize, e.target.value, encrypt.alphabet);
        setEncrypt({ ...encrypt, result: result })
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
                        Шифр Хилла
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}> Шифр Хилла </span> - некий шифр подстановки, который в 1929 году разработал математик Лестер С. Хилл. Данный шифр основывается на линейной алгебре.
                    </div>

                    <div>
                        Наш онлайн-калькулятор поможет вам без проблем зашифровать текст методом Хилла.
                    </div>

                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Typography fontSize={'1.3rem'} >Шифр Хилла</Typography>
                        <Divider />

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
                            label='Размер ключа'
                            size='small'
                            onChange={e => setEncrypt({ ...encrypt, blockSize: Number(e.target.value) })}
                            value={encrypt.blockSize}
                        />
                        <TextField
                            autoComplete='off'
                            fullWidth
                            sx={{ marginTop: '20px' }}
                            label='Ключ'
                            size='small'
                            onChange={e => setEncrypt({ ...encrypt, keyText: e.target.value })}
                            value={encrypt.keyText}
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
                            disabled
                            value={encrypt.result}
                        />
                    </Paper>
                </div>
            </div>

        </main>
    );
}