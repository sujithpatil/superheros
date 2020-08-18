import * as actions from './actions';

const reducer = ( state = { heros:[], deleteKeys: [] }, action ) => {
    if( action.type === actions.ADD_RECORD ) {
        actions.addRecord( action.body );
        return {
            ...state,
            deleteKeys: [],
            heros: actions.getAllRecords()
        }
    } else if ( action.type === actions.DELETE_RECORD ) {
        actions.deleteRecord( state.deleteKeys );
        return {
            ...state,
            deleteKeys: [],
            heros: actions.getAllRecords()
        }
    } else if ( action.type === actions.SEARCH_RECORD ) {
        return {
            ...state,
            heros: actions.searchRecords( action.text )
        }
    } else if ( action.type === actions.GET_ALL_RECORDS ) {
        return {
            ...state,
            heros: actions.getAllRecords()
        };
    } else if ( action.type === actions.DELETE_ITEM ) {
        return {
            ...state,
            deleteKeys: [...state.deleteKeys, action.key]
        }
    }
    return state;
}

export default reducer;