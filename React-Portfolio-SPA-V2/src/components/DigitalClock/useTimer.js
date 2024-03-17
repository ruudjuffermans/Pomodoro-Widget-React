import { useState, useEffect } from 'react';

const useTimer = (initialState = 900) => {
    const [timeLeft, setTimeLeft] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => {
                    if (timeLeft > 1) {
                        return timeLeft - 1;
                    } else {
                        // When timer reaches 0, mark as completed and stop the timer
                        setIsActive(false);
                        setCompleted(true);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const start = () => {
        if (timeLeft === 0) {
            setTimeLeft(initialState); // Reset time if starting from 0
        }
        setIsActive(true);
        setCompleted(false); // Reset completion status on start
    };

    const pause = () => {
        setIsActive(false);
    };

    const reset = () => {
        setIsActive(false);
        setTimeLeft(initialState);
        setCompleted(false); // Also reset completion status on reset
    };

    // Optional: Format timeLeft into minutes and seconds for display
    const formatTime = () => {

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        let digitsArray = formattedTime.split('').filter(char => char !== ':').map(Number);

        while (digitsArray.length < 4) {
            digitsArray.unshift(null); // Prepend null to the start of the array
        }
        // Convert the time string to an array of integers, excluding the colon
        return digitsArray
    };

    return { timeLeft, isActive, completed, start, pause, reset, formatTime };
};

export default useTimer;