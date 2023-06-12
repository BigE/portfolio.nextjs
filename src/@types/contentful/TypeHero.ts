import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";

/**
 * Fields type definition for content type 'TypeHero'
 * @name TypeHeroFields
 * @type {TypeHeroFields}
 * @memberof TypeHero
 */
export interface TypeHeroFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'background' (Background)
     * @name Background
     * @localized false
     */
    background?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'button' (Button)
     * @name Button
     * @localized false
     */
    button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'hero' (Hero)
 * @name TypeHeroSkeleton
 * @type {TypeHeroSkeleton}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-27T00:33:42.692Z
 * @version 11
 */
export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
/**
 * Entry type definition for content type 'hero' (Hero)
 * @name TypeHero
 * @type {TypeHero}
 * @author 12TEGel8JV6Qk3HU69BlsR
 * @since 2023-04-27T00:33:42.692Z
 * @version 11
 */
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export function isTypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHero<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hero'
}
