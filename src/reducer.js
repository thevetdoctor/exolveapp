export default function reducer(state, action) {
    switch(action.type) {
        case "SET_USER":
            console.log('Adding user state');
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
              ...state,
              user: action.user
            }          
        case 'ADD_TODO':
            console.log('About to add a TODO');
            return {
                ...state, addTodo: action.addTodo
            };
        case 'SAVE_TODO':
            console.log('Saving a TODO');
            localStorage.setItem('todos', JSON.stringify([...state.todos, action.todo]));
            return {
                ...state, todos: [...state.todos, action.todo]
            };
        case 'HANDLE_DONE':
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
        case 'SET_USERNAME':
            console.log('Adding github username');
            return {
                ...state, username: action.data
            };
        case 'SET_PASSWORD':
            console.log('Adding password');
            return {
                ...state, password: action.data
            };
        case 'SET_EMAIL':
            console.log('Adding email');
            return {
                ...state, email: action.data
            };
        case 'SET_AUTHENTICATE':
            console.log('Setting authenticate');
            return {
                ...state, authenticated: action.data
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
        case 'SET_TAG':
            console.log('Tagging errors');
            return {
                ...state, tag: action.error
            };
            
            case 'SET_LOGOUT':
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
    repoData: [],
    publicData: {},
    todos: JSON.parse(localStorage.getItem('todos')) ||[],
    user: JSON.parse(localStorage.getItem('user')) || null,
    username: '',
    addTodo: false,
    email: '',
    password: '',
    tag: '',
    authenticated: JSON.parse(localStorage.getItem('user')) || false
};
