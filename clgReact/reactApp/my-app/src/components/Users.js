import { Component } from 'react';
import User from './User.js'

export default class user extends
    Component {
adduser = (e) => {
    e.preventDefault()
    alert("user is added")
}
    render() {
        return (
            <div>
                {this.props.userdata.map((ud) => <User key={ud} user={ud} />)}
                <button disabled={!this.props.hasData} onClick={this.props.da}> delete All</button>            </div>

        )
    }
}