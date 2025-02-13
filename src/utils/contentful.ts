import { TypeButton, TypeButtonSkeleton, TypeHero, TypeHeroSkeleton, TypePage, TypePageSkeleton, TypePersonalExperience, TypePersonalExperienceSkeleton, TypeProfessionalExperience, TypeProfessionalExperienceSkeleton, TypeResume, TypeResumeSkeleton, TypeSiteSettingsSkeleton, TypeSocialIcons, TypeSocialIconsSkeleton } from "@/@types/contentful";
import { EntriesQueries, EntrySkeletonType, createClient } from "contentful";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const host = process.env.CONTENTFUL_HOST || "cdn.contentful.com";
const spaceId = process.env.CONTENTFUL_SPACE_ID || "";

const client = createClient({
	accessToken: accessToken,
	host: host,
	space: spaceId,
});

export async function getButton( id: string ) {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeButtonSkeleton>({
		content_type: 'button',
		'sys.id': id,
		include: 10,
		limit: 1,
	});
	const button = items[0] as TypeButton<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return button;
}

export function getClient( isPreview: boolean = false ) {
	return client;
}

export async function getExperience( id: string, content_type: 'personalExperience' | 'professionalExperience' ) {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypePersonalExperienceSkeleton | TypeProfessionalExperienceSkeleton>({
		content_type: content_type,
		'sys.id': id,
		include: 10,
		limit: 1,
	});
	const experience = content_type == 'personalExperience'? items[0] as TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string> : items[0] as TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return experience;
}

export async function getHero( id: string ) {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeHeroSkeleton>({
		content_type: 'hero',
		'sys.id': id,
		include: 10,
		limit: 1,
	});
	const hero = items[0] as TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return hero;
}

export async function getPage( slug: string ) {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypePageSkeleton>({
		content_type: 'page',
		'fields.slug': slug,
		include: 10,
		limit: 1,
	});
	const page = items[0] as TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return page;
}

export async function getPages() {
	const query = {
		content_type: 'page',
		limit: 100
	};
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypePageSkeleton>(query);
	return items as TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
}

export async function getResume( id: string ) {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeResumeSkeleton>({
		content_type: 'resume',
		'sys.id': id,
		include: 10,
		limit: 1,
	});
	const resume = items[0] as TypeResume<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return resume;
}

export async function getSiteSettings(): Promise<{[key: string]: string}> {
	const query = {
		content_type: 'siteSettings',
		limit: 100
	};
	const { items } = await getClient().getEntries<TypeSiteSettingsSkeleton>(query);
	var settings: {[key: string]: string} = {};

	items.forEach(item => {
		settings[item.fields.key] = item.fields.value;
	});

	return settings;
}

export async function getSlugs(): Promise<string[]> {
	const query = {
		content_type: 'page',
		limit: 100
	}
	const { items } = await getClient().getEntries<TypePageSkeleton>(query);
	return items.map(item => {
		return item.fields.slug
	})
}

export async function getSocialIcons() {
	const query = {
		content_type: 'socialIcons',
		limit: 100
	}

	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeSocialIconsSkeleton>(query);
	return items as TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
}
