import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const StyleToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const SearchBar = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        width: "40%",
        height: "30px",
    }));

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    }));

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "20px",
        cursor: "pointer",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }));

    return (
        <AppBar position="sticky">
            <StyleToolBar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    Mahesh Dev
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <SearchBar>
                    <InputBase placeholder="Search..." />
                </SearchBar>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        alt="Remy Sharp"
                        src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto"
                    />
                    <Typography variant="span">Mahesh</Typography>
                </UserBox>
            </StyleToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
