import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {useSettingsContext} from '../context/SettingsContextProvider';

const CountdownAnimation = () => {

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
   
     // TODO 1: When the user changes the subTimer the number of seconds the timer has run
     //       on the previous subTimer is applied to the current subTimer --> Add the key 
     //       property to <CountdownCircleTimer/>

    return (
        <CountdownCircleTimer
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