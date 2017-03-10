import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BookCard from './BookCard';

function setup() {
  const props = {
    book: {
      volumeInfo: {
        title: 'JS the book',
        publisher: 'Guilherme Santos',
        publishedDate: '2017'
      }
    },
    showBook: jasmine.createSpy(),
    favorited: false
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<BookCard {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('BookCard', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('book-card');

      const [divImage, divInfo, divClearfix] = output.props.children;

      expect(divImage.type).toBe('div');
      expect(divImage.props.className).toBe('image-container');

      expect(divInfo.type).toBe('div');
      expect(divInfo.props.className).toBe('info-container');

      expect(divClearfix.type).toBe('div');
      expect(divClearfix.props.className).toBe('clearfix');
    });
  });
});
