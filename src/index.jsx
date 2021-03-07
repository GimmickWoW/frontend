import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@chakra-ui/react';
import Navigation from './nav';

ReactDOM.render(
    <>
        <ThemeProvider>
            <Navigation />
        </ThemeProvider>
    </>,
    document.getElementById('root')
);
