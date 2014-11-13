/**
 *
 *          _           _                       _
 *         | |         | |                     | |
 *      ___| | __ _ ___| |____      _____  _ __| | _____
 *     / __| |/ _` / __| '_ \ \ /\ / / _ \| '__| |/ / __|
 *     \__ \ | (_| \__ \ | | \ V  V / (_) | |  |   <\__ \
 *     |___/_|\__,_|___/_| |_|\_/\_/ \___/|_|  |_|\_\___/
 *                                        web development
 *
 *     http://www.slash-works.de </> hallo@slash-works.de
 *
 *
 * @author      jrgregory
 * @copyright   jrgregory@slashworks
 * @since       12.11.14 | KW 46 14:24
 * @package     Core
 *
 */

!(function(global) {

    "use strict";

    /**
     * getStyle helper function as Shortcut
     * @param item
     * @returns {CssStyle|CSSStyleDeclaration}
     */

    function getStyle(item) {

        return global.getComputedStyle(item);

    }

    /**
     * ForEach Helper for collections
     * @param collection
     * @param callback
     */

    function each(collection, callback) {

        Array.prototype.forEach.call(collection, function(el) {

            callback.call(el);

        })

    }

    /**
     * Check the Height of an element
     * @param items
     * @returns {number}
     */

    function checkItemHeight(items) {

        var Buffer = 0;

        each(items, function() {

            Buffer = (this.offsetHeight > Buffer) ? this.offsetHeight : Buffer;

        })

        return Buffer;

    }

    /**
     * constructor of the EqualBlocks module
     * @param parentQuery
     * @constructor
     */

    function OneHeight(parentQuery, childrenQuery) {

        if(!(this instanceof OneHeight)) {

            return new OneHeight(parentQuery, childrenQuery);

        }

        childrenQuery = childrenQuery || false;

        this.wrapper = document.querySelector(parentQuery);
        this.height = this.wrapper.offsetHeight;

        if(childrenQuery) {

            this.items = this.wrapper.querySelectorAll(childrenQuery);
            this.height = checkItemHeight(this.items);

        } else {

            this.items = this.wrapper.children;

        }

        this.setHeight();

    }

    /**
     * public methods
     * @type {{setHeight: setHeight, removeHeight: removeHeight}}
     */

    OneHeight.prototype = {

        /**
         * set euqal height to items
         */

        setHeight: function() {

            var height = this.height;

            each(this.items, function() {

                var el = this;
                var getElStyle = getStyle(el);

                var result = (getElStyle.boxSizing !== 'border-box') ? height - (parseInt(getElStyle.paddingTop) + parseInt(getElStyle.paddingBottom)) : height;

                el.style.height = result + 'px';

            })

        },

        /**
         * remove equal height of items
         */

        removeHeight: function() {

            each(this.items, function() {

                this.style.height = '';

            })

        }

    }

    global.OneHeight = OneHeight;


})(this);