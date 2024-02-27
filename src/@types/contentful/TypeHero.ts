import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";

export interface TypeHeroFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    background?: EntryFieldTypes.AssetLink;
    button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export function isTypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHero<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hero'
}

export type TypeHeroWithoutLinkResolutionResponse = TypeHero<"WITHOUT_LINK_RESOLUTION">;
export type TypeHeroWithoutUnresolvableLinksResponse = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHeroWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
