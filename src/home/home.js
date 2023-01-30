import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tab from './tabs';
import Model from './model';
import RosApi from '../ros';

const Home = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
               <Tab />
            </Grid>

            <Grid item xs={6}>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={6}>
                        <Card>
                        <CardContent>
                            <Typography variant='h5'>
                            Pressure
                            </Typography>
                            <Typography variant='h7' id="prs"></Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                        <CardContent>
                            <Typography variant='h5'>
                            Yaw
                            </Typography>
                            <Typography variant='h7' id="yaw"></Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                        <CardContent>
                            <Typography variant='h5'>
                            Pitch
                            </Typography>
                            <Typography variant='h7' id="pitch"> </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                        <CardContent>
                            <Typography variant='h5'>
                            Roll
                            </Typography>
                            <Typography variant='h7' id="roll"></Typography>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Model />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;