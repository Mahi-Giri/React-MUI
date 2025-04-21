import React from "react"; 
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";


const Rightbar = () => {
    const itemData = [
        {
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Mountain Lake",
        },
        {
            img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
            title: "Forest Path",
        },
        {
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            title: "Snowy Peaks",
        },
        {
            img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            title: "Beach Sunrise",
        },
        {
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Mountain Lake",
        },
        {
            img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
            title: "Forest Path",
        },
        {
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            title: "Snowy Peaks",
        },
        {
            img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            title: "Beach Sunrise",
        },
        {
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Mountain Lake",
        },
        {
            img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
            title: "Forest Path",
        },
        {
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            title: "Snowy Peaks",
        },
        {
            img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            title: "Beach Sunrise",
        },
        {
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Desert Dunes",
        },
        {
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            title: "City Skyline",
        },
        {
            img: "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
            title: "Cozy Cabin",
        },
        {
            img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
            title: "Autumn Leaves",
        },
        {
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
            title: "Ocean Cliff",
        },
        {
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            title: "Starry Night",
        },
    ];
    return (
        <Box
            flex={2}
            padding={2}
            sx={{
                display: { xs: "none", sm: "block" },
            }}
        >
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={5}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://img.freepik.com/free-photo/selfie-happy-woman_23-2148547558.jpg?semt=ais_hybrid&w=740"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
                    />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIjZ7ZDnL7SGuxPYiTR-VqmDSTKtejpgWIJA9DcmmbRKEKmafI8_BOjEEsSV8MCwfrzA&usqp=CAU"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG8sDNh5B9ZbyQU4WSe8eC0oQhPi9iL7g8GdLSgXhVjSEthQdOeut-DiiOH5127QRzYU&usqp=CAU"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://img.freepik.com/free-photo/selfie-happy-woman_23-2148547557.jpg?semt=ais_hybrid&w=740"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREG8sDNh5B9ZbyQU4WSe8eC0oQhPi9iL7g8GdLSgXhVjSEthQdOeut-DiiOH5127QRzYU&usqp=CAU"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Posts
                </Typography>
                <ImageList
                    sx={{ width: 380, height: 450 }}
                    cols={3}
                    rowHeight={164}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${item.img}`}
                                alt={item.title}
                                loading="eager"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            color: "text.primary",
                                            display: "inline",
                                        }}
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            color: "text.primary",
                                            display: "inline",
                                        }}
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{
                                            color: "text.primary",
                                            display: "inline",
                                        }}
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
