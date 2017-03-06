(function () {
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
    console.log(point3d.x);
    console.log(point3d.y);
    console.log(point3d.z);
    var anotherPoint3d = { x: 4, y: 5 };
    var regularPoint = { x: 6, y: 7 };
})();
