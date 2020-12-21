import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore neque consequatur amet obcaecati distinctio voluptatem aliquid modi cum eos tenetur vero aspernatur, nesciunt hic at omnis dolores et commodi!</p>
                </div>
                <div className="card-action grey lighten-4 black-text">
                    <div>Posted by Harsh Yadav</div>
                    <div>21st December 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
