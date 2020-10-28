import React, {useEffect, useState} from 'react'
import './ComingSoon.scss'

const ProgressRing = () => {
    const width = 120;
    const height = 120;
    const strokeWidth = 4;
    const radius  = (width / 2) - (strokeWidth * 2);
    const progress = 59;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 60 * circumference;
    return (
        <div>
            <svg className='progress-ring'
                 width={width} height={height}>
                <circle className='progress-ring__circle'
                        stroke='black'
                        strokeWidth={strokeWidth}
                        fill='transparent'
                        r={radius}
                        cx={width / 2}
                        cy={width / 2}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{strokeDashoffset}}
                />
            </svg>
        </div>
    )
}

const ComingSoon = (props) => {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let countDownDate = new Date('Jan 5, 2021 10:00:00').getTime();
    useEffect(() => {
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => {clearInterval(x)}
    }, [])

    return (
        <div className='coming-soon-block'>
            <h4>The website is under construction</h4>
            <h3>Coming Soon</h3>
            <p>Subscribe to the newsletter to stay in the latest news</p>
            <ProgressRing/>
            <div className="timer-block">
                <div className="days">{days}d </div>
                <div className="hours">{hours}h </div>
                <div className="mins">{minutes}m </div>
                <div className="secs">{seconds}s </div>
            </div>
        </div>
    );
};
export default ComingSoon;