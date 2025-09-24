'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ label }) => {
    return jsxRuntime.jsx("button", { children: label });
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
