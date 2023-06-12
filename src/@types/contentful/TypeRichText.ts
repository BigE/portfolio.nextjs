import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRichText'
 * @name TypeRichTextFields
 * @type {TypeRichTextFields}
 * @memberof TypeRichText
 */
export interface TypeRichTextFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'richText' (Rich Text)
     * @name Rich Text
     * @localized false
     */
    richText: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'richText' (Rich Text)
 * @name TypeRichTextSkeleton
 * @type {TypeRichTextSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:29:35.154Z
 * @version 5
 */
export type TypeRichTextSkeleton = EntrySkeletonType<TypeRichTextFields, "richText">;
/**
 * Entry type definition for content type 'richText' (Rich Text)
 * @name TypeRichText
 * @type {TypeRichText}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:29:35.154Z
 * @version 5
 */
export type TypeRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRichTextSkeleton, Modifiers, Locales>;

export function isTypeRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRichText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'richText'
}
