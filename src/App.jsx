import React from "react";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./component/Navbar";
import Add from "./component/Add";

function App() {
    const [mode, setMode] = React.useState("light");

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    backgroundColor: "background.default",
                    color: "text.primary",
                }}
            >
                <Navbar />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Sidebar mode={mode} setMode={setMode}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    );
}

export default App;
