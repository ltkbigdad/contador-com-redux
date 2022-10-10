const resultReducer = (state = 0, action) =>{
    console.log(action);

    switch(action.type){
        case 'ADD_NUMBER':
            return state + action.payload;

        case 'SUB_NUMBER':
            if(state > 0){
                return state - action.payload;
            } else {
                return state
            }
            
            

        default:
            return state;    
    }
}

export default resultReducer;