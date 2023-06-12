import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

/**
 * Fields type definition for content type 'TypeButton'
 * @name TypeButtonFields
 * @type {TypeButtonFields}
 * @memberof TypeButton
 */
export interface TypeButtonFields {
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    /**
     * Field type definition for field 'pageFragment' (Page Fragment)
     * @name Page Fragment
     * @localized false
     */
    pageFragment?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'internalPage' (Internal Page)
     * @name Internal Page
     * @localized false
     */
    internalPage?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    /**
     * Field type definition for field 'externalUrl' (External URL)
     * @name External URL
     * @localized false
     */
    externalUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'document' (Document)
     * @name Document
     * @localized false
     */
    document?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'button' (Button)
 * @name TypeButtonSkeleton
 * @type {TypeButtonSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:33:41.648Z
 * @version 15
 */
export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
/**
 * Entry type definition for content type 'button' (Button)
 * @name TypeButton
 * @type {TypeButton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T15:33:41.648Z
 * @version 15
 */
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeButtonSkeleton, Modifiers, Locales>;

export function isTypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeButton<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'button'
}
