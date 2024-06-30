import { Component } from 'react';

export default class addUser extends
Component {
    addUser = (e) => {
        e.preventDefault()
        const data=e.target.elements.uname.value
        this.props.au(data)
    }
    render() {
        return (
            <span>
                <form onSubmit={this.addUser}>
                    <input type='text' name='uname'/>
                <button className='btn btn-primary' >Add</button>
                </form>
               
            </span>
        )
    }
}