import React, { useState } from "react";
import cx from "classnames";
import styles from "./AllApiFilter.module.scss";
import {
  Group25898,
  Group25899,
  Group26870,
  Star,
  StarRateBlack,
} from "../../../svgs/SVG";
import Image from "next/image";
import { APIKitsCard } from "../../../Interface/HomeInterface";
import ApiKitCard from "../ApiKitCard/ApiKitCard";
import {
  ApiInfo,
  RatingInfo,
  SectionDataEntity,
  SuccessInfo,
} from "../../../component/Apikits/ApiKitsComponent/ApiKitComponent";
import "animate.css";

interface Props {
  data?: data;
}
export interface data {
  section_data?: SectionDataEntity[] | null;
  api_kits_cards?: any;
}

const AllApiFilter = (props: any) => {
  const { data } = props;
  const { api_kits_cards } = data!;
  const [isActive, setActive] = useState(true);
  const [isAlgo, setAlgo] = useState(false);
  const [isEnterprise, setEnterprise] = useState(false);
  const [isFplatform, setFplatform] = useState(false);
  const [isFenterprise, setFenterprise] = useState(false);
  const [swiperData, setSwiperData] = useState(data);
  let data1 = data;
  console.log("algo", data);

  const allData = (datafilter: string) => {
    if (datafilter === "All") {
      setActive(true);
      setAlgo(false);
      setEnterprise(false);
      setFplatform(false);
      setFenterprise(false);
    } else {
      setActive(false);
    }
  };

  const algoData = (datafilter: string) => {
    if (datafilter === "Algo-Trading") {
      setAlgo(true);
      setActive(false);
      setEnterprise(false);
      setFplatform(false);
      setFenterprise(false);
    } else {
      setAlgo(false);
    }
  };

  const enterpriseData = (datafilter: string) => {
    if (datafilter === "Algo-Enterprise") {
      setEnterprise(true);
      setActive(false);
      setAlgo(false);
      setFplatform(false);
      setFenterprise(false);
    } else {
      setEnterprise(false);
    }
  };

  const FplatformData = (datafilter: string) => {
    if (datafilter === "Fintech Platform") {
      setFplatform(true);
      setActive(false);
      setAlgo(false);
      setEnterprise(false);
      setFenterprise(false);
    } else {
      setFplatform(false);
    }
  };

  const FenterpriseData = (datafilter: string) => {
    if (datafilter === "Fintech Enterprise") {
      setFenterprise(true);
      setFplatform(false);
      setActive(false);
      setAlgo(false);
      setEnterprise(false);
    } else {
      setFenterprise(false);
    }
  };

  const filterdata = (datafilter: string) => {
    if (datafilter === "All") {
      setSwiperData(data);
    } else {
      let filter = data!.filter(
        (a: { filterTag: string | string[] | undefined }) =>
          a.filterTag === datafilter
      );
      setSwiperData(filter);
      console.log("data", filter);
    }
  };
  return (
    <div>
      <section id={cx(styles.AllApiKits)}>
        <h2>All API Kits</h2>
        <p>
          Supporting innovation and growing digitalization in the fintech world,
          Nova brings to you its in-house built <br /> Open APIs. Providing a
          flexible framework through SDKs in 9 languages.
        </p>
        <div className={cx(styles.upperRow)}>
          <ul className={cx(styles.filters)}>
            {/* <li>All</li>
            <li>Algo-Trading</li>
            <li>Algo-Enterprise</li>
            <li>Fintech Platform</li>
            <li>Fintech Enterprise</li> */}
            <li
              className={cx(
                styles.filtersLi,
                isActive ? "apikitfilteractive" : null
              )}
              onClick={() => {
                filterdata("All");
                allData("All");
              }}
            >
              <a>All</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isAlgo ? "apikitfilteractive" : null
              )}
              onClick={() => {
                filterdata("Algo-Trading");
                algoData("Algo-Trading");
              }}
            >
              <a>Algo-Trading</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isEnterprise ? "apikitfilteractive" : null
              )}
              onClick={() => {
                filterdata("Algo-Enterprise");
                enterpriseData("Algo-Enterprise");
              }}
            >
              <a>Algo-Enterprise</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isFplatform ? "apikitfilteractive" : null
              )}
              onClick={() => {
                filterdata("Fintech Platform");
                FplatformData("Fintech Platform");
              }}
            >
              <a>Fintech Platform</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isFenterprise ? "apikitfilteractive" : null
              )}
              onClick={() => {
                filterdata("Fintech Enterprise");
                FenterpriseData("Fintech Enterprise");
              }}
            >
              <a>Fintech Enterprise</a>
            </li>
          </ul>
        </div>
        <div className={cx(styles.gridContainer)}>
          {swiperData!.map(
            (
              data: {
                api_info: ApiInfo;
                rating_info: RatingInfo;
                success_info: SuccessInfo;
              },
              index: React.Key
            ) => (
              // <ApiKitCard key={index} content={ApiCardData} />
              <ApiKitCard
                key={index}
                className={cx(
                  styles.cards,
                  "animate__animated",
                  isActive
                    ? "animate__fadeInRight"
                    : isAlgo
                    ? "animate__animated animate__bounce"
                    : isEnterprise
                    ? "animate__fadeInRight"
                    : isFplatform
                    ? "animate__animated animate__bounce"
                    : isFenterprise
                    ? "animate__fadeInRight"
                    : false
                )}
                // content={ApiCardData}
                content={{
                  info: {
                    api: data.api_info !== null ? data.api_info.api : 0,
                    rating:
                      data.rating_info !== null ? data!.rating_info!.rating : 0,
                    successRate:
                      data.success_info !== null
                        ? data!.success_info!.successRate
                        : 0,
                  },
                }}
                data={data}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default AllApiFilter;
