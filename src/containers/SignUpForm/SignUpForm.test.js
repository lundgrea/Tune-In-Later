import React from "react";
import { shallow } from "enzyme";
import { SignUpForm } from "./SignUpForm";

describe("SignUpForm", () => {
  let wrapper;
  const mockHandleError = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SignUpForm handleError={mockHandleError} />);
  });

  it("should match the snapshot with all of the correct information passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleInputChange method when change happens in the name input", () => {
    const mockEvent = { target: { name: "name", value: "yolo" } };
    wrapper
      .find("input")
      .at(0)
      .simulate("change", mockEvent);
    expect(wrapper.state("name")).toEqual("yolo");
  });

  it("should call handleInputChange method when change happens in the email input", () => {
    const mockEvent = { target: { name: "email", value: "yolo@yolo.com" } };
    wrapper
      .find("input")
      .at(1)
      .simulate("change", mockEvent);
    expect(wrapper.state("email")).toEqual("yolo@yolo.com");
  });

  it("should call handleInputChange method when change happens in the password input", () => {
    const mockEvent = { target: { name: "password", value: "password" } };
    wrapper
      .find("input")
      .at(2)
      .simulate("change", mockEvent);
    expect(wrapper.state("password")).toEqual("password");
  });
});
