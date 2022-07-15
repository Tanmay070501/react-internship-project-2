import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ title, body }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="body2">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
