var passcode = 'secret passcode';
// let passcode = 'sadness';
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        //***note: we must compile to JS using --target 'es5' switch to use accessors */
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode == 'secret passcode') {
                this._fullName = newName;
                console.log('here');
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
