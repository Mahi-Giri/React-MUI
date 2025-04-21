import React from "react";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    IconButton,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
    Image,
    EmojiEmotions,
    PersonAdd,
    VideoCameraBack,
    DateRange,
} from "@mui/icons-material";

const Add = () => {
    const [open, setOpen] = React.useState(false);

    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    });

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingLeft: "25px",
    });

    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50%)", md: 30 },
                }}
            >
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={410}
                    height={290}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    borderRadius={3}
                >
                    <Typography
                        variant="h6"
                        color="gray"
                        textAlign="center"
                        mt={2}
                    >
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={400} variant="span">
                            Mahesh Dev
                        </Typography>
                    </UserBox>
                    <TextField
                        id="standard-error-helper-text"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        sx={{
                            width: "90%",
                            margin: "10px auto",
                            backgroundColor: "background.default",
                        }}
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} padding={2}>
                        <EmojiEmotions
                            color="primary"
                            sx={{
                                cursor: "pointer",
                            }}
                        />
                        <Image
                            color="secondary"
                            sx={{
                                cursor: "pointer",
                            }}
                        />
                        <VideoCameraBack
                            color="success"
                            sx={{
                                cursor: "pointer",
                            }}
                        />
                        <PersonAdd
                            color="error"
                            sx={{
                                cursor: "pointer",
                            }}
                        />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        sx={{
                            width: "90%",
                        }}
                        variant="contained"
                        aria-label="Basic button group"
                    >
                        <Button
                            sx={{
                                width: "100%",
                            }}
                        >
                            Post
                        </Button>
                        <Button
                            sx={{
                                width: "15%",
                            }}
                        >
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
