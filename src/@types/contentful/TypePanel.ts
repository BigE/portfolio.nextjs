import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

/**
 * Fields type definition for content type 'TypePanel'
 * @name TypePanelFields
 * @type {TypePanelFields}
 * @memberof TypePanel
 */
export interface TypePanelFields {
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
     * Field type definition for field 'fontAwesomeIcon' (Font Awesome Icon)
     * @name Font Awesome Icon
     * @localized false
     */
    fontAwesomeIcon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    /**
     * Field type definition for field 'richText' (Rich Text)
     * @name Rich Text
     * @localized false
     */
    richText: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'buttonAlignment' (Button Alignment)
     * @name Button Alignment
     * @localized false
     */
    buttonAlignment: EntryFieldTypes.Symbol<"Centered" | "Default">;
    /**
     * Field type definition for field 'buttons' (Buttons)
     * @name Buttons
     * @localized false
     */
    buttons?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'panel' (Panel)
 * @name TypePanelSkeleton
 * @type {TypePanelSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:13:11.258Z
 * @version 11
 */
export type TypePanelSkeleton = EntrySkeletonType<TypePanelFields, "panel">;
/**
 * Entry type definition for content type 'panel' (Panel)
 * @name TypePanel
 * @type {TypePanel}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:13:11.258Z
 * @version 11
 */
export type TypePanel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePanelSkeleton, Modifiers, Locales>;

export function isTypePanel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePanel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'panel'
}
