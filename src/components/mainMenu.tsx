"use client";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import React from "react";
import { useRouter } from "next/navigation";

export default function MainMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState({
    cipher: false,
    code: false,
    hash: false,
  });

  const handlePushRoute = (url: string) => {
    router.push(url);
  };

  const handleClick = (e: any) => {
    if (e.target.innerText === "Шифрование") {
      setOpen((prevState) => ({
        cipher: !prevState.cipher,
        code: prevState.code,
        hash: prevState.hash,
      }));
    } else if (e.target.innerText === "Кодирование") {
      setOpen((prevState) => ({
        cipher: prevState.cipher,
        code: !prevState.code,
        hash: prevState.hash,
      }));
    } else if (e.target.innerText === "Хеширование") {
      setOpen((prevState) => ({
        cipher: prevState.cipher,
        code: prevState.code,
        hash: !prevState.hash,
      }));
    } else {
      setOpen({ cipher: false, code: false, hash: false });
    }
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton id="cipher" onClick={() => handlePushRoute("../")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Главная" />
      </ListItemButton>
      <ListItemButton id="cipher" onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Шифрование" />
        {open.cipher ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open.cipher} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../CaesarCipher")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Шифр Цезаря" />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../HillCipher")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Шифр Хилла" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../VigenerCipher")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Шифр Виженера" />
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../AtbashCipher")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Шифр Атбаш" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../A1Z26Cipher")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Шифр A1Z26" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton id="code" onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Кодирование" />
        {open.code ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.code} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../Haffman")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Код Хаффмана" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../Base64Code")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Base 64 преобразование" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton id="code" onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Хеширование" />
        {open.hash ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.hash} timeout="auto">
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../MD5")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="MD5" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../SHA1")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="SHA-1" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../SHA256")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="SHA-256" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../SHA384")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="SHA-384" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => handlePushRoute("../SHA512")}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SHA-512" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton id="cipher" onClick={() => handlePushRoute("../Passwd")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Генератор паролей" />
      </ListItemButton>
    </List>
  );
}
