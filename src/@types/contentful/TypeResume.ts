import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePersonalExperienceSkeleton } from "./TypePersonalExperience";
import type { TypeProfessionalExperienceSkeleton } from "./TypeProfessionalExperience";

/**
 * Fields type definition for content type 'TypeResume'
 * @name TypeResumeFields
 * @type {TypeResumeFields}
 * @memberof TypeResume
 */
export interface TypeResumeFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'objective' (Objective)
     * @name Objective
     * @localized false
     */
    objective: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'skills' (Skills)
     * @name Skills
     * @localized false
     */
    skills: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'professionalExperience' (Professional Experience)
     * @name Professional Experience
     * @localized false
     */
    professionalExperience?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProfessionalExperienceSkeleton>>;
    /**
     * Field type definition for field 'personalExperience' (Personal Experience)
     * @name Personal Experience
     * @localized false
     */
    personalExperience?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePersonalExperienceSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'resume' (Resume)
 * @name TypeResumeSkeleton
 * @type {TypeResumeSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-05-31T00:00:27.368Z
 * @version 5
 */
export type TypeResumeSkeleton = EntrySkeletonType<TypeResumeFields, "resume">;
/**
 * Entry type definition for content type 'resume' (Resume)
 * @name TypeResume
 * @type {TypeResume}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-05-31T00:00:27.368Z
 * @version 5
 */
export type TypeResume<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeResumeSkeleton, Modifiers, Locales>;

export function isTypeResume<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeResume<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'resume'
}
