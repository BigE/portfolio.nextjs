import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePureGridClassNameSkeleton } from "./TypePureGridClassName";
import type { TypeRichTextSkeleton } from "./TypeRichText";

/**
 * Fields type definition for content type 'TypePureGridRichText'
 * @name TypePureGridRichTextFields
 * @type {TypePureGridRichTextFields}
 * @memberof TypePureGridRichText
 */
export interface TypePureGridRichTextFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'className' (Class Name)
     * @name Class Name
     * @localized false
     */
    className: EntryFieldTypes.EntryLink<TypePureGridClassNameSkeleton>;
    /**
     * Field type definition for field 'richText' (Rich Text)
     * @name Rich Text
     * @localized false
     */
    richText: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'pureGridRichText' (Pure Grid Rich Text)
 * @name TypePureGridRichTextSkeleton
 * @type {TypePureGridRichTextSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:34:28.792Z
 * @version 5
 */
export type TypePureGridRichTextSkeleton = EntrySkeletonType<TypePureGridRichTextFields, "pureGridRichText">;
/**
 * Entry type definition for content type 'pureGridRichText' (Pure Grid Rich Text)
 * @name TypePureGridRichText
 * @type {TypePureGridRichText}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:34:28.792Z
 * @version 5
 */
export type TypePureGridRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePureGridRichTextSkeleton, Modifiers, Locales>;

export function isTypePureGridRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridRichText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridRichText'
}
