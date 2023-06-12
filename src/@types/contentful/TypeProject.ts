import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProject'
 * @name TypeProjectFields
 * @type {TypeProjectFields}
 * @memberof TypeProject
 */
export interface TypeProjectFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized false
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'repository' (Repository)
     * @name Repository
     * @localized false
     */
    repository?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'project' (Project)
 * @name TypeProjectSkeleton
 * @type {TypeProjectSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-18T02:50:52.654Z
 * @version 7
 */
export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
/**
 * Entry type definition for content type 'project' (Project)
 * @name TypeProject
 * @type {TypeProject}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-18T02:50:52.654Z
 * @version 7
 */
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;

export function isTypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProject<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'project'
}
