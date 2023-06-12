import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeFontAwesomeIcon'
 * @name TypeFontAwesomeIconFields
 * @type {TypeFontAwesomeIconFields}
 * @memberof TypeFontAwesomeIcon
 */
export interface TypeFontAwesomeIconFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'fontAwesomeIcon' (Font Awesome Icon)
 * @name TypeFontAwesomeIconSkeleton
 * @type {TypeFontAwesomeIconSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:15:51.864Z
 * @version 19
 */
export type TypeFontAwesomeIconSkeleton = EntrySkeletonType<TypeFontAwesomeIconFields, "fontAwesomeIcon">;
/**
 * Entry type definition for content type 'fontAwesomeIcon' (Font Awesome Icon)
 * @name TypeFontAwesomeIcon
 * @type {TypeFontAwesomeIcon}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:15:51.864Z
 * @version 19
 */
export type TypeFontAwesomeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFontAwesomeIconSkeleton, Modifiers, Locales>;

export function isTypeFontAwesomeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFontAwesomeIcon<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'fontAwesomeIcon'
}
