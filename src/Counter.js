import React from 'react'
import { connect } from 'react-redux'
import { inc, dec, reset } from './state/counter'

const mapStateToProps = state => ({
    _counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(inc()),
    _dec: () => dispatch(dec()),
    _reset: () => dispatch(reset())
})


const Counter = props => (
    <div>
        <h1>
            {props._counterValue}
        </h1>
        <button
            onClick={props._inc}
        >
            +
        </button>
        <button
            onClick={props._dec}
        >
            -
        </button>
        <button
        onClick={props._reset}
        >
            reset
        </button>
    </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)