import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRichTextFields {
    title: EntryFieldTypes.Symbol;
    richText: EntryFieldTypes.RichText;
}

export type TypeRichTextSkeleton = EntrySkeletonType<TypeRichTextFields, "richText">;
export type TypeRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRichTextSkeleton, Modifiers, Locales>;

export function isTypeRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRichText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'richText'
}

export type TypeRichTextWithoutLinkResolutionResponse = TypeRichText<"WITHOUT_LINK_RESOLUTION">;
export type TypeRichTextWithoutUnresolvableLinksResponse = TypeRichText<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeRichTextWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeRichText<"WITH_ALL_LOCALES", Locales>;
export type TypeRichTextWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeRichText<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeRichTextWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeRichText<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
