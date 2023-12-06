import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusContainer from "./ProfileStatusContainer";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after creation span with status should be displayed", async () => {
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" />);
        const root = component.root;
        let span = await root.findByType('span');
        expect(span).toBeDefined();
    });

    test("after creation input shouldn't be displayed", async () => {
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" />);
        const root = component.root;
        const throwInputError = async () => {
            let input = await root.findByType("input");
            if (!input) {
                throw new Error();
            }
        };
        await expect(throwInputError).rejects.toThrow();
    });

    test("after creation span with status should be displayed with correct status", async () => {
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" />);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    });

    test("input should be displayed in editMode instead of span", async () => {
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" />);
        const root = component.root;
        let span = await root.findByType("span");
        span.props.onDoubleClick();
        let input = await root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });

    test("callback should be called", async () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatusContainer status="it-kamasutra.com" updateUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});