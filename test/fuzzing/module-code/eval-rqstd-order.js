assert.sameValue(fnGlobalObject().test262, '12345678');
import {} from './eval-rqstd-order-1_FIXTURE.js';
import './eval-rqstd-order-2_FIXTURE.js';
import * as ns1 from './eval-rqstd-order-3_FIXTURE.js';
import dflt1 from './eval-rqstd-order-4_FIXTURE.js';
export {} from './eval-rqstd-order-5_FIXTURE.js';
import dflt2, {} from './eval-rqstd-order-6_FIXTURE.js';
export * from './eval-rqstd-order-7_FIXTURE.js';
import dflt3, * as ns from './eval-rqstd-order-8_FIXTURE.js';