export const createProject = (project) => {
    
    return (dispatch, getState) => {
        //async calls to database and pausing dispatch for the moment 
        dispatch({
            type: 'ADD_PROJECT',
            project
        })
    }

}