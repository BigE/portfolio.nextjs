import { TypeSocialIcons, TypeSocialIconsSkeleton } from "@/@types/contentful";
import { getClient } from ".";

export async function getSocialIcons() {
	const { items } = await getClient().withoutUnresolvableLinks.getEntries<TypeSocialIconsSkeleton>({
		content_type: "socialIcons",
		limit: 100,
	});

	return items as TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
}