import { TypeHero, TypeHeroSkeleton } from "@/@types/contentful";
import { getClient } from ".";

export async function getHero(
	id: string
): Promise<TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>> {
	return await getClient().withoutUnresolvableLinks.getEntry<TypeHeroSkeleton>(
		id
	);
}
