import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

// here we use Full DOM ่just for show
// NORMALY WE SOULD USE SHALLOW as we test only this component
let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

test('show a div', () => {
    // const wrapped = mount(<CommentBox />);
    expect(wrapped.find('div').length).toBe(2);
});

test('show a textArea and a 2 buttons', () => {
    // const wrapper = mount(<CommentBox />);
    expect(wrapped.find('textarea').length).toBe(1);
    expect(wrapped.find('button').length).toBe(2);
});

describe('the text area', () => {

    beforeEach(() => {
        // simulate() take the name of the event we are trying
        // we use the real html event's name (not the react one)
        // the object in simulate() will be merge as the value of the component's state via the event obj
        wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});
        // update() force the re-render of the component (as it s async)
        wrapped.update();
    });

    test('user can input text', () => {
        // 'value' is the key we just passed in the simulate()
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    test('when submit textArea get empty', () => {
        // click submit
        wrapped.find('form').simulate('submit');
        // verif target value, WORKS
        // expect(wrapped.find('textarea').text()).toBe('');
        // the teacher solution
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
