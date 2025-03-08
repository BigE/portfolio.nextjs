import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

export interface TypePanelFields {
    headline: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    fontAwesomeIcon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    richText: EntryFieldTypes.RichText;
    buttonAlignment: EntryFieldTypes.Symbol<"Centered" | "Default">;
    buttons?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton>>;
}

export type TypePanelSkeleton = EntrySkeletonType<TypePanelFields, "panel">;
export type TypePanel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePanelSkeleton, Modifiers, Locales>;

export function isTypePanel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePanel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'panel'
}

export type TypePanelWithoutLinkResolutionResponse = TypePanel<"WITHOUT_LINK_RESOLUTION">;
export type TypePanelWithoutUnresolvableLinksResponse = TypePanel<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePanelWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePanel<"WITH_ALL_LOCALES", Locales>;
export type TypePanelWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePanel<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePanelWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePanel<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
