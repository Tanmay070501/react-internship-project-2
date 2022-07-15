import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }
    function bodyChangeHandler(e) {
        setBody(e.target.value);
    }
    const postTodo = async () => {
        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/todos",
                {
                    title: title,
                    body: body,
                }
            );
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
        setTitle("");
        setBody("");
    };
    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <Container maxWidth="sm" sx={{ my: 4 }}>
                <TextField
                    variant="outlined"
                    label="Title"
                    fullWidth
                    onChange={titleChangeHandler}
                    value={title}
                />
                <TextField
                    sx={{ mt: 2 }}
                    variant="filled"
                    label="Body"
                    multiline
                    fullWidth
                    onChange={bodyChangeHandler}
                    value={body}
                />
                <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
                    <Button onClick={postTodo} variant="outlined">
                        POST
                    </Button>
                </Box>
                <Typography variant="body1" sx={{ my: 4, textAlign: "center" }}>
                    CHECK CONSOLE AFTER POSTING
                </Typography>
            </Container>
        </Fragment>
    );
}

export default App;
