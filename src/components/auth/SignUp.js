import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="grey lighten-4">
                    <h4 className="grey-text-text-darken-4">Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} autoComplete='off'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} autoComplete='off'/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} autoComplete='off' />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} autoComplete='off' />
                    </div>

                    <div className="input-field">
                        <button className="btn orange lighten-2 ">Sign Up</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignUp
