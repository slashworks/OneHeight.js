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

            callback(el);

        })

    }

    /**
     * Check the Height of an element
     * @param items
     * @returns {number}
     */

    function checkItemHeight(items) {

        var Buffer = 0;

        each(items, function(el) {

            Buffer = (el.offsetHeight > Buffer) ? el.offsetHeight : Buffer;

        })

        return Buffer;

    }

    /**
     * constructor of the EqualBlocks module
     * @param parentQuery
     * @constructor
     */

    function OneHeight(parentQuery, childrenQuery) {

        childrenQuery = childrenQuery || false;
        this.wrapper = parentQuery;
        this.childrenQuery = childrenQuery;
        this.init();

    }

    /**
     * public methods
     * @type {{init: init, setHeight: setHeight, removeHeight: removeHeight}}
     */

    OneHeight.prototype = {

        init: function() {

            this.height = this.wrapper.offsetHeight;

            if(this.childrenQuery) {

                this.items = this.wrapper.querySelectorAll(this.childrenQuery);
                this.height = checkItemHeight(this.items);

            } else {

                this.items = this.wrapper.children;


            }

            this.setHeight();

        },

        /**
         * set euqal height to items
         */

        setHeight: function() {

            var height = this.height;

            each(this.items, function(el) {

                var getElStyle = getStyle(el);

                var result = (getElStyle.boxSizing !== 'border-box') ? height - (parseInt(getElStyle.paddingTop) + parseInt(getElStyle.paddingBottom)) : height;

                el.style.height = result + 'px';

            })

        },

        removeHeight: function() {

            each(this.items, function(el) {

                el.style.height = '';

            })

        }


    }

    var OneheightManager = window.OneHeight = (function() {

        var itemMap = {};

        return {

            add: function(name, parentQuery, childrenQuery) {

                childrenQuery = childrenQuery || false;

                if(typeof parentQuery === "string") {

                    itemMap[name] = [];

                    each(document.querySelectorAll(parentQuery), function(el) {

                        var instance = new OneHeight(el, childrenQuery);
                        itemMap[name].push(instance);


                    })

                }

                return this;

            },

            removeHeight: function(name) {


                each(itemMap[name], function(item) {

                    item.removeHeight();

                })

                return this;

            },

            setHeight: function(name) {

                each(itemMap[name], function(item) {

                    item.setHeight();

                })

                return this;

            },

            reload: function(name) {

                each(itemMap[name], function(item) {

                    item.init();

                })

                return this;

            }

        }

    })()


})(this);