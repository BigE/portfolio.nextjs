import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePersonalExperienceFields {
    projectName: EntryFieldTypes.Symbol;
    projectUrl?: EntryFieldTypes.Symbol;
    positionsHeld: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    shortDescription: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
}

export type TypePersonalExperienceSkeleton = EntrySkeletonType<TypePersonalExperienceFields, "personalExperience">;
export type TypePersonalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePersonalExperienceSkeleton, Modifiers, Locales>;

export function isTypePersonalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePersonalExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'personalExperience'
}

export type TypePersonalExperienceWithoutLinkResolutionResponse = TypePersonalExperience<"WITHOUT_LINK_RESOLUTION">;
export type TypePersonalExperienceWithoutUnresolvableLinksResponse = TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePersonalExperienceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalExperience<"WITH_ALL_LOCALES", Locales>;
export type TypePersonalExperienceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalExperience<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePersonalExperienceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
