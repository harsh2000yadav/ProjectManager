const initState = {
    projects : [
        {id: '1', title: 'Test Project 1', desc: 'Description of test project 1'},
        {id: '2', title: 'Test Project 2', desc: 'Description of test project 2'},
        {id: '3', title: 'Test Project 3', desc: 'Description of test project 3'}

    ]

}

const projectReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'ADD_PROJECT': 
            console.log('New project created', action.project)   
            return state;        
        
        case 'ADD_PROJECT_ERROR':
            console.log('Error while creating project', action.err)
            return state;
    
        default:
            return state;
    }
}

export default projectReducer

