import { Fragment } from "react";
import HeaderNavigation from "../header-navigation";

export function LayoutComponent(props) {
	return (
		<Fragment>
			<HeaderNavigation />
			<main>{props.children}</main>
		</Fragment>
	);
}
