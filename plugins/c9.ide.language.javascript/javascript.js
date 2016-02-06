/**
 * Cloud9 Language Foundation
 *
 * @copyright 2013, Ajax.org B.V.
 */
define(function(require, exports, module) {
    main.consumes = ["language"];
    main.provides = [];
    return main;

    function main(options, imports, register) {
        var language = imports.language;

        language.registerLanguageHandler('plugins/c9.ide.language.javascript/parse');
        language.registerLanguageHandler('plugins/c9.ide.language.javascript/scope_analyzer');
        
        language.registerLanguageHandler('plugins/c9.ide.language.javascript/debugger');
        language.registerLanguageHandler('plugins/c9.ide.language.javascript/outline');
        language.registerLanguageHandler('plugins/c9.ide.language.javascript/jumptodef');
        
        register(null, {});
    }
});