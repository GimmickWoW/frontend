import { ThemeProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <>
        <ThemeProvider>
            <h1>Hello, Gimmick!</h1>
        </ThemeProvider>
    </>,
    document.getElementById('root')
);
