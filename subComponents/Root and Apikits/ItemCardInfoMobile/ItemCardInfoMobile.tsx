import React from 'react'
import cx from 'classnames'
import styles from './itemCardInfoMobile.module.scss'

import { Api, CheckCircleBlack, TimmerBlack } from '../../../svgs/SVG'

const ItemCardInfoMobile = () => {
    return (
        <div
                      id={cx(styles.delete)}
                      className={cx(
                        styles.delete,
                        "d-flex justify-content-between d-sm-none my-4"
                      )}
                    >
                      <div
                        style={{ padding: "0 0" }}
                        className={cx(styles.response)}
                      >
                        <h3
                          style={{ fontWeight: 700, color: "#176e8f" }}
                          className={cx("mb-0 ms-0")}
                        >
                          <span style={{ width: "20.5px" }}>
                            <Api width="20px" height="" />
                          </span>
                          {/* <img
                          style={{ width: "20.5px" }}
                          src="/images/api.svg"
                          alt=""
                        /> */}{" "}
                          187
                        </h3>
                        <p
                          style={{
                            color: "rgba(0, 0, 0, 0.37)",
                            fontWeight: 700,
                            fontSize:'10px'
                          }}
                          className={cx("mb-0 mt-2")}
                        >
                          Daily API Calls
                        </p>
                      </div>
                      <div
                        id={cx(styles.success)}
                        style={{ padding: "0 2.5rem" }}
                        className={cx(styles.successRate, "mx-2")}
                      >
                        <h3
                          style={{ fontWeight: 700, color: "#1f8f17" }}
                          className={cx("mb-0 ms-0")}
                        >
                          <span>
                            <CheckCircleBlack width="20px" height="" />
                          </span>
                          {/* <img
                          style={{ width: "20.5px" }}
                          src="/images/check_circle_black_24dp.svg"
                          alt=""
                        /> */}
                          95.4%
                        </h3>
                        <p
                          style={{
                            color: "rgba(0, 0, 0, 0.37)",
                            fontWeight: 700,
                            fontSize:'10px'
                          }}
                          className={cx("mb-0 mt-2")}
                        >
                          Success Rate
                        </p>
                      </div>
                      <div className={cx(styles.response, "me-0")}>
                        <h3
                          style={{ fontWeight: 700, color: "#176e8f" }}
                          className={cx("mb-0 ms-0")}
                        >
                          <span>
                            <TimmerBlack width="20px" height=""/>
                          </span>
                          {/* <img
                          style={{ width: "20.5px" }}
                          src="/images/timer_black_24dp.svg"
                          alt=""
                        /> */}{" "}
                          0.002ms
                        </h3>
                        <p
                          style={{
                            color: "rgba(0, 0, 0, 0.37)",
                            fontWeight: 700,
                            fontSize:'10px'
                          }}
                          className={cx("mb-0 mt-2")}
                        >
                          Avg. Response time
                        </p>
                      </div>
                    </div>
                  
    )
}

export default ItemCardInfoMobile
