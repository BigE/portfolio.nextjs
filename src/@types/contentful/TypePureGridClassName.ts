import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePureGridClassNameFields {
    className: EntryFieldTypes.Symbol;
}

export type TypePureGridClassNameSkeleton = EntrySkeletonType<TypePureGridClassNameFields, "pureGridClassName">;
export type TypePureGridClassName<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePureGridClassNameSkeleton, Modifiers, Locales>;

export function isTypePureGridClassName<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridClassName<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridClassName'
}

export type TypePureGridClassNameWithoutLinkResolutionResponse = TypePureGridClassName<"WITHOUT_LINK_RESOLUTION">;
export type TypePureGridClassNameWithoutUnresolvableLinksResponse = TypePureGridClassName<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePureGridClassNameWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridClassName<"WITH_ALL_LOCALES", Locales>;
export type TypePureGridClassNameWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridClassName<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePureGridClassNameWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridClassName<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
