import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeForm'
 * @name TypeFormFields
 * @type {TypeFormFields}
 * @memberof TypeForm
 */
export interface TypeFormFields {
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'submissionResponse' (Submission Response)
     * @name Submission Response
     * @localized false
     */
    submissionResponse?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'form' (Form)
 * @name TypeFormSkeleton
 * @type {TypeFormSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:07:38.868Z
 * @version 9
 */
export type TypeFormSkeleton = EntrySkeletonType<TypeFormFields, "form">;
/**
 * Entry type definition for content type 'form' (Form)
 * @name TypeForm
 * @type {TypeForm}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-19T16:07:38.868Z
 * @version 9
 */
export type TypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFormSkeleton, Modifiers, Locales>;

export function isTypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeForm<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'form'
}
