// Immediate polyfills for server-side rendering - must run before any other code
(function() {
  'use strict';
  
  // Only run on server side
  if (typeof window !== 'undefined') return;
  
  const g = typeof global !== 'undefined' ? global : this;
  
  // Define window with location immediately
  if (!g.window) {
    g.window = {
      location: {
        protocol: 'http:',
        hostname: 'localhost',
        port: '3000',
        pathname: '/',
        search: '',
        hash: '',
        href: 'http://localhost:3000/',
        origin: 'http://localhost:3000'
      },
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() {},
      localStorage: {
        getItem: function() { return null; },
        setItem: function() {},
        removeItem: function() {},
        clear: function() {}
      },
      sessionStorage: {
        getItem: function() { return null; },
        setItem: function() {},
        removeItem: function() {},
        clear: function() {}
      }
    };
  }
  
  // Define self
  if (!g.self) {
    g.self = g;
  }
  
  // Define navigator
  if (!g.navigator) {
    g.navigator = {
      userAgent: 'Node.js'
    };
  }
  
  // Define document
  if (!g.document) {
    g.document = {
      createElement: function() {
        return {
          setAttribute: function() {},
          getAttribute: function() { return null; },
          appendChild: function() {},
          removeChild: function() {},
          style: {}
        };
      },
      createTextNode: function() { return {}; },
      querySelector: function() { return null; },
      querySelectorAll: function() { return []; },
      getElementById: function() { return null; },
      getElementsByTagName: function() { return []; },
      head: { 
        appendChild: function() {},
        removeChild: function() {},
        querySelector: function() { return null; }
      },
      body: { 
        appendChild: function() {},
        removeChild: function() {},
        querySelector: function() { return null; }
      }
    };
  }
})();