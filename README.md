# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add color and style 
- [ ] Integrate a list of tasks.
- [ ] Add JavaScript logic for today's date.
- [X] Add a weekly task goal calculator

## Weekly Task Goals:
This feature calculates a user's total task target for the week based on their daily goals 
and additional bonus tasks. By capturing user input through a web form and processing the data 
with a JavaScript function, the dashboard computes and displays both the base 
5 day workload and the total weekly target directly on the page.

## Imperial/Metric Converter
This application converts measurements between US Imperial and Metric system, supporting inches, feet, yards, miles, centimeters, meters, and kilometers.


## Logic and Pseudocode
BEGIN
    INPUT input_value
    INPUT conversion_type

    IF conversion_type IS "inch to centimeter" THEN
        SET result = input_value * 2.54
        DISPLAY input_value + " inches = " + result + " cm"
    ELSE IF conversion_type IS "foot to centimeter" THEN
        SET result = input_value * 30.48
        DISPLAY input_value + " feet = " + result + " cm"
    ELSE IF conversion_type IS "yard to meter" THEN
        SET result = input_value * 0.91
        DISPLAY input_value + " yards = " + result + " m"
    ELSE IF conversion_type IS "mile to kilometer" THEN
        SET result = input_value * 1.61
        DISPLAY input_value + " miles = " + result + " km"
    ELSE IF conversion_type IS "centimeter to inch" THEN
        SET result = input_value * 0.39
        DISPLAY input_value + " cm = " + result + " inches"
    ELSE IF conversion_type IS "centimeter to foot" THEN
        SET result = input_value * 0.0328
        DISPLAY input_value + " cm = " + result + " feet"
    ELSE IF conversion_type IS "meter to yard" THEN
        SET result = input_value * 1.09
        DISPLAY input_value + " meters = " + result + " yards"
    ELSE IF conversion_type IS "kilometer to mile" THEN
        SET result = input_value * 0.62
        DISPLAY input_value + " km = " + result + " miles"
    ELSE
        DISPLAY "Invalid conversion type selected."
    ENDIF
END