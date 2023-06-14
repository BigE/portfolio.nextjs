import { Document } from "@contentful/rich-text-types";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TypePersonalExperience, TypeProfessionalExperience } from "@/@types/contentful";

export type ExperienceProps = {
	name: string;
	positions: string[];
	start: Date;
	end?: Date;
	url?: string;
	description: Document;
};

export default function Experience({
	name,
	positions,
	start,
	end,
	url,
	description,
	...props
}: ExperienceProps & JSX.IntrinsicElements["section"]) {
	return <section {...props}>
		<header>
			<h3>{name}</h3>
			<h4>{positions.join(', ')}</h4>
			<h5>{start.getFullYear()} to {end? end.getFullYear() : 'current'}</h5>
			{url && <a href={url}><h6>{url}</h6></a>}
		</header>
		{documentToReactComponents(description)}
	</section>;
}

export function renderPersonalExperience(experience: TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string) {
	const props = {
		name: experience.fields.projectName,
		positions: experience.fields.positionsHeld,
		start: new Date(experience.fields.startDate),
		end: (experience.fields.endDate)? new Date(experience.fields.endDate) : undefined,
		url: experience.fields.projectUrl,
		description: experience.fields.description,
	};

	return <Experience key={experience.sys.id} {...props} className={className} />;
}

export function renderProfessionalExperience(experience: TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string) {
	const props = {
		name: experience.fields.companyName,
		positions: experience.fields.positionHeld,
		start: new Date(experience.fields.startDate),
		end: (experience.fields.endDate)? new Date(experience.fields.endDate) : undefined,
		url: experience.fields.companyUrl,
		description: experience.fields.description,
	};

	return <Experience key={experience.sys.id} {...props} className={className} />;
}
