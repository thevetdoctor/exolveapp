export default function reducer(state, action) {
    switch(action.type) {
        case "SET_USER":
            console.log('Adding user state');
            return {
              ...state,
              user: action.user
            }        
            
        case 'SET_USERNAME':
            console.log('Adding github username');
            return {
                ...state, username: action.username
            };
        case 'SET_PUBLIC_DATA':
            console.log('Adding public data');
            return {
                ...state, publicData: action.publicData
            };
        case 'SET_REPO_DATA':
            console.log('Adding repository data');
            return {
                ...state, repoData: action.data
            };

        case 'CLEAR_STATE':
            return {
                user: null,
                publicData: {},
                repoData: []
            };

        default:
        return state;
    }
};
 
export const initialState = {
    repoData: [],
    publicData: {},
    user: null,
    username: ''
};
