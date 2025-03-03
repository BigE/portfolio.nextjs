import { createClient } from "contentful";
export { getExperience, getResume } from "./resume";
export { getButton } from "./button";
export { getHero } from "./hero";
export { getPage, getPages } from "./page";
export { getSocialIcons } from "./social_icons";
export { getSiteSettings } from "./site_settings";

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const host = process.env.CONTENTFUL_HOST || "cdn.contentful.com";
const spaceId = process.env.CONTENTFUL_SPACE_ID || "";

const client = createClient({
	accessToken: accessToken,
	host: host,
	space: spaceId,
});

export function getClient() {
	return client;
}
