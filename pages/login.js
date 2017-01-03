/**
 * Created by tofael on 12/28/16.
 */

import React from 'react'
import Loginform from '../components/loginform'
import Header from '../components/header'

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name:'',
            password:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, e) {
        this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render () {
        return  <div>
            <Header/>
            <Loginform
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
            />
        </div>

    }


}
