import React from 'react';
import { HashRouter } from 'react-router-dom';
import Definition from './def';

export default function Nav() {
    return (
        <HashRouter>
            <Definition />
        </HashRouter>
    );
}
