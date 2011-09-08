// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +Infinity and x !== y, return true
 *
 * @section: 11.8.2, 11.8.5;
 * @path: 11_Expressions/11.8_Relational_Operators/11.8.2_The_Greater_than_Operator/S11.8.2_A4.5.js;
 * @description: y is number primitive;
 */

//CHECK#1
if ((Number.POSITIVE_INFINITY > 0) !== true) {
  $ERROR('#1: (+Infinity > 0) === true');
}

//CHECK#2
if ((Number.POSITIVE_INFINITY > 1.1) !== true) {
  $ERROR('#2: (+Infinity > 1.1) === true');
}

//CHECK#3
if ((Number.POSITIVE_INFINITY > -1.1) !== true) {
  $ERROR('#3: (+Infinity > -1.1) === true');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY > Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#4: (+Infinity > -Infinity) === true');
}

//CHECK#5
if ((Number.POSITIVE_INFINITY > Number.MAX_VALUE) !== true) {
  $ERROR('#5: (+Infinity > Number.MAX_VALUE) === true');
}

//CHECK#6
if ((Number.POSITIVE_INFINITY > Number.MIN_VALUE) !== true) {
  $ERROR('#6: (+Infinity > Number.MIN_VALUE) === true');
}

