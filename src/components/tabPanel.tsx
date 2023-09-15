import { Box, Typography } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// const [value, setValue] = useState(0);

// const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
// };

// <Box sx={{ width: '100%' }}>
// <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//         <Tab label="Шифровка" {...a11yProps(0)} />
//         <Tab label="Дешифровка" {...a11yProps(1)} />
//     </Tabs>
// </Box>
// <CustomTabPanel value={value} index={0}>
    
// </CustomTabPanel>
// <CustomTabPanel value={value} index={1}>
    
// </CustomTabPanel>
// </Box>