import { PropsWithChildren, createContext, useRef, useState } from "react";

import { MenuItems } from "@/utils/navigation";

export const NavigationContext = createContext<MenuItems>(undefined);

export default function NavigationProvider({ children }: PropsWithChildren) {
	const menuItems: MenuItems = useRef();

	return <NavigationContext.Provider value={menuItems}>{children}</NavigationContext.Provider>;
}
