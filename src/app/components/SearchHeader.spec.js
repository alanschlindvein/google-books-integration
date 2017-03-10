import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchHeader from './SearchHeader';
import BookSearchInput from './BookSearchInput';

function setup() {
  const props = {
    requestBooks: jasmine.createSpy(),
    clearBooks: jasmine.createSpy()
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<SearchHeader {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('SearchHeader', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('header');
      expect(output.props.className).toBe('toolbar');

      const [icon, input] = output.props.children;

      expect(icon.type).toBe('div');
      expect(icon.props.className).toBe('toolbar__icon');

      expect(input.type).toBe(BookSearchInput);
    });
  });

  it('should call requestBooks if text lenght is greater than 0', () => {
    const {output, props} = setup();
    const input = output.props.children[1];

    input.props.onSearch({text: 'JavaScript'});
    expect(props.requestBooks.calls.count()).toBe(1);
    expect(props.clearBooks.calls.count()).toBe(0);
  });

  it('should call clearBooks if text lenght is 0', () => {
    const {output, props} = setup();
    const input = output.props.children[1];

    input.props.onSearch('');
    expect(props.requestBooks.calls.count()).toBe(0);
    expect(props.clearBooks.calls.count()).toBe(1);
  });
});
