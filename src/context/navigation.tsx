"use client";

import { createContext, useEffect, useRef } from "react";

import { MenuItems } from "@/utils/navigation";

export const NavigationContext = createContext<MenuItems>(undefined);

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
	const menuItems: MenuItems = useRef();

	useEffect(() => {
		menuItems.current = document.body.querySelectorAll('nav[id=main] .pure-menu-item');
	});

	return <NavigationContext.Provider value={menuItems}>{children}</NavigationContext.Provider>;
}
