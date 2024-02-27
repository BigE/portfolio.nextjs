import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFontAwesomeIconFields {
    name: EntryFieldTypes.Symbol;
}

export type TypeFontAwesomeIconSkeleton = EntrySkeletonType<TypeFontAwesomeIconFields, "fontAwesomeIcon">;
export type TypeFontAwesomeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFontAwesomeIconSkeleton, Modifiers, Locales>;

export function isTypeFontAwesomeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFontAwesomeIcon<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'fontAwesomeIcon'
}

export type TypeFontAwesomeIconWithoutLinkResolutionResponse = TypeFontAwesomeIcon<"WITHOUT_LINK_RESOLUTION">;
export type TypeFontAwesomeIconWithoutUnresolvableLinksResponse = TypeFontAwesomeIcon<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeFontAwesomeIconWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeFontAwesomeIcon<"WITH_ALL_LOCALES", Locales>;
export type TypeFontAwesomeIconWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeFontAwesomeIcon<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeFontAwesomeIconWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeFontAwesomeIcon<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
