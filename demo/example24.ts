(function () {

    class Point {
        x: number;
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 };
    
    console.log(point3d.x);
    console.log(point3d.y);
    console.log(point3d.z);

    let anotherPoint3d: Point3d = {x: 4, y: 5}

    let regularPoint: Point = { x:6, y: 7}

})();