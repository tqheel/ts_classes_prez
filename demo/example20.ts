
let passcode = 'secret passcode';
// let passcode = 'sadness';

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode == 'secret passcode') {
            this._fullName = newName;
            console.log('here');
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
    console.log(employee.fullName);
}