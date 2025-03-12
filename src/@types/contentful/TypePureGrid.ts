import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePureGridPanelSkeleton } from "./TypePureGridPanel";
import type { TypePureGridRichTextSkeleton } from "./TypePureGridRichText";

export interface TypePureGridFields {
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePureGridPanelSkeleton | TypePureGridRichTextSkeleton>>;
}

export type TypePureGridSkeleton = EntrySkeletonType<TypePureGridFields, "pureGrid">;
export type TypePureGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePureGridSkeleton, Modifiers, Locales>;

export function isTypePureGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGrid<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGrid'
}

export type TypePureGridWithoutLinkResolutionResponse = TypePureGrid<"WITHOUT_LINK_RESOLUTION">;
export type TypePureGridWithoutUnresolvableLinksResponse = TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePureGridWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePureGrid<"WITH_ALL_LOCALES", Locales>;
export type TypePureGridWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePureGrid<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePureGridWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
