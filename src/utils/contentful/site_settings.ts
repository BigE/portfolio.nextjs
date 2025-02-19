import { TypeSiteSettingsSkeleton } from "@/@types/contentful";
import { getClient } from ".";

export type SiteSettingsType = {[key: string]: string};

export async function getSiteSettings(): Promise<SiteSettingsType> {
	let settings: SiteSettingsType = {};
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeSiteSettingsSkeleton>({
		content_type: "siteSettings",
		limit: 100,
	});

	items.forEach(item => settings[item.fields.key] = item.fields.value);

	return settings;
}