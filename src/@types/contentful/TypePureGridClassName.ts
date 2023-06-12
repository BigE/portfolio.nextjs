import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePureGridClassName'
 * @name TypePureGridClassNameFields
 * @type {TypePureGridClassNameFields}
 * @memberof TypePureGridClassName
 */
export interface TypePureGridClassNameFields {
    /**
     * Field type definition for field 'className' (Class Name)
     * @name Class Name
     * @localized false
     */
    className: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'pureGridClassName' (Pure Grid Class Name)
 * @name TypePureGridClassNameSkeleton
 * @type {TypePureGridClassNameSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:37:52.816Z
 * @version 11
 */
export type TypePureGridClassNameSkeleton = EntrySkeletonType<TypePureGridClassNameFields, "pureGridClassName">;
/**
 * Entry type definition for content type 'pureGridClassName' (Pure Grid Class Name)
 * @name TypePureGridClassName
 * @type {TypePureGridClassName}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:37:52.816Z
 * @version 11
 */
export type TypePureGridClassName<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePureGridClassNameSkeleton, Modifiers, Locales>;

export function isTypePureGridClassName<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridClassName<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridClassName'
}
