import {Component} from 'react'


export default class Header extends
Component{

    render(){
        return (
            <>
            <p> Header is here</p>
            <h1>{this.props.sm}</h1>
            </>
        )
    }
    
    
}