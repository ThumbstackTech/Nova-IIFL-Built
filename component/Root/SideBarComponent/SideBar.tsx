import NavSectionItem from "../../../subComponents/Root and Apikits/NavListItem/NavSectionItem";
import cx from "classnames";
import styles from "../../../subComponents/Root and Apikits/NavListItem/NavSectionItem.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface Props {
  data?: Sidebar;
}
export interface Sidebar {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  sidebarCollection: SidebarCollection[];
}

export interface SidebarCollection {
  id: number;
  title: string;
  sidebarLink: SidebarLink[];
}

export interface SidebarLink {
  id: number;
  title: string;
  tag: null | string;
  href: string;
  icon: Icon;
}

export interface Icon {
  data: Data | null;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  url: string;
}

function SideBar() {
  const [categories, setCategories] = useState<Sidebar>();
  const [loading, setLoading] = useState(false);

  // const fetchCategories = async () => {
  // 	try {
  // 	  const { data } = await axios.get(`https://nova-mysql.herokuapp.com/api/sidebars/1`);
  // 	  setCategories(data);
  // 	} catch (err) {
  // 	 <p>No Sidebar</p>
  // 	}
  //   };

  // useEffect(() => {
  // 	fetchCategories();
  //   }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        "https://nova-mysql.herokuapp.com/api/sidebars/1"
      );
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // const fetcher = (url: any) => fetch(url).then((r) => r.json());
  // const { data , error } = useSWR(
  //    "https://nova-mysql.herokuapp.com/api/sidebars/1", fetcher);
  // if (error) return <div>Failed to load posts</div>;
  // if (!data) return <div>loading...</div>;

  //   console.log("sidebar", categories!.sidebarCollection)
  //   console.log('testsidebar', categories!.sidebarCollection[1].title)

  const closeMenu = () => {
    document.querySelector("#sidebar-details")!.classList.remove("open");
    document.getElementById("nav-details")!.style.filter =
      "blur(0rem) brightness(1)";

    document.getElementById("main-content")!.style.filter =
      "blur(0rem) brightness(1)";
  };
  return (
    <aside className="sidebar" id="sidebar-details">
      <img
        src="/images/close_black_24dp.svg"
        className="close"
        alt=""
        onClick={closeMenu}
      />
      {/* {categories!.sidebarCollection.map((sidebar: any, idx: any)=> {
				return(
					console.log("xyz", sidebar)
				)
			})} */}
      <div className="sidebar-content">
        <NavSectionItem Title={firstsection.title} Items={firstsection.items} />
        {/* <h2>{categories.sidebarCollection[1].title}</h2> */}
        {/* <ul> */}
        {/* <li>
						<a href={`/${categories.sidebarCollection![1].sidebarLink[0].href}`}>
							<img src={categories.sidebarCollection![1].sidebarLink[0].icon.data.attributes.url} alt='' />
							{categories.sidebarCollection![1].sidebarLink[0].title}
						</a>
					</li> */}
        {/* <li>
						<a href={`/${categories.sidebarCollection![1].sidebarLink[1].href}`}>
							<img src={categories.sidebarCollection![1].sidebarLink[1].icon.data.attributes.url} alt='' />
							{categories.sidebarCollection![1].sidebarLink[1].title}
						</a>
					</li> */}
        {/* </ul> */}
        {/* <h2>{categories.sidebarCollection![2].title}</h2> */}
        {/* <ul> */}
        {/* <li>
						<a href={`/${categories.sidebarCollection![2].sidebarLink[0].href}`}>
							<img src={categories.sidebarCollection![2].sidebarLink[0].icon.data.attributes.url} alt='' />
							{categories.sidebarCollection![2].sidebarLink[0].title}
						</a>
					</li> */}
        {/* <li>
						<a href='#'>
							<img src='/images/code-black-24-dp.svg' alt='' />
							Development
						</a>
					</li> */}
        {/* </ul> */}
        {/* <h2>{categories.sidebarCollection![3].title}</h2> */}
        {/* <ul> */}
        {/* <li>
						<a href='#'>
							<img src='/images/group-21666.svg' alt='' />
							Freelance
						</a>
					</li> */}
        {/* <li className={cx(styles.comingsoondiv)}>
						<a href={`/${categories.sidebarCollection![3].sidebarLink[0].href}`}>
							<img src={categories.sidebarCollection![3].sidebarLink[0].icon.data.attributes.url} alt='' />
							{categories.sidebarCollection![3].sidebarLink[0].title}
						</a>
						<a className={cx(styles.commingsoon)}>
							<span className={cx(styles.menucoming)}>{categories.sidebarCollection![3].sidebarLink[0].tag}</span>
						</a>
					</li> */}
        <h2>NOVA STORE</h2>
        <ul>
          <li>
            <a href="#">
              <img src="/images/calculate_white_24dp.svg" alt="" />
              Algo Strategies
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/build-black-24-dp.svg" alt="" />
              Plug & Play
            </a>
          </li>
        </ul>
        <h2>NOVA LEARN</h2>
        <ul>
          <li>
            <a href="#">
              <img src="/images/calculate-white-24-dp.svg" alt="" />
              Blogs
            </a>
          </li>
          {/* <li>
						<a href='#'>
							<img src='/images/code-black-24-dp.svg' alt='' />
							Development
						</a>
					</li> */}
        </ul>
        <h2>GIGS & EVENTS</h2>
        <ul>
          {/* <li>
						<a href='#'>
							<img src='/images/group-21666.svg' alt='' />
							Freelance
						</a>
					</li> */}
          <li className={cx(styles.comingsoondiv)}>
            <a href="#">
              <img src="/images/person-add-white-24-dp.svg" alt="" />
              Hire Devs
            </a>
            <a className={cx(styles.commingsoon)}>
              <span className={cx(styles.menucoming)}>coming soon</span>
            </a>
          </li>
          <li className={cx(styles.comingsoondiv)}>
            <a href="#">
              <img src="/images/event-white-24-dp.svg" alt="" />
              Events
            </a>
            <a className={cx(styles.commingsoon)}>
              <span className={cx(styles.menucoming)}>coming soon</span>
            </a>
          </li>
          <li className={cx(styles.comingsoondiv)}>
            <a href="#">
              <img src="/images/account-balance-white-24-dp.svg" alt="" />
              Incubator
            </a>
            <a className={cx(styles.commingsoon)}>
              <span className={cx(styles.menucoming)}>coming soon</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

// export const getServerSideProps = async (context: any) => {
// 	const data = await axios({
// 		url: 'https://nova-mysql.herokuapp.com/api/sidebars/1',
// 		responseType: 'json',
// 	});

// console.log("youim",data)
// 	return {
// 		props: {
// 			data: data,
// 		},
// 	};
// };

export default SideBar;

// Data variable, This will be not the actual data, It is used here only for development purpose
// In production this data Would come from CMS
const firstsection = {
  title: "START BUILDING",
  items: [
    {
      name: "API Kits",
      to: "/Apikits",
      icon: "/images/cable-white-24-dp.svg",
    },
    {
      name: "Dev Docs",
      to: "/Devdocs",
      icon: "/images/description-black-24-dp-1.svg",
    },
    {
      name: "Forums",
      to: "/forums",
      icon: "/images/forum-black-24-dp.svg",
    },
    {
      name: "Guides",
      to: "/guides",
      icon: "/images/integration-instructions-black-24-dp.svg",
    },
  ],
};
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
