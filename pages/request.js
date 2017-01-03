/**
 * Created by tofael on 12/30/16.
 */

import React from 'react'


import Requestform from '../components/requestform'
import Header from '../components/header'
import io from 'socket.io-client'

//const socket = io('http://localhost:3000');

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, e) {
        this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        //socket.emit('new_request', this.state.phone);
    }

    render () {
        return  <div>
            <Header/>
            <Requestform
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
            />
        </div>

    }


}
