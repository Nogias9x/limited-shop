'use strict';

import Promise from 'bluebird';
import expressConfig from './express';

const xxx = () => {
    const a = 123;
    const b= 456;
    return a===b;
}

export default (app) => {
	return new Promise((resolve) => {
		console.log('start server');
                expressConfig(app);

                xxx();

		app.listen(app.get('port') || 3000, () => {
			console.log('START LISTEN PORT - ', app.get('port'));
			resolve();
		});
    });
}
