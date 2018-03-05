import React from 'react';
import { mount, shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders a search input', () => {
    expect(shallow(<SearchInput />).find('.search-input').length).toEqual(1);
  });

  it('handles text state change', () => {
    const output = mount(<SearchInput />);
    const searchInput = output.find('.search-input');

    expect(output.state().searchValue).toEqual('');
    searchInput.instance().value = 'abc';
    searchInput.simulate('change');
    expect(output.state().searchValue).toEqual('abc');
  });
});
