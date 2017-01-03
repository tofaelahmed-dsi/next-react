/**
 * Created by tofael on 12/28/16.
 */

import React from 'react'
import Router from 'next/router'
import 'whatwg-fetch';

import Signupform from '../components/signupform'
import Header from '../components/header'

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            user_name:'',
            email:'',
            password:'',
            phone:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, e) {
        this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        Router.push('/login');
    }

    render () {
        return  <div>
            <Header/>
            <Signupform
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
            />
        </div>

    }


}
