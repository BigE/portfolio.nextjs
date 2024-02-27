import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePersonalExperienceSkeleton } from "./TypePersonalExperience";
import type { TypeProfessionalExperienceSkeleton } from "./TypeProfessionalExperience";

export interface TypeResumeFields {
    title: EntryFieldTypes.Symbol;
    headerLeft?: EntryFieldTypes.RichText;
    headerRight?: EntryFieldTypes.RichText;
    objective: EntryFieldTypes.Text;
    skills: EntryFieldTypes.RichText;
    professionalExperience?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProfessionalExperienceSkeleton>>;
    personalExperience?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePersonalExperienceSkeleton>>;
}

export type TypeResumeSkeleton = EntrySkeletonType<TypeResumeFields, "resume">;
export type TypeResume<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeResumeSkeleton, Modifiers, Locales>;

export function isTypeResume<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeResume<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'resume'
}

export type TypeResumeWithoutLinkResolutionResponse = TypeResume<"WITHOUT_LINK_RESOLUTION">;
export type TypeResumeWithoutUnresolvableLinksResponse = TypeResume<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeResumeWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeResume<"WITH_ALL_LOCALES", Locales>;
export type TypeResumeWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeResume<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeResumeWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeResume<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
