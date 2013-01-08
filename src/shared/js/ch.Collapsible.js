/**
 * The Collapsible class gives to widgets the ability to shown or hidden its container.
 * @name Collapsible
 * @class Collapsible
 * @standalone
 * @memberOf ch
 */
(function (window, $, ch) {
	'use strict';

	if (ch === undefined) {
		throw new window.Error('Expected ch namespace defined.');
	}

	function Collapsible() {
		var that = this;

		/**
		 * Shows component's container.
		 * @public
		 * @function
		 * @name that#_show
		 */
		that._show = function () {

			that._active = true;

			if (that.$trigger) {
				that.$trigger.addClass('ch-' + that.name + '-trigger-on').attr('aria-expanded', 'true');
			}

			// Animation
			if (ch.support.fx && that._options.fx) {
				that.$container.slideDown('fast', function () {
					that.emit('show');
				});

			} else {
				that.emit('show');
			}

			that.$container.removeClass('ch-hide').attr('aria-hidden', 'false');
		};

		/**
		 * Hides component's container.
		 * @public
		 * @function
		 * @name that#_hide
		 */
		that._hide = function () {

			that._active = false;

			if (that.$trigger) {
				that.$trigger.removeClass('ch-' + that.name + '-trigger-on').attr('aria-expanded', 'false');
			}

			that.$container.addClass('ch-hide').attr('aria-hidden', 'true');

			// Animation
			if (ch.support.fx && that._options.fx) {
				that.$container.slideUp('fast', function () {
					that.emit('hide');
				});
			} else {
				that.emit('hide');
			}

		};
	}

	ch.Collapsible = Collapsible;

}(this, (this.jQuery || this.Zepto), this.ch));