import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypePageSectionSkeleton } from "./TypePageSection";
import type { TypeResumeSkeleton } from "./TypeResume";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized false
     */
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroSkeleton | TypePageSectionSkeleton | TypeResumeSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:39:15.678Z
 * @version 19
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:39:15.678Z
 * @version 19
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
