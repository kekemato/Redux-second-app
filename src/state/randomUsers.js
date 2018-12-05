const SET_USERS = 'random.Users/SET_USERS'
const START_FETCHING = 'randomUsers/START_FETCHING'
const STOP_FETCHING = 'randomUsers/STOP_FETCHING'
const ERROR_FETCHING = 'randomUsers/ERROR_FETCHING'

export const fetchUsersAsyncAction = url => (dispatch, getState) => {
    dispatch(startFetchingAction())
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(setUsersAction(data.results))
            dispatch(stopFetchingAction())
        })
        .catch(() => {
            dispatch(errorFetchingAction())
        })
}

const startFetchingAction = () => ({ type: START_FETCHING })
const stopFetchingAction = () => ({ type: STOP_FETCHING })
const errorFetchingAction = () => ({ type: ERROR_FETCHING })

const setUsersAction = users => ({
    type: SET_USERS, users
})

const INITIAL_STATE = {
    users: [],
    isFetching: false,
    isError: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: 'Ładowanie',
                isError: false
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: false
            }
        case ERROR_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: 'Sorry, wystąpił błąd'
            }
        default:
            return state
    }
}