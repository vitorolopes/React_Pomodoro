import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {useSettingsContext} from '../context/SettingsContextProvider';

const CountdownAnimation = ( { key }) => {

    const {startAnimate, executing} = useSettingsContext()

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds}`;
    };

    let timeInterval = executing.work;
    switch(executing.currentSubTimer){
        case "work":
            timeInterval = executing.work
            console.log(timeInterval)
            break;
        case "short":
            timeInterval = executing.short
            break;
        case "long":
            timeInterval = executing.long
            break;
        default:
            break
    }
   


    return (
        <CountdownCircleTimer
            key={key} //. If you want to restart the timer when the duration changes
        // then pass a new key prop to CountdownCircleTimer component and 
        // the timer will start over with the new values provided.
        // SEE https://codesandbox.io/s/tender-bogdan-qd35m?file=/src/index.js:1071-1101
        // and https://www.npmjs.com/package/react-countdown-circle-timer 
        // (Changing duration prop -->Restart timer at any given time)
        
            isPlaying={startAnimate} // Boolean - Play or pause animation
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