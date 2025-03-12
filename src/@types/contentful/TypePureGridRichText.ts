import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePureGridClassNameSkeleton } from "./TypePureGridClassName";
import type { TypeRichTextSkeleton } from "./TypeRichText";

export interface TypePureGridRichTextFields {
    title: EntryFieldTypes.Symbol;
    className: EntryFieldTypes.EntryLink<TypePureGridClassNameSkeleton>;
    richText: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
}

export type TypePureGridRichTextSkeleton = EntrySkeletonType<TypePureGridRichTextFields, "pureGridRichText">;
export type TypePureGridRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePureGridRichTextSkeleton, Modifiers, Locales>;

export function isTypePureGridRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePureGridRichText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'pureGridRichText'
}

export type TypePureGridRichTextWithoutLinkResolutionResponse = TypePureGridRichText<"WITHOUT_LINK_RESOLUTION">;
export type TypePureGridRichTextWithoutUnresolvableLinksResponse = TypePureGridRichText<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePureGridRichTextWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridRichText<"WITH_ALL_LOCALES", Locales>;
export type TypePureGridRichTextWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridRichText<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePureGridRichTextWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePureGridRichText<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
