import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";
import type { TypeFormSkeleton } from "./TypeForm";
import type { TypePanelSkeleton } from "./TypePanel";
import type { TypePureGridSkeleton } from "./TypePureGrid";
import type { TypeRichTextSkeleton } from "./TypeRichText";

export interface TypePageSectionFields {
    headline: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFormSkeleton | TypePanelSkeleton | TypePureGridSkeleton | TypeRichTextSkeleton>>;
}

export type TypePageSectionSkeleton = EntrySkeletonType<TypePageSectionFields, "pageSection">;
export type TypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSectionSkeleton, Modifiers, Locales>;

export function isTypePageSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePageSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pageSection'
}

export type TypePageSectionWithoutLinkResolutionResponse = TypePageSection<"WITHOUT_LINK_RESOLUTION">;
export type TypePageSectionWithoutUnresolvableLinksResponse = TypePageSection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageSection<"WITH_ALL_LOCALES", Locales>;
export type TypePageSectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageSection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageSection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
