import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";
import type { TypeFormSkeleton } from "./TypeForm";
import type { TypePanelSkeleton } from "./TypePanel";
import type { TypePureGridSkeleton } from "./TypePureGrid";
import type { TypeRichTextSkeleton } from "./TypeRichText";

/**
 * Fields type definition for content type 'TypePageSection'
 * @name TypePageSectionFields
 * @type {TypePageSectionFields}
 * @memberof TypePageSection
 */
export interface TypePageSectionFields {
    /**
     * Field type definition for field 'headline' (Headline)
     * @name Headline
     * @localized false
     */
    headline: EntryFieldTypes.Symbol;
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
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFormSkeleton | TypePanelSkeleton | TypePureGridSkeleton | TypeRichTextSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'pageSection' (Page Section)
 * @name TypePageSectionSkeleton
 * @type {TypePageSectionSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:15:10.727Z
 * @version 23
 */
export type TypePageSectionSkeleton = EntrySkeletonType<TypePageSectionFields, "pageSection">;
/**
 * Entry type definition for content type 'pageSection' (Page Section)
 * @name TypePageSection
 * @type {TypePageSection}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:15:10.727Z
 * @version 23
 */
export type TypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSectionSkeleton, Modifiers, Locales>;

export function isTypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageSection'
}
