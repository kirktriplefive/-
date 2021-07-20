import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Image, Space, Typography } from 'antd';
import Playlists from './Playlists'
import {
    ProjectOutlined,
    PlaySquareOutlined,
    PictureOutlined,
    ClusterOutlined,
    LineChartOutlined,
    RadarChartOutlined,
} from '@ant-design/icons';
import './App.css'
const { Sider } = Layout;

export default class MenuApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        }

    }
    render() {
        return (
            <>

              </> 
        )
    }
}
