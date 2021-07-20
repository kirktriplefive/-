import React, { Component } from 'react'
import './App.css';
import { Divider, Steps, Button, message } from 'antd';
import NewPlaylist from './NewPlaylist';
import Prewiev from './Prewiev'
const { Step } = Steps;
const steps = [
    {
        title: 'Настроить плейлист',
        content: 'First-content',
    },
    {
        title: 'Выбрать устройства',
        content: 'Second-content',
    },
    {
        title: 'График воспроизведения',
        content: 'Last-content',
    },
];


const StepsApp = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    return (
        <>
            <Steps className="Steps" size='small' current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <Divider />
            <Prewiev/>
            <NewPlaylist />
            <div className="steps-action">
                <Button type="primary" className="btn-save" htmlType="submit">
                    Сохранить как черновик
                </Button>
                {current < steps.length - 1 && (
                    <Button type="primary" className="btn-next" onClick={() => next()}>
                        Далее
                    </Button>
                )}
            </div>
        </>
    )
}

export default StepsApp;