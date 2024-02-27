"use client";

import styles from "@/styles/navigation/backToTop.module.scss";
import toggleStyles from "@/styles/navigation/toggle.module.scss";
import Icon from "../icon";
import React, { useEffect } from "react";

export default function BackToTop() {
	useEffect(() => {
		const handleScroll = async () => {
			if ((document.scrollingElement || document.documentElement).scrollTop > 200)
				document.getElementById('backToTop')?.classList.add(styles.visible);
			else
				document.getElementById("backToTop")?.classList.remove(styles.visible);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleClick(event: React.MouseEvent) {
		event.preventDefault();

		window.history.pushState({}, '', window.location.href.replace(/(#.*)?$/, ""));
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}

	return <a id="backToTop"
		aria-label="Back to top"
		className={`${toggleStyles.toggle} ${styles.backToTop}`}
		href="#top"
		onClick={handleClick}
		title="Back to top"
	><Icon icon="FaArrowAltCircleUp" /></a>
}
