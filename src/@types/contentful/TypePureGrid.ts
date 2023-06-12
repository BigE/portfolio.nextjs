import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePureGridPanelSkeleton } from "./TypePureGridPanel";
import type { TypePureGridRichTextSkeleton } from "./TypePureGridRichText";

/**
 * Fields type definition for content type 'TypePureGrid'
 * @name TypePureGridFields
 * @type {TypePureGridFields}
 * @memberof TypePureGrid
 */
export interface TypePureGridFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized false
     */
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePureGridPanelSkeleton | TypePureGridRichTextSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'pureGrid' (Pure Grid)
 * @name TypePureGridSkeleton
 * @type {TypePureGridSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:11:50.479Z
 * @version 19
 */
export type TypePureGridSkeleton = EntrySkeletonType<TypePureGridFields, "pureGrid">;
/**
 * Entry type definition for content type 'pureGrid' (Pure Grid)
 * @name TypePureGrid
 * @type {TypePureGrid}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:11:50.479Z
 * @version 19
 */
export type TypePureGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePureGridSkeleton, Modifiers, Locales>;

export function isTypePureGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGrid<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGrid'
}
