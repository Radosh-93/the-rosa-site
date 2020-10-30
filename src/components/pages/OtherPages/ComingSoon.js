import React, {useEffect, useState} from 'react'
import './ComingSoon.scss'

const ProgressRing = ({time, offsetCount = 60, children, color = '#000000', opacity = 0.13}) => {
    const opacityToHex = (opacity * 255).toString(16).slice(0, 2);

    const width = 180;
    const height = 180;
    const strokeWidth = 4;
    const radius  = (width / 2) - (strokeWidth * 2);
    const progress = offsetCount - time;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / offsetCount * circumference;
    return (
        <div className='progress-ring'>
            <svg width={width} height={height}>
                <circle className='progress-ring__circle'
                        stroke={color + opacityToHex}
                        strokeWidth={strokeWidth}
                        fill='transparent'
                        r={radius}
                        cx={width / 2}
                        cy={width / 2}
                />
                <circle className='progress-ring__circle'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill='transparent'
                        r={radius}
                        cx={width / 2}
                        cy={width / 2}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{strokeDashoffset}}
                />
            </svg>
            <p className='countdown-value'>
                <span className='value'>{time}</span>
                <span className='time'>{children}</span>
            </p>
        </div>
    )
}

const ComingSoon = (props) => {
    const countDownDate = new Date('Jan 5, 2021 10:00:00').getTime();
    let now = new Date().getTime();
    const initialDays = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));
    const initialHours = Math.floor((countDownDate - now) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const initialMinutes = Math.floor(((countDownDate - now) % (1000 * 60 * 60)) / (1000 * 60));
    const initialSeconds = Math.floor(((countDownDate - now) % (1000 * 60)) / 1000);
    let [days, setDays] = useState(initialDays);
    let [hours, setHours] = useState(initialHours);
    let [minutes, setMinutes] = useState(initialMinutes);
    let [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            setDays(Math.floor((distance) / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => {clearInterval(x)};
    }, [countDownDate])

    return (
        <div className='coming-soon-block'>
            <h3 className='title'>Coming Soon</h3>
            <p className='description'>We are working hard to launch our new site</p>
            <div className="timer-block">
                <ProgressRing time={seconds} color='#ff6e00'>secs</ProgressRing>
                <ProgressRing time={minutes} color='#fd08a8'>mins</ProgressRing>
                <ProgressRing time={hours}
                              offsetCount={24}
                              color='#24cad9'>hours</ProgressRing>
                <ProgressRing time={days}
                              offsetCount={100}
                              color='#bafc00' >days</ProgressRing>
            </div>
        </div>
    );
};
export default ComingSoon;