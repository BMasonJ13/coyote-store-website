// flipclock.js Created on Fri Apr 15 2022

//React / Next Imports
import React from 'react'

import styles from './FlipClock.module.css'

// function component
const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`${styles.flipCard} ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const StaticCard = ({ position, digit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {

    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit + 1;

    // to prevent a negative value
    if (unit !== 'hours') {
        previousDigit = previousDigit === - 1
            ? 59
            : previousDigit;
    } else {
        previousDigit = previousDigit === - 1
            ? 23
            : previousDigit;
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle
        ? previousDigit
        : currentDigit;
    const digit2 = !shuffle
        ? previousDigit
        : currentDigit;

    // shuffle animations
    const animation1 = shuffle
        ? styles.fold
        : styles.unfold
    const animation2 = !shuffle
        ? styles.fold
        : styles.unfold;

    return (
        <div className={styles.flipUnitContainer}>
            <StaticCard
                position={styles.upperCard}
                digit={currentDigit}
            />
            <StaticCard
                position={styles.lowerCard}
                digit={previousDigit}
            />
            <AnimatedCard
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                digit={digit2}
                animation={animation2}
            />
        </div>
    );
};

// class component
class FlipClock extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            className: props.className,
            days: 0,
            daysShuffle: true,
            hours: 0,
            hoursShuffle: true,
            minutes: 0,
            minutesShuffle: true,
            seconds: 0,
            secondsShuffle: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        // get new date
        const time = new Date();
        // set time units
        // get total seconds between the times
        var delta = Math.abs(this.props.date - time) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = Math.ceil(delta) % 60;  

        if (days !== this.state.days) {
            const daysShuffle = !this.state.daysShuffle;
            this.setState({
                days,
                daysShuffle
            });
        }

        if (hours !== this.state.hours) {
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                hoursShuffle
            });
        }
        // on minute chanage, update minutes and shuffle state
        if (minutes !== this.state.minutes) {
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                minutesShuffle
            });
        }
        // on second chanage, update seconds and shuffle state
        if (seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            });
        }
    }

    render() {

        // state object destructuring
        const {
            days,
            hours,
            minutes,
            seconds,
            daysShuffle,
            hoursShuffle,
            minutesShuffle,
            secondsShuffle
        } = this.state;

        return (
            <div className={`${styles.flipClock} ${this.state.className}`}>
                <FlipUnitContainer 
                    unit={"days"}
                    digit={days}
                    shuffle={daysShuffle}
                />
                <FlipUnitContainer
                    unit={'hours'}
                    digit={hours}
                    shuffle={hoursShuffle}
                />
                <FlipUnitContainer
                    unit={'minutes'}
                    digit={minutes}
                    shuffle={minutesShuffle}
                />
                <FlipUnitContainer
                    unit={'seconds'}
                    digit={seconds}
                    shuffle={secondsShuffle}
                />
            </div>
        );
    }
}

export default FlipClock