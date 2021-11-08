import * as React from 'react';
import { Container } from '@mui/material';
import iquad from '../assets/iquad.png';

export default function MiddleContent() {
    return (
        <body>
            <div className="sm:mt-1 lg:mt-1">
                <span className="text-blue-900 font-bold">Powered by:</span>
                <img className="mx-auto w-screen max-w-2xl" src={iquad} alt="iquad"/>
            </div>        
        </body>
    );
}
