import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePersonalExperience'
 * @name TypePersonalExperienceFields
 * @type {TypePersonalExperienceFields}
 * @memberof TypePersonalExperience
 */
export interface TypePersonalExperienceFields {
    /**
     * Field type definition for field 'projectName' (Project Name)
     * @name Project Name
     * @localized false
     */
    projectName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'projectUrl' (Project URL)
     * @name Project URL
     * @localized false
     */
    projectUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'positionsHeld' (Positions Held)
     * @name Positions Held
     * @localized false
     */
    positionsHeld: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
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
 * Entry skeleton type definition for content type 'personalExperience' (Personal Experience)
 * @name TypePersonalExperienceSkeleton
 * @type {TypePersonalExperienceSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T14:55:21.645Z
 * @version 3
 */
export type TypePersonalExperienceSkeleton = EntrySkeletonType<TypePersonalExperienceFields, "personalExperience">;
/**
 * Entry type definition for content type 'personalExperience' (Personal Experience)
 * @name TypePersonalExperience
 * @type {TypePersonalExperience}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T14:55:21.645Z
 * @version 3
 */
export type TypePersonalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePersonalExperienceSkeleton, Modifiers, Locales>;

export function isTypePersonalExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePersonalExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'personalExperience'
}
