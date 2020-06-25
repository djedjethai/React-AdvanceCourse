import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';
import App from 'components/App';


beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetch1' }, { name: 'Fetch2' }]
	});
	
});

afterEach(() => {
	moxios.uninstall();
});

test('if can fetch a list of comments and display them', (done) => {
	const wrapped  = mount(
		<Root>
			<App />
		</Root>
	)
	wrapped.find('.fetch-comments').simulate('click');

	// introduce a little pause for moxios to have time to send the response 
	// still the pb is that jest does wait for async code, so we use the callback 
	// with 'done', jest will wait use to invoque it(done();) to move on
	// setTimeout(() => { is replace by the moxios's function
	moxios.wait(() => {
		// we force thw component to update (can be use on function as well)
		wrapped.update();
		expect(wrapped.find('li').length).toBe(2);	
		done();
		wrapped.unmount();
	});
});
