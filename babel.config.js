module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "corejs": "^3.1.4"
            }
        ]
    ],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
