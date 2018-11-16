import Contact from './Contact';
import { shallow } from 'enzyme';

describe('Contact', () => {
  let contactComponent;

  beforeEach(() => {
    contactComponent = shallow(<Contact />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(contactComponent.length).toBe(1);
      expect(contactComponent).toMatchSnapshot();
    });
  });
});
