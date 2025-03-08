import { TypeButton, TypeButtonSkeleton } from "@/@types/contentful";
import { getClient } from ".";

export async function getButton(
	id: string
): Promise<TypeButton<"WITHOUT_UNRESOLVABLE_LINKS", string>> {
	return await getClient().withoutUnresolvableLinks.getEntry<TypeButtonSkeleton>(
		id
	);
}
