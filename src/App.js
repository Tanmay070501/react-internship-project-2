import { Container, CssBaseline, Grid } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
function App() {
    const [posts, setPost] = useState([]);
    const fetchPost = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            //console.log(response.data);
            setPost(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <Container sx={{ my: 4 }}>
                <Grid container spacing={2}>
                    {posts.map((post) => {
                        return (
                            <Grid key={post.id} item xs={12} md={6} lg={3}>
                                <PostCard title={post.title} body={post.body} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Fragment>
    );
}

export default App;
