(function () {
    var Octopus = (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var dad = new Octopus("Man with the 8 strong legs");
    dad.name = "Man with the 3-piece suit"; // error! name is readonly.
})();
(function () {
    var Octopus = (function () {
        function Octopus(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
        return Octopus;
    }());
})();
