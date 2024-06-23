import {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import AddUser from './AddUser'
import Users from './Users'

export default class MainApp extends
Component{

    render(){
        const superman = "Welcome super-man"
        const byeman = "Bye super-man"
        const userData = ['Aakash','Raaam','Vinod'];
        return (
            <>
            <Header sm={superman}/>
            <p> Main App is here</p>
            <Footer bye={byeman}/>
            <AddUser/>
            <Users userdata={userData}/>

            </>
        )
    }
    
    
}