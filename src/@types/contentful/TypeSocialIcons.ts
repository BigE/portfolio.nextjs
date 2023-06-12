import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFontAwesomeIconSkeleton } from "./TypeFontAwesomeIcon";

/**
 * Fields type definition for content type 'TypeSocialIcons'
 * @name TypeSocialIconsFields
 * @type {TypeSocialIconsFields}
 * @memberof TypeSocialIcons
 */
export interface TypeSocialIconsFields {
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.EntryLink<TypeFontAwesomeIconSkeleton>;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'socialIcons' (Social Icons)
 * @name TypeSocialIconsSkeleton
 * @type {TypeSocialIconsSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-05-07T15:05:21.413Z
 * @version 1
 */
export type TypeSocialIconsSkeleton = EntrySkeletonType<TypeSocialIconsFields, "socialIcons">;
/**
 * Entry type definition for content type 'socialIcons' (Social Icons)
 * @name TypeSocialIcons
 * @type {TypeSocialIcons}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-05-07T15:05:21.413Z
 * @version 1
 */
export type TypeSocialIcons<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSocialIconsSkeleton, Modifiers, Locales>;

export function isTypeSocialIcons<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSocialIcons<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'socialIcons'
}
