import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSiteSettings'
 * @name TypeSiteSettingsFields
 * @type {TypeSiteSettingsFields}
 * @memberof TypeSiteSettings
 */
export interface TypeSiteSettingsFields {
    /**
     * Field type definition for field 'key' (key)
     * @name key
     * @localized false
     */
    key: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'value' (value)
     * @name value
     * @localized false
     */
    value: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'siteSettings' (Site Settings)
 * @name TypeSiteSettingsSkeleton
 * @type {TypeSiteSettingsSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-28T19:21:33.101Z
 * @version 1
 */
export type TypeSiteSettingsSkeleton = EntrySkeletonType<TypeSiteSettingsFields, "siteSettings">;
/**
 * Entry type definition for content type 'siteSettings' (Site Settings)
 * @name TypeSiteSettings
 * @type {TypeSiteSettings}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-28T19:21:33.101Z
 * @version 1
 */
export type TypeSiteSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSiteSettingsSkeleton, Modifiers, Locales>;

export function isTypeSiteSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSiteSettings<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'siteSettings'
}
