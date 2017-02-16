(function () {

    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): void;
    }
    // Button and TextBox are valid objects b/c they inherit from 
    // both Control and SelectableControl
    //=============

    class Button extends Control implements SelectableControl {
        select() { }
    }

    class TextBox extends Control {
        select() { }
    }
    //=======================================

    // This does not work.
    // Since the property "state" is a private member of Control,
    // NotChildOfControl cannot access it and tsc complains.
    class NotChildOfControl  implements SelectableControl {
        select(){}
    }

    // This does not work either.
    // Now tsc sees a double declaration of "state"
    class StillNotChildOfControl implements SelectableControl {
        private state: any;
        select() {}
    }

    // =================

    // These work just fine.
    // Image and Location do not inherit from either Control or SelectableControl
    class Image {
        select() { }
    }

    class Location {
        select() { }
    }

    
})();

