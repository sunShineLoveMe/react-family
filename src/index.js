import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';


import getRouter from 'router/router';

renderWithHotReload(getRouter());



if (module.hot) {
	module.hot.accept('./router/router', () => {
		const getRouter = require('./router/router').default;
		renderWithHotReload(getRouter());
	});
}

function renderWithHotReload(RootElement) {
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
				{RootElement}
			</Provider>
		</AppContainer>, document.getElementById('app')
	);
}
