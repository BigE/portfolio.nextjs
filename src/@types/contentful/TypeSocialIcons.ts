import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

export interface TypeSocialIconsFields {
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    url: EntryFieldTypes.Symbol;
}

export type TypeSocialIconsSkeleton = EntrySkeletonType<TypeSocialIconsFields, "socialIcons">;
export type TypeSocialIcons<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialIconsSkeleton, Modifiers, Locales>;

export function isTypeSocialIcons<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSocialIcons<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'socialIcons'
}

export type TypeSocialIconsWithoutLinkResolutionResponse = TypeSocialIcons<"WITHOUT_LINK_RESOLUTION">;
export type TypeSocialIconsWithoutUnresolvableLinksResponse = TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSocialIconsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialIcons<"WITH_ALL_LOCALES", Locales>;
export type TypeSocialIconsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialIcons<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSocialIconsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
