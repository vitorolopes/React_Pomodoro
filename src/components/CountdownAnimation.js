import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {useSettingsContext} from '../context/SettingsContextProvider';

const CountdownAnimation = () => {

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds}`;
        };

    let timeInterval = 1;

    return (
        <CountdownCircleTimer
            isPlaying={true} // Boolean - Play or pause animation
            duration={ timeInterval * 60 } // Number - Countdown duration in seconds
            colors={[ 
            ["#FE6F6B", 0.33],
            ["#FE6F6B", 0.33],
            ["#FE6F6B", 0.33],
            ]}
            strokeWidth={6}
            size={220}
        >
{/* children: Render function to customize the time/content in  the center of  the circle */} 
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation