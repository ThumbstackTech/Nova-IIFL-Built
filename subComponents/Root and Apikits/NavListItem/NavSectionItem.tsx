import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./NavSectionItem.module.scss";

interface Props {
  Title: string;
  Items: ItemsList[];
}

export interface ItemsList {
  name: string;
  to?: string;
  icon?: JSX.Element | string;
}

function NavSectionItem(props: any) {
  const router = useRouter();

  const { Title, Items } = props;

  return (
    <div className="">
      <h2>{Title}</h2>
      <ul>
        <li>
          <Link href="/Apikits">
            <a
              className={
                router.pathname.includes("/Apikits")
                  ? `${cx(styles.menuactive)}`
                  : ""
              }
            >
              <img
                id={cx(styles.menuimg)}
                src="/images/cable-white-24-dp.svg"
                alt=""
              />
              <span className={cx(styles.menutext)}>Api Kits</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Devdocs">
            <a
              className={
                router.pathname.includes("/Devdocs")
                  ? `${cx(styles.menuactive)}`
                  : ""
              }
            >
              <img
                id={cx(styles.menuimg)}
                src="/images/description-black-24-dp-1.svg"
                alt=""
              />
              <span className={cx(styles.menutext)}>Dev Docs</span>
            </a>
          </Link>
        </li>
        <li className={cx(styles.comingsoondiv)}>
          <Link href="/forums">
            <a
              className={
                router.pathname == "/forums" ? `${cx(styles.menuactive)}` : ""
              }
            >
              <img
                id={cx(styles.menuimg)}
                src="/images/forum-black-24-dp.svg"
                alt=""
              />
              <span className={cx(styles.menutext)}>Forums</span>
            </a>
          </Link>
          <a className={cx(styles.commingsoon)}>
            <span className={cx(styles.menucoming)}>coming soon</span>
          </a>
        </li>
        <li className={cx(styles.comingsoondiv)}>
          <Link href="/guides">
            <a
              className={
                router.pathname == "/guides" ? `${cx(styles.menuactive)}` : ""
              }
            >
              <img
                id={cx(styles.menuimg)}
                src="/images/integration-instructions-black-24-dp.svg"
                alt=""
              />
              <span className={cx(styles.menutext)}>Guides</span>
            </a>
          </Link>
          <a className={cx(styles.commingsoon)}>
            <span className={cx(styles.menucoming)}>coming soon</span>
          </a>
        </li>
        <li>
          <Link href="/guides">
            <a
              className={
                router.pathname == "/Partner" ? `${cx(styles.menuactive)}` : ""
              }
            >
              <img
                id={cx(styles.menuimg)}
                src="/images/integration-instructions-black-24-dp.svg"
                alt=""
              />
              <span className={cx(styles.menutext)}>Partner</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavSectionItem;
