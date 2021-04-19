import * as $protobuf from "protobufjs";
/** Namespace AnkiProto. */
export namespace AnkiProto {

    /** Properties of a CardTemplateConfig. */
    interface ICardTemplateConfig {

        /** CardTemplateConfig qFormat */
        qFormat?: (string|null);

        /** CardTemplateConfig aFormat */
        aFormat?: (string|null);

        /** CardTemplateConfig qFormatBrowser */
        qFormatBrowser?: (string|null);

        /** CardTemplateConfig aFormatBrowser */
        aFormatBrowser?: (string|null);

        /** CardTemplateConfig targetDeckId */
        targetDeckId?: (number|Long|null);

        /** CardTemplateConfig browserFontName */
        browserFontName?: (string|null);

        /** CardTemplateConfig browserFontSize */
        browserFontSize?: (number|null);

        /** CardTemplateConfig other */
        other?: (Uint8Array|null);
    }

    /** Represents a CardTemplateConfig. */
    class CardTemplateConfig implements ICardTemplateConfig {

        /**
         * Constructs a new CardTemplateConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: AnkiProto.ICardTemplateConfig);

        /** CardTemplateConfig qFormat. */
        public qFormat: string;

        /** CardTemplateConfig aFormat. */
        public aFormat: string;

        /** CardTemplateConfig qFormatBrowser. */
        public qFormatBrowser: string;

        /** CardTemplateConfig aFormatBrowser. */
        public aFormatBrowser: string;

        /** CardTemplateConfig targetDeckId. */
        public targetDeckId: (number|Long);

        /** CardTemplateConfig browserFontName. */
        public browserFontName: string;

        /** CardTemplateConfig browserFontSize. */
        public browserFontSize: number;

        /** CardTemplateConfig other. */
        public other: Uint8Array;

        /**
         * Creates a new CardTemplateConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardTemplateConfig instance
         */
        public static create(properties?: AnkiProto.ICardTemplateConfig): AnkiProto.CardTemplateConfig;

        /**
         * Encodes the specified CardTemplateConfig message. Does not implicitly {@link AnkiProto.CardTemplateConfig.verify|verify} messages.
         * @param message CardTemplateConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AnkiProto.ICardTemplateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardTemplateConfig message, length delimited. Does not implicitly {@link AnkiProto.CardTemplateConfig.verify|verify} messages.
         * @param message CardTemplateConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AnkiProto.ICardTemplateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardTemplateConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardTemplateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AnkiProto.CardTemplateConfig;

        /**
         * Decodes a CardTemplateConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardTemplateConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AnkiProto.CardTemplateConfig;

        /**
         * Verifies a CardTemplateConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardTemplateConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardTemplateConfig
         */
        public static fromObject(object: { [k: string]: any }): AnkiProto.CardTemplateConfig;

        /**
         * Creates a plain object from a CardTemplateConfig message. Also converts values to other types if specified.
         * @param message CardTemplateConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AnkiProto.CardTemplateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardTemplateConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
