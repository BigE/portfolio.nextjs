import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProfessionalExperienceFields {
    companyName: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    positionHeld: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    companyUrl?: EntryFieldTypes.Symbol;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
}

export type TypeProfessionalExperienceSkeleton = EntrySkeletonType<TypeProfessionalExperienceFields, "professionalExperience">;
export type TypeProfessionalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProfessionalExperienceSkeleton, Modifiers, Locales>;

export function isTypeProfessionalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProfessionalExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'professionalExperience'
}

export type TypeProfessionalExperienceWithoutLinkResolutionResponse = TypeProfessionalExperience<"WITHOUT_LINK_RESOLUTION">;
export type TypeProfessionalExperienceWithoutUnresolvableLinksResponse = TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProfessionalExperienceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProfessionalExperience<"WITH_ALL_LOCALES", Locales>;
export type TypeProfessionalExperienceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProfessionalExperience<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProfessionalExperienceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
