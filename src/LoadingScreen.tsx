import { Hatch } from 'ldrs/react';
import 'ldrs/react/Hatch.css';

export default function LoadingScreen() {
    return (
        <div id="loading-screen">
            <h1 className='title --font-title'>Loading</h1>
            <Hatch size="28" stroke="4" speed="3.5" color="black" />
        </div>
    )
}