import { TypeResume, TypeResumeSkeleton } from "@/@types/contentful";
import { getClient } from "..";

export { getExperience } from "./experience";

export async function getResume(
	id: string
): Promise<TypeResume<"WITHOUT_UNRESOLVABLE_LINKS", string>> {
	return await getClient().withoutUnresolvableLinks.getEntry<TypeResumeSkeleton>(
		id
	);
}
