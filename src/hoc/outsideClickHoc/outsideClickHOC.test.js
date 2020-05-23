
import React from "react";
import { shallow, mount } from "enzyme";
import outsideClickHOC from "./outsideClickHOC";
import styles from './style.module.css';
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("outsideClickHOC tests", () => {
    const HOC = outsideClickHOC(SelectDropdown);

    it('Should render properly', () => {
        const testHOC = shallow(<HOC />);
        expect(testHOC).toMatchSnapshot();
    });

    it('Creates background after click', () => {
        const testHOC = mount(<HOC />);
        testHOC.find('.container').simulate('click');
        expect(testHOC.find('.cover-div')).toHaveProperty("position", "fixed");
        testHOC.unmount();
    });

    it('Checks if component is hidden after clicking on background', () => {
        const testHOC = mount(<HOC />);
        testHOC.find('.container').simulate('click');
        testHOC.find('.cover-div').simulate('click');
        expect(testHOC.find('.container')).toHaveProperty("position", "static");
        testHOC.unmount();
    });
});