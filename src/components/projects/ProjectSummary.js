import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card project-summary radius-3">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">21st December 2020</p>
            </div>
        </div>
    )
}

export default ProjectSummary

import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card project-summary radius-3">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">21st December 2020</p>
            </div>
        </div>
    )
}

export default ProjectSummary