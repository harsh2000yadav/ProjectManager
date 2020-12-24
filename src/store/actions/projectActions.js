export const createProject = (project) => {
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async calls to database and pausing dispatch for the moment 
        dispatch({
            type: 'ADD_PROJECT',
            project
        })
    }

}