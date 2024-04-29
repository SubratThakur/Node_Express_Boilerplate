/**
 * Root Babel config used when webpack bundle is created
 * https://babeljs.io/docs/en/config-files#config-function-api
 *
 * @param {object} api The api object exposes everything Babel itself exposes from its index module
 * @returns {object} Babel config
 */

module.exports = (api) => {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: 'last 2 versions'
                }
            }
        ],
        '@babel/preset-typescript',
    ];

    const plugins = [
        ['@babel/plugin-proposal-class-properties', { "loose": true }],
        'babel-plugin-typescript-to-proptypes',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ];

    return {
        presets,
        plugins
    };
};
