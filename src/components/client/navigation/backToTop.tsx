"use client";

import styles from "@BigE/portfolio.css/scss/navigation/backToTop.module.scss";
import toggleStyles from "@BigE/portfolio.css/scss/navigation/toggle.module.scss";
import Icon from "../icon";
import React, { useEffect } from "react";

type BackToTopProps = {
	className?: string;
	icon?: string;
};

export default function BackToTop({ className, icon }: BackToTopProps) {
	icon ??= "FaRegCircleUp";

	useEffect(() => {
		const handleScroll = async () => {
			if (
				(document.scrollingElement || document.documentElement)
					.scrollTop > 200
			)
				document
					.getElementById("backToTop")
					?.classList.add(styles.visible);
			else
				document
					.getElementById("backToTop")
					?.classList.remove(styles.visible);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	function handleClick(event: React.MouseEvent) {
		event.preventDefault();

		window.history.pushState(
			{},
			"",
			window.location.href.replace(/(#.*)?$/, "")
		);
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}

	return (
		<a
			id="backToTop"
			aria-label="Back to top"
			className={`${toggleStyles.toggle} ${styles.toggle} ${styles.backToTop} ${className}`}
			href="#top"
			onClick={handleClick}
			title="Back to top"
		>
			<Icon icon={icon} aria-hidden="true" />
		</a>
	);
}
