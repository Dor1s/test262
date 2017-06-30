var __CUBE, __FACTORY, __device;
__CUBE="cube";
__FACTORY = function(){};
__FACTORY.prototype={ shape:__CUBE, printShape:function(){return this.shape;} };
__device = new __FACTORY();
if (__device.printShape === undefined) {
	$ERROR('#1: __device.printShape !== undefined. Actual: __device.printShape ==='+__device.printShape);
}
if (__device.printShape() !== __CUBE) {
	$ERROR('#2: __device.printShape() === __CUBE. Actual: __device.printShape() ==='+__device.printShape());
}