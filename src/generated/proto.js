/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AnkiProto = (function() {

    /**
     * Namespace AnkiProto.
     * @exports AnkiProto
     * @namespace
     */
    var AnkiProto = {};

    AnkiProto.CardTemplateConfig = (function() {

        /**
         * Properties of a CardTemplateConfig.
         * @memberof AnkiProto
         * @interface ICardTemplateConfig
         * @property {string|null} [qFormat] CardTemplateConfig qFormat
         * @property {string|null} [aFormat] CardTemplateConfig aFormat
         * @property {string|null} [qFormatBrowser] CardTemplateConfig qFormatBrowser
         * @property {string|null} [aFormatBrowser] CardTemplateConfig aFormatBrowser
         * @property {number|Long|null} [targetDeckId] CardTemplateConfig targetDeckId
         * @property {string|null} [browserFontName] CardTemplateConfig browserFontName
         * @property {number|null} [browserFontSize] CardTemplateConfig browserFontSize
         * @property {Uint8Array|null} [other] CardTemplateConfig other
         */

        /**
         * Constructs a new CardTemplateConfig.
         * @memberof AnkiProto
         * @classdesc Represents a CardTemplateConfig.
         * @implements ICardTemplateConfig
         * @constructor
         * @param {AnkiProto.ICardTemplateConfig=} [properties] Properties to set
         */
        function CardTemplateConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardTemplateConfig qFormat.
         * @member {string} qFormat
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.qFormat = "";

        /**
         * CardTemplateConfig aFormat.
         * @member {string} aFormat
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.aFormat = "";

        /**
         * CardTemplateConfig qFormatBrowser.
         * @member {string} qFormatBrowser
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.qFormatBrowser = "";

        /**
         * CardTemplateConfig aFormatBrowser.
         * @member {string} aFormatBrowser
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.aFormatBrowser = "";

        /**
         * CardTemplateConfig targetDeckId.
         * @member {number|Long} targetDeckId
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.targetDeckId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CardTemplateConfig browserFontName.
         * @member {string} browserFontName
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.browserFontName = "";

        /**
         * CardTemplateConfig browserFontSize.
         * @member {number} browserFontSize
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.browserFontSize = 0;

        /**
         * CardTemplateConfig other.
         * @member {Uint8Array} other
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         */
        CardTemplateConfig.prototype.other = $util.newBuffer([]);

        /**
         * Creates a new CardTemplateConfig instance using the specified properties.
         * @function create
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {AnkiProto.ICardTemplateConfig=} [properties] Properties to set
         * @returns {AnkiProto.CardTemplateConfig} CardTemplateConfig instance
         */
        CardTemplateConfig.create = function create(properties) {
            return new CardTemplateConfig(properties);
        };

        /**
         * Encodes the specified CardTemplateConfig message. Does not implicitly {@link AnkiProto.CardTemplateConfig.verify|verify} messages.
         * @function encode
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {AnkiProto.ICardTemplateConfig} message CardTemplateConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardTemplateConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.qFormat != null && Object.hasOwnProperty.call(message, "qFormat"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.qFormat);
            if (message.aFormat != null && Object.hasOwnProperty.call(message, "aFormat"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.aFormat);
            if (message.qFormatBrowser != null && Object.hasOwnProperty.call(message, "qFormatBrowser"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.qFormatBrowser);
            if (message.aFormatBrowser != null && Object.hasOwnProperty.call(message, "aFormatBrowser"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aFormatBrowser);
            if (message.targetDeckId != null && Object.hasOwnProperty.call(message, "targetDeckId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.targetDeckId);
            if (message.browserFontName != null && Object.hasOwnProperty.call(message, "browserFontName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.browserFontName);
            if (message.browserFontSize != null && Object.hasOwnProperty.call(message, "browserFontSize"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.browserFontSize);
            if (message.other != null && Object.hasOwnProperty.call(message, "other"))
                writer.uint32(/* id 255, wireType 2 =*/2042).bytes(message.other);
            return writer;
        };

        /**
         * Encodes the specified CardTemplateConfig message, length delimited. Does not implicitly {@link AnkiProto.CardTemplateConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {AnkiProto.ICardTemplateConfig} message CardTemplateConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardTemplateConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardTemplateConfig message from the specified reader or buffer.
         * @function decode
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AnkiProto.CardTemplateConfig} CardTemplateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardTemplateConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AnkiProto.CardTemplateConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.qFormat = reader.string();
                    break;
                case 2:
                    message.aFormat = reader.string();
                    break;
                case 3:
                    message.qFormatBrowser = reader.string();
                    break;
                case 4:
                    message.aFormatBrowser = reader.string();
                    break;
                case 5:
                    message.targetDeckId = reader.int64();
                    break;
                case 6:
                    message.browserFontName = reader.string();
                    break;
                case 7:
                    message.browserFontSize = reader.uint32();
                    break;
                case 255:
                    message.other = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardTemplateConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AnkiProto.CardTemplateConfig} CardTemplateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardTemplateConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardTemplateConfig message.
         * @function verify
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardTemplateConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.qFormat != null && message.hasOwnProperty("qFormat"))
                if (!$util.isString(message.qFormat))
                    return "qFormat: string expected";
            if (message.aFormat != null && message.hasOwnProperty("aFormat"))
                if (!$util.isString(message.aFormat))
                    return "aFormat: string expected";
            if (message.qFormatBrowser != null && message.hasOwnProperty("qFormatBrowser"))
                if (!$util.isString(message.qFormatBrowser))
                    return "qFormatBrowser: string expected";
            if (message.aFormatBrowser != null && message.hasOwnProperty("aFormatBrowser"))
                if (!$util.isString(message.aFormatBrowser))
                    return "aFormatBrowser: string expected";
            if (message.targetDeckId != null && message.hasOwnProperty("targetDeckId"))
                if (!$util.isInteger(message.targetDeckId) && !(message.targetDeckId && $util.isInteger(message.targetDeckId.low) && $util.isInteger(message.targetDeckId.high)))
                    return "targetDeckId: integer|Long expected";
            if (message.browserFontName != null && message.hasOwnProperty("browserFontName"))
                if (!$util.isString(message.browserFontName))
                    return "browserFontName: string expected";
            if (message.browserFontSize != null && message.hasOwnProperty("browserFontSize"))
                if (!$util.isInteger(message.browserFontSize))
                    return "browserFontSize: integer expected";
            if (message.other != null && message.hasOwnProperty("other"))
                if (!(message.other && typeof message.other.length === "number" || $util.isString(message.other)))
                    return "other: buffer expected";
            return null;
        };

        /**
         * Creates a CardTemplateConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AnkiProto.CardTemplateConfig} CardTemplateConfig
         */
        CardTemplateConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.AnkiProto.CardTemplateConfig)
                return object;
            var message = new $root.AnkiProto.CardTemplateConfig();
            if (object.qFormat != null)
                message.qFormat = String(object.qFormat);
            if (object.aFormat != null)
                message.aFormat = String(object.aFormat);
            if (object.qFormatBrowser != null)
                message.qFormatBrowser = String(object.qFormatBrowser);
            if (object.aFormatBrowser != null)
                message.aFormatBrowser = String(object.aFormatBrowser);
            if (object.targetDeckId != null)
                if ($util.Long)
                    (message.targetDeckId = $util.Long.fromValue(object.targetDeckId)).unsigned = false;
                else if (typeof object.targetDeckId === "string")
                    message.targetDeckId = parseInt(object.targetDeckId, 10);
                else if (typeof object.targetDeckId === "number")
                    message.targetDeckId = object.targetDeckId;
                else if (typeof object.targetDeckId === "object")
                    message.targetDeckId = new $util.LongBits(object.targetDeckId.low >>> 0, object.targetDeckId.high >>> 0).toNumber();
            if (object.browserFontName != null)
                message.browserFontName = String(object.browserFontName);
            if (object.browserFontSize != null)
                message.browserFontSize = object.browserFontSize >>> 0;
            if (object.other != null)
                if (typeof object.other === "string")
                    $util.base64.decode(object.other, message.other = $util.newBuffer($util.base64.length(object.other)), 0);
                else if (object.other.length)
                    message.other = object.other;
            return message;
        };

        /**
         * Creates a plain object from a CardTemplateConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AnkiProto.CardTemplateConfig
         * @static
         * @param {AnkiProto.CardTemplateConfig} message CardTemplateConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardTemplateConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.qFormat = "";
                object.aFormat = "";
                object.qFormatBrowser = "";
                object.aFormatBrowser = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.targetDeckId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.targetDeckId = options.longs === String ? "0" : 0;
                object.browserFontName = "";
                object.browserFontSize = 0;
                if (options.bytes === String)
                    object.other = "";
                else {
                    object.other = [];
                    if (options.bytes !== Array)
                        object.other = $util.newBuffer(object.other);
                }
            }
            if (message.qFormat != null && message.hasOwnProperty("qFormat"))
                object.qFormat = message.qFormat;
            if (message.aFormat != null && message.hasOwnProperty("aFormat"))
                object.aFormat = message.aFormat;
            if (message.qFormatBrowser != null && message.hasOwnProperty("qFormatBrowser"))
                object.qFormatBrowser = message.qFormatBrowser;
            if (message.aFormatBrowser != null && message.hasOwnProperty("aFormatBrowser"))
                object.aFormatBrowser = message.aFormatBrowser;
            if (message.targetDeckId != null && message.hasOwnProperty("targetDeckId"))
                if (typeof message.targetDeckId === "number")
                    object.targetDeckId = options.longs === String ? String(message.targetDeckId) : message.targetDeckId;
                else
                    object.targetDeckId = options.longs === String ? $util.Long.prototype.toString.call(message.targetDeckId) : options.longs === Number ? new $util.LongBits(message.targetDeckId.low >>> 0, message.targetDeckId.high >>> 0).toNumber() : message.targetDeckId;
            if (message.browserFontName != null && message.hasOwnProperty("browserFontName"))
                object.browserFontName = message.browserFontName;
            if (message.browserFontSize != null && message.hasOwnProperty("browserFontSize"))
                object.browserFontSize = message.browserFontSize;
            if (message.other != null && message.hasOwnProperty("other"))
                object.other = options.bytes === String ? $util.base64.encode(message.other, 0, message.other.length) : options.bytes === Array ? Array.prototype.slice.call(message.other) : message.other;
            return object;
        };

        /**
         * Converts this CardTemplateConfig to JSON.
         * @function toJSON
         * @memberof AnkiProto.CardTemplateConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardTemplateConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardTemplateConfig;
    })();

    return AnkiProto;
})();

module.exports = $root;
