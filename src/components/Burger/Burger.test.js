import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Burger } from "./Burger";
import Ingredient from './Ingredient/Ingredient';

configure({ adapter: new Adapter() });

describe('<Burger />', () => {
    let wrapper;
    let match = {
        url: '/checkout'
    }
    let ing = {
        ingredients: {
            bacon: 2,
            salad: 3
        }
    };

    beforeEach(() => {
        wrapper = shallow(<Burger match={match} ing={ing}/>);
    });

    it('should have at least 2 ingredient', () => {
        // wrapper.setProps({ match, ing})
        expect(wrapper.find(Ingredient)).toHaveLength(7);
    });
});