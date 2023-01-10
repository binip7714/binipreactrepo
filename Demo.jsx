import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import React from "react";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Demo = () => {
  return (
    <>
      <div>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h1" align="center">
              Posts
            </Typography>
            <NoteAltIcon />
          </Toolbar>
        </AppBar>
        <main>
          <Grid>
            <Container>
              <Typography variant="h3" align="center">
                Posts
              </Typography>
              <Typography variant="h3" align="center">
                Description Here
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="contained">Primary Button</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary Button</Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Container>
            <Grid container spacing={2} mt={2}>
              <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://picsum.photos/id/177/200/300"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Trekking
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Trekking: “to go on a long arduous journey, typically on foot”.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://picsum.photos/id/237/200/300"
                    title="dog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    DOG is a buddy comedy that follows the misadventures of two former Army Rangers paired against their will on the road trip of a lifetime.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://picsum.photos/id/255/200/300"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Path
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    We are a global team of innovators working to accelerate health equity so all people and communities can thrive.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Demo;
