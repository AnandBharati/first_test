import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading';
import Button from '../components/Button';
import './CountDown.css'

function CountDown() {
    const [timer, setTimer] = useState(0);
    const [state, setState] = useState('');


    useEffect(() => {
        let timeId;
        timeId = setInterval(() => {
            state === 'started' && changeTimeHandler(timer + 1);
        }, 1000);

        return () => clearInterval(timeId);
    }, [state, timer])


    const changeTimeHandler = (time) => {
        setTimer(() => time);
    }

    const changeState = () => {
        if (state === 'started') setState('paused');
        else setState('started');
    }

    const resetHandler = () => {
        setState('');
        setTimer(0);
    }

    return (
        <div className='countdown'>
            <Heading type='h1'> Count Down </Heading>
            <Heading type='h4' style={{ textAlign: 'center', marginBottom: '1rem' }}>
                {timer}s
            </Heading>
            <div className="btns">
                <Button onClick={changeState}>
                    {state === 'started' ? 'pause' : state === 'paused' ? 'resume' : 'start'}
                </Button>
                <Button onClick={resetHandler}> Reset</Button>
            </div>
        </div>
    )
}

export default CountDown