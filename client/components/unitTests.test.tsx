import React from 'react';

import {render, fireEvent} from "@testing-library/react-native";
import DayPicker from "./DayPicker";

test("Day Test", () => {
    // Line 10 in DayPicker
    const toggleDay = jest.fn(); // essentially makes a fake function
    const days = {"Mon": false, "Tue": true, "Wed": false, "Thu": false, "Fri": false, "Sat": false, "Sun": false}; // set day to Tuesday

    // Doing a fake render to bypass the phone
   const rendered = render(<DayPicker days = {days} toggleDay = {toggleDay} />);

   // button press on Monday
   fireEvent.press(rendered.getByText("Mon")); // gets text 
   expect(toggleDay).toHaveBeenCalledWith("Mon");
});

