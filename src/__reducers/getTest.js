const testReducer = (state = false, action) => {
    switch(action.type){
        case 'TEST':
            return true
        default:
            return state
    }
}
export default testReducer;