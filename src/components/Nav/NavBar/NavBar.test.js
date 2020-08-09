import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavBar from "./NavBar";
import NavBarItem from './NavBarItem/NavBarItem';

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
	it("should have navigation item", () => {
		const wrapper = shallow(<NavBar />);
		expect(wrapper.find(NavBarItem)).toHaveLength(2);;
	});
});
