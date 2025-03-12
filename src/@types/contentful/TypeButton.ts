import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

export interface TypeButtonFields {
    label: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    pageFragment?: EntryFieldTypes.Symbol;
    internalPage?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    externalUrl?: EntryFieldTypes.Symbol;
    document?: EntryFieldTypes.AssetLink;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeButtonSkeleton, Modifiers, Locales>;

export function isTypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeButton<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'button'
}

export type TypeButtonWithoutLinkResolutionResponse = TypeButton<"WITHOUT_LINK_RESOLUTION">;
export type TypeButtonWithoutUnresolvableLinksResponse = TypeButton<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeButtonWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeButton<"WITH_ALL_LOCALES", Locales>;
export type TypeButtonWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeButton<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeButtonWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeButton<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
