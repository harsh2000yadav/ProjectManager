export const createProject = (project) => {

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        //async calls to database and pausing dispatch for the moment 
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Hrush',
            authorLastName: 'Yadav',
            authorId: 4760,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_PROJECT',
                project
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_PROJECT_ERROR', err                
            });
        })

    }

}