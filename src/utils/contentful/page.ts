import { TypePage, TypePageSkeleton } from "@/@types/contentful";
import { getClient } from ".";

export async function getPage(slug: string) {
	const { items } =
		await getClient().withoutUnresolvableLinks.getEntries<TypePageSkeleton>(
			{
				content_type: "page",
				"fields.slug": slug,
				include: 10,
				limit: 1,
			}
		);
	const page = items[0] as TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;

	return page;
}

export async function getPages() {
	const { items } =
		await getClient().withoutUnresolvableLinks.getEntries<TypePageSkeleton>(
			{
				content_type: "page",
				limit: 100,
			}
		);

	return items as TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
}
