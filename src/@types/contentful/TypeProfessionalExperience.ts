import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProfessionalExperience'
 * @name TypeProfessionalExperienceFields
 * @type {TypeProfessionalExperienceFields}
 * @memberof TypeProfessionalExperience
 */
export interface TypeProfessionalExperienceFields {
    /**
     * Field type definition for field 'companyName' (Company Name)
     * @name Company Name
     * @localized false
     */
    companyName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'positionHeld' (Position Held)
     * @name Position Held
     * @localized false
     */
    positionHeld: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'companyUrl' (Company URL)
     * @name Company URL
     * @localized false
     */
    companyUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'startDate' (Start Date)
     * @name Start Date
     * @localized false
     */
    startDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'endDate' (End Date)
     * @name End Date
     * @localized false
     */
    endDate?: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'professionalExperience' (Professional Experience)
 * @name TypeProfessionalExperienceSkeleton
 * @type {TypeProfessionalExperienceSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T14:49:51.248Z
 * @version 11
 */
export type TypeProfessionalExperienceSkeleton = EntrySkeletonType<TypeProfessionalExperienceFields, "professionalExperience">;
/**
 * Entry type definition for content type 'professionalExperience' (Professional Experience)
 * @name TypeProfessionalExperience
 * @type {TypeProfessionalExperience}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T14:49:51.248Z
 * @version 11
 */
export type TypeProfessionalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProfessionalExperienceSkeleton, Modifiers, Locales>;

export function isTypeProfessionalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProfessionalExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'professionalExperience'
}
