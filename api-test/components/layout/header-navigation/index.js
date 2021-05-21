import Link from "next/link";
import classes from "./header-navigation.module.css";
import { Logo } from "../logo";

export default function HeadeNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/platform-list">
							<a>
								<p>Platfrom List</p>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
