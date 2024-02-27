import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSiteSettingsFields {
    key: EntryFieldTypes.Symbol;
    value: EntryFieldTypes.Symbol;
}

export type TypeSiteSettingsSkeleton = EntrySkeletonType<TypeSiteSettingsFields, "siteSettings">;
export type TypeSiteSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSiteSettingsSkeleton, Modifiers, Locales>;

export function isTypeSiteSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSiteSettings<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'siteSettings'
}

export type TypeSiteSettingsWithoutLinkResolutionResponse = TypeSiteSettings<"WITHOUT_LINK_RESOLUTION">;
export type TypeSiteSettingsWithoutUnresolvableLinksResponse = TypeSiteSettings<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSiteSettingsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteSettings<"WITH_ALL_LOCALES", Locales>;
export type TypeSiteSettingsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteSettings<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSiteSettingsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteSettings<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
