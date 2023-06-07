// homepage

// really cool wallpapers for reference: https://wallpapercave.com/pokemon-mystery-dungeon-wallpaper

import { Typography } from '@mui/material';
import React from 'react';
import {Container} from 'react-bootstrap';

export default function Home() {
    return (
        <React.Fragment>
            <Container>
                <div className="welcome-container">
                    <Typography variant="h2" className="header-text">
                        Welcome to PokéPort!
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    )
}