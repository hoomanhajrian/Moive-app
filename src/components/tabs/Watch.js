import React, { Component } from "react";
import axios from 'axios';
import { APP_KEY, SEARCH_URL } from '../../config/api_config';



export default class Watch extends Component {

    render() {
        return (
            <div><video controls /></div>
        )
    }
}