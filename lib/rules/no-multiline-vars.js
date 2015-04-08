/**
 * @fileoverview No multi line var
 * @author Andy Buecker
 * @copyright 2014 Andy Buecker. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        "Program": function (node) {
            var lines = context.getSourceLines();
            lines.forEach(function(line, i) {
                if (/^\s*(?:var|let)\s*\S+\s*=\s*[^,]+,$/.test(line)) {
                    context.report(
                        node,
                        { line: i + 1, col: line.indexOf('\t') },
                        'No multiline variable definitions.'
                    );
                }
            });
        }

    };

};
