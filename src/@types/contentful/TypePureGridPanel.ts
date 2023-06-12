import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePanelSkeleton } from "./TypePanel";
import type { TypePureGridClassNameSkeleton } from "./TypePureGridClassName";

/**
 * Fields type definition for content type 'TypePureGridPanel'
 * @name TypePureGridPanelFields
 * @type {TypePureGridPanelFields}
 * @memberof TypePureGridPanel
 */
export interface TypePureGridPanelFields {
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
     * Field type definition for field 'panel' (Panel)
     * @name Panel
     * @localized false
     */
    panel: EntryFieldTypes.EntryLink<TypePanelSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'pureGridPanel' (Pure Grid Panel)
 * @name TypePureGridPanelSkeleton
 * @type {TypePureGridPanelSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:35:59.713Z
 * @version 3
 */
export type TypePureGridPanelSkeleton = EntrySkeletonType<TypePureGridPanelFields, "pureGridPanel">;
/**
 * Entry type definition for content type 'pureGridPanel' (Pure Grid Panel)
 * @name TypePureGridPanel
 * @type {TypePureGridPanel}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:35:59.713Z
 * @version 3
 */
export type TypePureGridPanel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePureGridPanelSkeleton, Modifiers, Locales>;

export function isTypePureGridPanel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridPanel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridPanel'
}
