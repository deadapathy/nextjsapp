
import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import React from 'react';
import Link from 'next/link';

export default function MainMenu() {

    const [open, setOpen] = React.useState({
        cipher: true,
        code: true,
    });
    // const open = true;

    const handleClick = (e: any) => {
        if (e.target.innerText === 'Шифры') {
            setOpen(prevState => ({ cipher: !prevState.cipher, code: prevState.code }));
        } else if (e.target.innerText === 'Кодирование') {
            setOpen(prevState => ({ cipher: prevState.cipher, code: !prevState.code }));
        } else {
            setOpen({ cipher: false, code: false });
        }
    }

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Link href='../'>
                <ListItemButton id='cipher' onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Главная" />
                </ListItemButton>
            </Link>
            <ListItemButton id='cipher' onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Шифры" />
                {open.cipher ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.cipher} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link href='../CaesarCipher'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Шифр Цезаря" />
                        </ListItemButton>
                    </Link>
                    <Link href='../HillCipher'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Шифр Хилла" />
                        </ListItemButton>
                    </Link>
                    <Link href='../VigenerCipher'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Шифр Виженера" />
                        </ListItemButton>
                    </Link>
                    <Link href='../AtbashCipher'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Шифр Атбаш" />
                        </ListItemButton>
                    </Link>
                    <Link href='../A1Z26Cipher'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Шифр A1Z26" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton id='code' onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Кодирование" />
                {open.code ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open.code} timeout="auto">
                <List component="div" disablePadding>
                    <Link href='../Haffman'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Код Хаффмана" />
                        </ListItemButton>
                    </Link>
                    <Link href='../Base64Code'>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>

                            <ListItemText primary="Base 64 преобразование" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
        </List>
    );
}