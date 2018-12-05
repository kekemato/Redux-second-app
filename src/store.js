import {createStore, combineReducers} from 'redux'

const reducer1 = () => {
    return {
        name: 'Ala'
    }
}

const reducer2 = () => {
    return {
        name: 'Ola',
        surname: 'Kowalska'
    }
}

const rootReducer = combineReducers({
    reducer1,
    reducer2
})

export const store = createStore(
    rootReducer
)

console.log(store.getState())