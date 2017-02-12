var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    var Control = (function () {
        function Control() {
        }
        return Control;
    }());
    // Button and TextBox are valid objects b/c they inherit from 
    // both Control and SelectableControl
    //=============
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var TextBox = (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            _super.apply(this, arguments);
        }
        TextBox.prototype.select = function () { };
        return TextBox;
    }(Control));
    //=======================================
    // This does not work.
    // Since the property "state" is a private member of Control,
    // NotChildOfControl cannot access it.
    var NotChildOfControl = (function () {
        function NotChildOfControl() {
        }
        NotChildOfControl.prototype.select = function () {
            //some stuff happens here
        };
        return NotChildOfControl;
    }());
    // =================
    var Image = (function () {
        function Image() {
        }
        Image.prototype.select = function () { };
        return Image;
    }());
    var Location = (function () {
        function Location() {
        }
        Location.prototype.select = function () { };
        return Location;
    }());
})();
