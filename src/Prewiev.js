import React, { Component } from 'react';
import { Button, Radio, Slider, InputNumber, Row, Col } from 'antd';
import './Prewiev.css';
import {
    PlaySquareOutlined,
    PlayCircleOutlined,
} from '@ant-design/icons';

export default class Prewiev extends React.Component {
    state = {
        type: "preview_1920x158",
        value: 1,
        inputValue: 0,
    }
    handleChange = () => {
        this.setState({
            type: "preview_1920x158"
        });
    };
    handleChange2 = () => {
        this.setState({
            type: "preview_2880x158"
        });
    };
    handleChange3 = () => {
        this.setState({
            type: "preview_3840x160"
        });
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    onChangeslider = value => {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };
    render() {
        const { type, value, inputValue } = this.state;
        return (
            <div className="all_preview">

                <div id="portfolio">
                    <div id={type}>
                        <span>Предпросмотр </span>
                        <span className="playSquare"><PlaySquareOutlined style={{ fontSize: 18.75 }} /></span>
                    </div>
                </div>
                <div className="icon-wrapper">
                    <span><PlayCircleOutlined className="play_circle" /></span>
                    <Slider
                        type="time"
                        min={0}
                        max={20}
                        onChange={this.onChangeslider}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.1}
                        className="slider-app"
                        style={{width: 1006}}
                    />
                </div>
                <span className="text-choice">Выберите разрешение для экрана превью</span>
                <Radio.Group onChange={this.onChange} value={value} className="choice">
                    <Radio onClick={this.handleChange} value={1}>1920 x 158 px</Radio>
                    <Radio onClick={this.handleChange2} value={2}>2880 x 158 px</Radio>
                    <Radio onClick={this.handleChange3} value={3}>3840 x 160 px</Radio>
                </Radio.Group>
            </div>
        )
    }
}

