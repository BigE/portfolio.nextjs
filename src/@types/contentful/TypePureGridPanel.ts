import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePanelSkeleton } from "./TypePanel";
import type { TypePureGridClassNameSkeleton } from "./TypePureGridClassName";

export interface TypePureGridPanelFields {
    title: EntryFieldTypes.Symbol;
    className: EntryFieldTypes.EntryLink<TypePureGridClassNameSkeleton>;
    panel: EntryFieldTypes.EntryLink<TypePanelSkeleton>;
}

export type TypePureGridPanelSkeleton = EntrySkeletonType<TypePureGridPanelFields, "pureGridPanel">;
export type TypePureGridPanel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePureGridPanelSkeleton, Modifiers, Locales>;

export function isTypePureGridPanel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridPanel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridPanel'
}

export type TypePureGridPanelWithoutLinkResolutionResponse = TypePureGridPanel<"WITHOUT_LINK_RESOLUTION">;
export type TypePureGridPanelWithoutUnresolvableLinksResponse = TypePureGridPanel<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePureGridPanelWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridPanel<"WITH_ALL_LOCALES", Locales>;
export type TypePureGridPanelWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridPanel<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePureGridPanelWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridPanel<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
