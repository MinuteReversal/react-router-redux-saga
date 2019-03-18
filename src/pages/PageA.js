import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class PageA extends Component {
    static propTypes = {
        count: PropTypes.number
    };
    render() {
        let { count } = this.props;
        return (
            <div>
                <div>PageA</div>
                <div>{count}</div>
                <button
                    onClick={() => {
                        this.props.increment();
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        this.props.incrementAsync();
                    }}
                >
                    Increment after 1 second
                </button>
                <button
                    onClick={() => {
                        this.props.decrement();
                    }}
                >
                    Decrement
                </button>
                <button
                    onClick={() => {
                        this.props.decrementAsync();
                    }}
                >
                    Decrement after 1 second
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch({ type: "INCREMENT" });
    },
    incrementAsync() {
        dispatch({ type: "INCREMENT_ASYNC" });
    },
    decrement() {
        dispatch({ type: "DECREMENT" });
    },
    decrementAsync() {
        dispatch({ type: "DECREMENT_ASYNC" });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageA);
