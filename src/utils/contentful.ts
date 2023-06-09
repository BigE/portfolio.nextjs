import { createClient, ContentfulClientApi, Entry } from "contentful";

import { IPage, ISiteSettings } from "@/@types/generated/contentful";
import { ISiteSettingsFields } from "@/@types/generated/contentful";
import { IPageFields } from "@/@types/generated/contentful";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const spaceId = process.env.CONTENTFUL_SPACE_ID || "";

const client: ContentfulClientApi = createClient({
	accessToken: accessToken,
	space: spaceId,
});


export function getClient( isPreview: boolean = false ): ContentfulClientApi {
	return client;
}

export async function getPage( slug: string ): Promise<Entry<IPage>> {
	const query = getPageQuery( slug );
	const { items } = await getClient().getEntries<IPage>( query );
	const page = items[0];

	return page;
}

const getPageQuery = ( slug: string ) => ({
	content_type: 'page',
	'fields.slug': slug,
	include: 10,
	limit: 1,
});

export async function getPages(): Promise<Entry<IPage>[]> {
	const query = {
		content_type: 'page',
		limit: 100
	};
	const { items } = await getClient().getEntries<IPage>(query);
	return items;
}

export async function getSiteSettings(): Promise<{[key: string]: string}> {
	const query = {
		content_type: 'siteSettings',
		limit: 100
	};
	const { items } = await getClient().getEntries<ISiteSettingsFields>(query);
	var settings: {[key: string]: string} = {};

	items.forEach(item => {
		settings[item.fields.key] = item.fields.value;
	});

	return settings;
}

export async function getSlugs() {
	const query = {
		content_type: 'page',
		limit: 100
	}
	const { items } = await getClient().getEntries<IPageFields>(query);
	return items.map(item => {
		return item.fields.slug
	})
}

export async function getSocialIcons() {
	const query = {
		content_type: 'socialIcons',
		limit: 100
	}

	const { items } = await getClient().getEntries(query);
	return items;
}
