import actions from "./redux/actions";

export default function reducer(state= initialState, action) {
    switch(action.type) {
        case actions.setUser.type:
            console.log('Adding user state');
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
              ...state,
              user: action.user
            }          
        case actions.addTodo.type:
            console.log('About to add a TODO');
            return {
                ...state, addTodo: action.addTodo
            };
        case actions.saveTodo.type:
            console.log('Saving a TODO');
            localStorage.setItem('todos', JSON.stringify([...state.todos, action.todo]));
            return {
                ...state, todos: [...state.todos, action.todo]
            };
        case actions.handleDone.type:
            console.log('Changing TODO\'s status');
            const findTodo = state.todos.findIndex(todo => todo.id === action.id);
            const todoState = state.todos.map((todo, idx) => {
                let newTodo = {...todo};
                if(findTodo === idx) {
                    newTodo.done = !todo.done
                }
                return newTodo;
            });
            localStorage.setItem('todos', JSON.stringify(todoState));
            return {
                ...state, todos: todoState
            };
        case actions.setUsername.type:
            console.log('Adding github username');
            localStorage.setItem('username', JSON.stringify(action.data));
            return {
                ...state, username: action.data
            };
        case actions.setPassword.type:
            console.log('Adding password');
            return {
                ...state, password: action.data
            };
        case actions.setEmail.type:
            console.log('Adding email');
            return {
                ...state, email: action.data
            };
        case actions.setAuthenticate.type:
            console.log('Setting authenticate');
            localStorage.setItem('authenticated', true);
            localStorage.setItem('user', true);
            return {
                ...state, authenticated: action.data, user: true, password: 'hidden'
            };
        case actions.setPublicData.type:
            console.log('Adding public data');
            localStorage.setItem('public', JSON.stringify(action.publicData));
            return {
                ...state, publicData: action.publicData
            };
        case actions.setRepoData.type:
            console.log('Adding repository data');
            localStorage.setItem('repo', JSON.stringify(action.data));
            return {
                ...state, repoData: action.data
            };
        case actions.setTag.type:
            console.log('Tagging errors');
            return {
                ...state, tag: action.error
            };
            
        case actions.setLogOut.type:
        console.log('Logout');
        localStorage.clear();
        return {
            user: null,
            publicData: {},
            repoData: [],
            todos: [],
            authenticated: false
        };

        default:
        return state;
    }
};
 
export const initialState = {
    repoData: JSON.parse(localStorage.getItem('repo')) || [],
    publicData: JSON.parse(localStorage.getItem('public')) || {},
    todos: JSON.parse(localStorage.getItem('todos')) ||[],
    user: JSON.parse(localStorage.getItem('user')) || null,
    username: JSON.parse(localStorage.getItem('username')) || '',
    addTodo: false,
    email: '',
    password: '',
    tag: '',
    authenticated: JSON.parse(localStorage.getItem('authenticated')) || false
};
