import {Component} from 'react'
import User from './User'

export default class Users extends
Component{

    render(){
        const udya = ['Aakash','Raaam','Vinod'];
        return (<>
                    <p> Users are here</p>
                    {this.props.userdata.map((ud) =>   <User user={ud}/>)}
                    
        </>
        )
    }
    
    
}