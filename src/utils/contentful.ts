import { TypePage, TypePageSkeleton, TypeSiteSettingsSkeleton, TypeSocialIcons, TypeSocialIconsSkeleton } from "@/@types/contentful";
import { createClient } from "contentful";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const host = process.env.CONTENTFUL_HOST || "cdn.contentful.com";
const spaceId = process.env.CONTENTFUL_SPACE_ID || "";

const client = createClient({
	accessToken: accessToken,
	host: host,
	space: spaceId,
});


export function getClient( isPreview: boolean = false ) {
	return client;
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
