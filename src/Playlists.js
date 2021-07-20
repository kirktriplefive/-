import React, { Component } from 'react'
import {Layout} from 'antd'
import './App.css';
import StepsApp from './StepsApp'
import {
    CloseOutlined
  } from '@ant-design/icons';

const { Content,  } = Layout;
export default class Playlists extends Component {
    render() {
        return (
            <>
            <div className="Texting">
                <span>Новый плейлист</span>
                <span className="close"><CloseOutlined/></span>
            </div>
            <StepsApp/>
            
            </>
        )
    }
}
