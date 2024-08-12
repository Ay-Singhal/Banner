import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import axios from 'axios';

const Banner = () => {
    const [banner, setBanner] = useState({
        description: '',
        timer: 0,
        link: '',
        isVisible: false
    });
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/banner').then(response => {
            setBanner(response.data);
            setTimeLeft(response.data.timer);
        });
    }, []);

    useEffect(() => {
        if (banner.isVisible && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [banner.isVisible, timeLeft]);

    if (!banner.isVisible || timeLeft <= 0) return null;

    return (
        <Card>
        <Box sx={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center',mt: '25px'}}>
            <Typography variant="h4">{banner.description}</Typography>
            <Typography variant="h6">Time left: {timeLeft}s</Typography>
            <Button href={banner.link} variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
        </Box>
        </Card>
    );
};

export default Banner;
