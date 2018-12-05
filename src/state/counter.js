const INC = 'counter/INC'
const DEC = 'counter/DEC'
const RESET = 'counter/RESET'
const INC_BY_NUMBER = 'counter/INC_BY_NUMBER'
const DEC_BY_NUMBER = 'counter/DEC_BY_NUMBER'

const INITIAL_STATE = {
    number: 0
}

export const inc = () => ({
    type: INC
})

export const dec = () => ({
    type: DEC
})

export const reset = () => ({
    type: RESET
})

export const incByNumber = (num) => ({
    type: INC_BY_NUMBER,
    number: num || 1
})

export const decByNumber = (num) => ({
    type: DEC_BY_NUMBER,
    number: num || 1
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                number: state.number + 1
            }
        case DEC:
            return {
                ...state,
                number: state.number - 1
            }
        case RESET:
            return {
                ...state,
                number: 0
            }
        case INC_BY_NUMBER:
            return {
                ...state,
                number: state.number + action.number
            }
        case DEC_BY_NUMBER:
            return {
                ...state,
                number: state.number - action.number
            }
        default:
            return state
    }
}