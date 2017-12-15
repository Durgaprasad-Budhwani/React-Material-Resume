/**
 * Created by Durgaprasad Budhwani on 12/14/2017.
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Element.prototype.getBoundingClientRect = function(){
    return {
        y: -100,
        top: -100
    }
};

configure({ adapter: new Adapter() });