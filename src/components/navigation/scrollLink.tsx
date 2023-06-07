import Link, { LinkProps } from "next/link";
import { PropsWithChildren, useContext, useEffect, useState } from "react";

import { NavigationContext } from "@/context/navigation";

export type ScrollLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & PropsWithChildren & {
	callback?: CallableFunction;
};

export default function ScrollLink({ callback, children, ...props}: ScrollLinkProps) {
	const navigationContext = useContext(NavigationContext),
	      [isScrolling, setScrolling] = useState(false);

	useEffect(() => {
		var timer: NodeJS.Timeout;

		function scrollFinished(event: Event) {
			if (!isScrolling) return;

			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				setScrolling(false);
				if (navigationContext.callback) navigationContext.callback(false);
			}, 150);
		}

		window.addEventListener('scroll', scrollFinished);
		return () => { window.removeEventListener('scroll', scrollFinished); };
	}, [navigationContext, isScrolling, setScrolling]);

	function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		if (callback) callback(event);

		event.preventDefault();
		window.history.pushState({}, '', event.currentTarget.href);

		const targetId = event.currentTarget.href.replace(/.*\#/, "");
		const elem = document.getElementById(targetId);

		setScrolling(true);
		if(navigationContext.callback) navigationContext.callback(true);

		window.scrollTo({
			behavior: "smooth",
			top: (document.documentElement.scrollTop || document.body.scrollTop) + (elem?.getBoundingClientRect().top || 0),
		});
	}

	return <Link {...props} onClick={handleScroll}>{children}</Link>
}
