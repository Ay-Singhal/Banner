import React, { useState, useEffect } from 'react';
import { Box, TextField, Switch, Button } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
    const [banner, setBanner] = useState({
        description: '',
        timer: 60,
        link: '',
        isVisible: false
    });

    useEffect(() => {
        axios.get('/api/banner').then(response => {
            setBanner(response.data);
        });
    }, []);

    const handleSave = () => {
        axios.post('/api/banner', banner).then(() => {
            alert('Banner settings saved!');
        });
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <TextField
                label="Banner Description"
                value={banner.description}
                onChange={(e) => setBanner({ ...banner, description: e.target.value })}
                fullWidth
                sx={{ marginBottom: '20px' }}
            />
            <TextField
                label="Banner Timer (seconds)"
                type="number"
                value={banner.timer}
                onChange={(e) => setBanner({ ...banner, timer: e.target.value })}
                fullWidth
                sx={{ marginBottom: '20px' }}
            />
            <TextField
                label="Banner Link"
                value={banner.link}
                onChange={(e) => setBanner({ ...banner, link: e.target.value })}
                fullWidth
                sx={{ marginBottom: '20px' }}
            />
            <Switch
                checked={banner.isVisible}
                onChange={(e) => setBanner({ ...banner, isVisible: e.target.checked })}
            /> Banner On/Off
            <Button onClick={handleSave} variant="contained" sx={{ marginTop: '20px' }}>Save</Button>
        </Box>
    );
};

export default Dashboard;
