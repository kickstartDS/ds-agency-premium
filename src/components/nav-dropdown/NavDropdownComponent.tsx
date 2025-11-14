import classnames from "classnames";
import { Link } from "@kickstartds/base/lib/link";
import { FC } from "react";
import { NavDropdownProps } from "./NavDropdownProps";
import "./nav-dropdown.scss";

export type { NavDropdownProps };

export const NavDropdown: FC<NavDropdownProps> = ({ items, inverted }) => (
  <ul
    className={classnames(`dsa-nav-dropdown`)}
    ks-inverted={inverted?.toString()}
  >
    {items.map(({ label, active, url }) => {
      return (
        <li
          className={classnames(
            "dsa-nav-dropdown__item",
            active && "dsa-nav-dropdown__item--active"
          )}
          key={url}
        >
          <Link href={url} className={`dsa-nav-dropdown__label`}>
            {label}
          </Link>
        </li>
      );
    })}
  </ul>
);
