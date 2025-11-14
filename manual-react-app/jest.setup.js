import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder (required for React Router and modern libraries)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
