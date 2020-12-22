export const createProject = (project) =>{
    return (dispatch, getState) =>{
        //async calls to database
        dispatch({type: 'ADD_PROJECT', project});
    }
}