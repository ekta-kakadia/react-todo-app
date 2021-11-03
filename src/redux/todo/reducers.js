/* eslint-disable import/no-anonymous-default-export */

const INIT_STATE = {
    todos: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TODO":
            return {
                ...state,
                error: undefined,
            };

        case "GET_TODO_SUCCESS":
            return {
                ...state,
                error: undefined,
                todos: action.payload,
            };

        case "GET_TODO_ERROR":
            return {
                ...state,
                error: action.payload.message,
            };

            case "ADD_TODO":
                return {
                    ...state,
                    error: undefined,
                };
    
            case "ADD_TODO_SUCCESS":
                return {
                    ...state,
                    error: undefined,
                };
    
            case "ADD_TODO_ERROR":
                return {
                    ...state,
                    error: action.payload.message,
                };

                case "DELETE_TODO":
                    return {
                        ...state,
                        error: undefined,
                    };
        
                case "DELETE_TODO_SUCCESS":
                    return {
                        ...state,
                        error: undefined,
                    };
        
                case "DELETE_TODO_ERROR":
                    return {
                        ...state,
                        error: action.payload.message,
                    };
                
                    case "EDIT_TODO":
                        return {
                            ...state,
                            error: undefined,
                        };
            
                    case "EDIT_TODO_SUCCESS":
                        return {
                            ...state,
                            error: undefined,
                        };
            
                    case "EDIT_TODO_ERROR":
                        return {
                            ...state,
                            error: action.payload.message,
                        };
    
        default:
            return { ...state };
    }
};
