import React from 'react'
import styles from "./style.module.css"
import SingleDigit from './SingleDigit'
import TimeSeperator from './TimeSeperator'
import useTimer from './useTimer';
import Button from '../Buttons';

const DigitalClock = () => {
    const { timeLeft, isActive, start, pause, reset, formatTime } = useTimer(5); // 15 minutes
    const colorOn = "black"
    const colorOff = "rgba(0,0,0,0.1)"

  return (
    <div>
      <div>

        <SingleDigit colorOn={colorOn} colorOff={colorOff} digit={formatTime(timeLeft)[0]} />
        <SingleDigit  colorOn={colorOn} colorOff={colorOff} digit={formatTime(timeLeft)[1]}/>
        <TimeSeperator color={colorOn} />
        <SingleDigit colorOn={colorOn} colorOff={colorOff} digit={formatTime(timeLeft)[2]}/>
        <SingleDigit  colorOn={colorOn} colorOff={colorOff} digit={formatTime(timeLeft)[3]}/>
      </div>
      <div className={styles.button__row}>
        <Button size='large' onClick={start}>Start</Button>
        <Button size="small" onClick={pause}>Pause</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}

export default DigitalClock