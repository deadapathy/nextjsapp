'use client'
import MainMenu from '@/components/mainMenu';
import styles from '../page.module.css';
import { Box, Paper, Tab, Tabs, TextField } from '@mui/material';
import { CustomTabPanel, a11yProps } from '@/components/tabPanel';
import { useState } from 'react';
import { encodeHuffman } from './helpers/haffman';


export default function Haffman() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [encrypt, setEncrypt] = useState({
        resultEncrypt: '',
    });

    const handleEncrypt = (e: { target: { value: any; }; }) => {
        const result = encodeHuffman(e.target.value);
        setEncrypt({ ...encrypt, resultEncrypt: result });
    }

    return (
        <main className={styles.main}>
            <div className={styles.centerBlock}>
                <MainMenu />

                <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ fontSize: '2rem' }}>
                        Код Хаффмана
                    </div>

                    <div>
                        Перед вами калькулятор, который может рассчитать <span style={{ fontWeight: 'bold' }}>код Хаффмана</span> для вероятности символов, которую вы зададите.
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}>Алгоритм Хаффмана</span> — некий алгоритм для кодирования букв алфавита.
                    </div>

                    <div>
                        <span style={{ fontWeight: 'bold' }}>Дэвид Хаффман</span> - человек, который в 1952 году придумал и разработал данный алгоритм, в свое время Дэвид придумал его работая над курсовой в Массачусетском университете. Сейчас же его творение широко используют во множественных программах для сжатия внутренних данных.
                    </div>

                    <div>
                        Весь алгоритм работает в <span style={{ fontWeight: 'bold' }}>2 этапа:</span>
                    </div>

                    <div>
                        &bull; во первых - это построение кодового дерева зависимостей;
                    </div>
                    <div>
                        &bull; во вторых - это строение отображений кодов и символов на основе уже построенного дерева зависимостей.
                    </div>

                    <Paper sx={{ padding: '10px' }} elevation={3}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Шифровка" {...a11yProps(0)} />
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
                        </Box>
                    </Paper>


                </div>
            </div>
        </main>
    );

}