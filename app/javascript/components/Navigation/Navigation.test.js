import Navigation from './Navigation';
import { shallow } from 'enzyme';

describe('Navigation', () => {
  let navigationComponent;

  beforeEach(() => {
    navigationComponent = shallow(<Navigation />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(navigationComponent.length).toBe(1);
      expect(navigationComponent).toMatchSnapshot();
    });
  });
});
