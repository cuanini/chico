(function (window, ch) {
    'use strict';

    if (window.ch === undefined) {
        throw new window.Error('Expected ch namespace defined.');
    }

    /**
     * Url validates URL syntax.
     * @name Url
     * @class Url
     * @interface
     * @augments ch.Controls
     * @augments ch.Validation
     * @requires ch.Validation
     * @memberOf ch
     * @param {Object} [conf] Object with configuration properties.
     * @param {String} [conf.content] Validation message.
     * @param {String} [conf.points] Sets the points where validation-bubble will be positioned.
     * @param {String} [conf.offset] Sets the offset in pixels that validation-bubble will be displaced from original position determined by points. It's specified by configuration or zero by default: "0 0".
     * @param {String} [conf.context] It's a reference to position the validation-bubble
     * @returns itself
     * @factorized
     * @see ch.Validation
     * @see ch.Required
     * @see ch.Custom
     * @see ch.Number
     * @see ch.Validator
     * @see ch.Condition
     * @exampleDescription Create a URL validation
     * @example
     * $("input").url("This field must be a valid URL.");
     */
    function URL($el, options) {

        var opts = options || {};

        opts.condition = {
            'name': 'url',
            'message': opts.content
        };

        return $el.validation(opts);

    }

    URL.prototype.name = 'url';
    URL.prototype.constructor = URL;
    URL.prototype.preset = 'validation';

    ch.factory(URL);

}(this, this.ch));