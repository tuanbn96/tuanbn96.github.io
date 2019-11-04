import { Table, Divider, Popconfirm } from 'antd';
import React from 'react'
import axios from 'axios';
import app from 'firebase/app';
import db from './firebase'
export default class Danhsach extends React.Component {
    constructor(props) {
        super(props);
        this.db = app.firestore();
        this.columns = [
            {
                title: 'Avatar',
                dataIndex: 'src',
                key: 'avatar',
                render: text => <img className='avatar' src={text} alt='anh demo' />,
            },
            {
                title: 'Name',
                dataIndex: 'ten',
                key: 'name',
            },
            {
                title: 'Location',
                dataIndex: 'vitri',
                key: 'localtion',
            },
            {
                title: 'Price',
                dataIndex: 'gia',
                key: 'price',
                render: price => <span>{price.toLocaleString()} vnđ</span>
            },
            {
                title: 'Rate',
                dataIndex: 'danhgia',
                key: 'rating',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) =>
                    this.state.data.length >= 1 ? (
                        <span>
                            <a href='/'>Edit </a>
                            <Divider type="vertical" />
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                                <a>Delete</a>
                            </Popconfirm>
                        </span>
                    ) : null,
            },
        ];
        this.state = {
            data: [],
        }
    }
    
    componentWillMount() {
        // get the whole collection
        this.db
            .collection('documents')
            .get()
            .then((querySnapshot) => {
                const demo = querySnapshot.docs.map(doc => doc.data())
                this.setState({
                    data: demo
                })
                console.log(demo)

            })
    }
    render() {
        const columns = this.columns.map(col => {
            return col;
        });
        return (
            <div>
                <Table
                    rowKey={record => record.uid}
                    columns={columns}
                    dataSource={this.state.data}
                />
            </div>
        )
    }
}
