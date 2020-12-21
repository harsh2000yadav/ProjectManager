import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title:'',
        desc:''
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
                    <h4 className="grey-text-text-darken-4">Create New Project</h4>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.handleChange} autoComplete='off'/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" rows='30' className="materialize-textarea" onChange={this.handleChange} autoComplete='off'></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn orange lighten-2 ">Create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default CreateProject
