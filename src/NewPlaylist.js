import React, { Component } from 'react'
import { TweenOneGroup } from 'rc-tween-one';
import { Form, Input, Button, Select, Tag, Row, Col, InputNumber  } from 'antd';
import TagApp from './TagApp'
import './App.css';
import {
    DeleteOutlined,
    TagOutlined,
    PlusOutlined
  } from '@ant-design/icons';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const { Option } = Select;
const { Search } = Input;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const onFinish = (values: any) => {
    console.log(values);
};

class NewPlaylist extends React.Component {
    state = {
        visible: true,
        tags: ['Кола',],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };
    saveInputRef = input => {
        this.input = input;
    };
    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: true,
            inputValue: '',
        });
    };
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };
    onChange(value) {
        console.log('changed', value);
      }
    onSearch = value => console.log(value);
    forMap = tag => {
        const tagElem = (
            <Tag
                closable
                className="tags"
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };
    render() {
        const { tags, onSearch, inputValue, onChange } = this.state;
        const tagChild = tags.map(this.forMap);
        return (

            <div className="NewPlaylist">
                <Form layout='vertical' name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item rules={[{ required: true }]}>
                        <span className="text-form">Название плейлиста</span>
                        <span className="red">*</span>
                        <div>
                            <Input style={{ width: 320 }} />
                        </div>
                    </Form.Item>
                    <Form.Item >
                        <span className="text-form">Тип плейлиста</span>
                        <span className="default-text">(по умолчанию тип «Обычный»)</span>
                        <div>
                            <Select
                                placeholder="Выберите"
                                allowClear
                                style={{ width: 320 }}
                                defaultValue="Обычный"

                            >
                                <Option value="Обычный">Обычный</Option>
                                <Option value="Специальный">Специальный</Option>
                                <Option value="Длинный">Длинный</Option>
                            </Select>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <span className="text-form">Тэги</span>
                        <div className="container">
                            <div>
                                <Input
                                    className="new-input"
                                    type="text"
                                    placeholder="Добавьте тэги"
                                    style={{ width: 244 }}
                                    ref={this.saveInputRef}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                />
                                <Button
                                    className="Button-form"
                                    style={{ width: 74, left: 2 }}
                                    onClick={this.handleInputConfirm}
                                >
                                    Добавить
                                </Button>
                            </div>
                            <div>
                                <TweenOneGroup
                                    enter={{
                                        scale: 0.8,
                                        opacity: 0,
                                        type: 'from',
                                        duration: 50,
                                        onComplete: e => {
                                            e.target.style = '';
                                        },
                                    }}
                                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                    appear={false}
                                    className="group-tags"
                                >
                                    {tagChild}
                                </TweenOneGroup>
                            </div>
                        </div>

                    </Form.Item>
                    <Form.Item rules={[{ required: true }]}>
                        <Input.Group>
                            <Row gutter={8}>
                                <Col>
                                    <span className="text-form">Контент для проигрывания</span>

                                    <span className="red">*</span>

                                    <div>
                                        <Search placeholder="Начните вводить название" onSearch={onSearch} style={{ width: 320 }} />
                                    </div>
                                </Col>
                                <Col className="time-input">
                                    <span className="text-form">Продолжительность, мин</span>
                                    <div>
                                        <InputNumber
                                        
                                            defaultValue={1000}
                                            formatter={value => `${value}`.replace(/\B(?=(\d{2})+(?!\d))/g, ':')}
                                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                            onChange={onChange}
                                            style={{ width: 188 }}
                                        />
                                    </div>
                                </Col>
                                <Col >
                                <br/>
                                <Button className='r-btn' style={{ width: 32, height:32 }} icon={<TagOutlined />}/>
                                </Col>
                                <Col>
                                <br/>
                                <Button className='delete-btn' style={{ width: 32, height:32 }} icon={<DeleteOutlined />}/>
                                </Col>
                                <Col>
                                <br/>
                                <Button className='plus-btn' style={{ width: 110, height:32 }} type="reset" icon={<PlusOutlined />}>
                                    Контент
                                </Button>
                                </Col>
                            </Row>

                        </Input.Group>
                    </Form.Item>
                </Form>
            </div >

        )
    }


}
export default NewPlaylist