import {
	TypePersonalExperience,
	TypePersonalExperienceSkeleton,
	TypeProfessionalExperience,
	TypeProfessionalExperienceSkeleton,
} from "@/@types/contentful";
import { getClient } from "..";

export type ExperienceType = "personalExperience" | "professionalExperience";

export async function getExperience(id: string, experience: ExperienceType) {
	if (experience == "personalExperience")
		return await getPersonalExperience(id);
	else return await getProfessionalExperience(id);
}

export async function getPersonalExperience(
	id: string
): Promise<TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>> {
	return await getClient().withoutUnresolvableLinks.getEntry<TypePersonalExperienceSkeleton>(
		id
	);
}

export async function getProfessionalExperience(
	id: string
): Promise<TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>> {
	return await getClient().withoutUnresolvableLinks.getEntry<TypeProfessionalExperienceSkeleton>(
		id
	);
}
