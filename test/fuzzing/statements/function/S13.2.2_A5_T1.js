var __VOLUME, __RED, __ID, __BOTTOM, __TOP, __LEFT, color, bottom, left, __device;
__VOLUME=8;
__RED="red";
__ID=12342;
__BOTTOM=1.1;
__TOP=0.1;
__LEFT=0.5;
function __FACTORY(arg1, arg2){
	this.volume=__VOLUME;
	color=__RED;
	this.id=arg1;
	bottom=arg2;
	this.top=arguments[2];
	left=arguments[3];
};
__device = new __FACTORY(__ID, __BOTTOM, __TOP, __LEFT);
if (__device.color !== undefined) {
	$ERROR('#1: __device.color === undefined. Actual: __device.color ==='+__device.color);
}
if (__device.volume !== __VOLUME) {
	$ERROR('#2: __device.volume === __VOLUME. Actual: __device.volume ==='+__device.volume);
}
if (__device.bottom !== undefined) {
	$ERROR('#3: __device.bottom === undefined. Actual: __device.bottom ==='+__device.bottom);
}
if (__device.id !== __ID) {
	$ERROR('#4: __device.id === __ID. Actual: __device.id ==='+__device.id);
}
if (__device.left !== undefined) {
	$ERROR('#5: __device.left === undefined. Actual: __device.left ==='+__device.left);
}
if (__device.top !== __TOP) {
	$ERROR('#6: __device.top === __TOP. Actual: __device.top ==='+__device.top);
}