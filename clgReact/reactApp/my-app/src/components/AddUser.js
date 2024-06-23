import {Component} from 'react'

export default class AddUser extends
Component{

    addUser =(e)=>{
        e.preventDefault()
        alert('user is added')
    }

    render(){
        return (
            <>
            <form>

            <button onClick={this.addUser}> ADD</button>

            </form>
            <p> Adduser is here</p>
            </>
        )
    }
    
    
}