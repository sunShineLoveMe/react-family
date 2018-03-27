import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../../redux/actions/counter';

class Counter extends React.Component {
	render() {
		return (
			<div>
				<div>当前计算为(this.props.counter)</div>
				<button onClick={() => {
					console.log('调用自增函数');
				}}>自增</button>
				<button onClick={() => {
					console.log('调用自减函数');
				}}>自减</button>
				<button onClick={() => {
					console.log('调用重置函数');
				}}>重置</button>
			</div>
		)
	}
};


const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		reset: () => {
			dispatch(reset())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);