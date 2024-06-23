import {Component} from 'react'

export default class User extends
Component{

    render(){
        return (
            <>
            <h2>
            {this.props.user}
            </h2>
            <p> User is here</p>
           </>
        )
    }
    
    
}