import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

// here we use Full DOM ่just for show
// NORMALY WE SOULD USE SHALLOW as we test only this component

test('show a div', () => {
    const wrapped = shallow(<CommentBox />);
    expect(wrapped.find('div').length).toBe(1);
});

test('show a textArea and a button', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
});

test('user can input text and submit', () => {

});

test('when submit textArea get empty', () => {

});