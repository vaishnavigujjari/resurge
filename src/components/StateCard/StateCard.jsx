import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import states from '../../assets/state_flags.json'

const StateCard = ({ filteredStates }) => {

    return (
        <>
            <Box sx={{ flexGrow: 2, m: 10 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 5, sm: 10, md: 20 }}>
                    {filteredStates.map((state, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={filteredStates[index].image_link}
                                        alt="State Flag"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {filteredStates[index].state}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {filteredStates[index].slogan}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}


export default StateCard;