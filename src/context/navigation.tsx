import { createContext, useRef, useState } from "react";

import { MenuItems } from "@/utils/navigation";

export type NavigationContextType = {clicked: boolean, callback: CallableFunction | undefined, menuItems: MenuItems};

export const NavigationContext = createContext<NavigationContextType>({clicked: false, callback: undefined, menuItems: undefined});

export default function NavigationProvider({ children }) {
	const menuItems: MenuItems = useRef();
	const [clicked, setClicked] = useState(false);
	const context: NavigationContextType = {clicked: clicked, callback: setClicked, menuItems: menuItems};

	return <NavigationContext.Provider value={context}>{children}</NavigationContext.Provider>;
}
