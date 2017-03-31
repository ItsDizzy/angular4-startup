//import 'core-js/es6'; // Check if i need this...
import 'reflect-metadata';
import 'zone.js/dist/zone';

if (process.env.ENV === 'production') {
  // Polyfills needed for Production
  
} else {
  // Polyfills needed for Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}