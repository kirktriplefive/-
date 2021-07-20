import React, { Component } from 'react'
import './App.css';
import { Result, Button } from 'antd';


export default class ErrorApp extends Component {
    render() {
        return (
                <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                />
        )
    }
}
