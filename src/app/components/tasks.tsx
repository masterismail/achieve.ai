import type { NextPage } from "next";
import { Select } from "@mui/material";
import styles from "./tasks.module.css";

const Tasks: NextPage = () => {
  return (
    <div className={styles.div}>
      <div className={styles.frame}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.frame1} />
          <div className={styles.frame2}>
            <div className={styles.autoLayoutVertical}>
              <div className={styles.autoLayoutVertical1}>
                <div className={styles.autoLayoutVertical2}>
                  <img
                    className={styles.screenshotFrom2023123016Icon}
                    alt=""
                    src="/screenshot-from-20231230-160901removebgpreview-1-1@2x.png"
                  />
                  <div className={styles.autoLayoutVertical3}>
                    <div className={styles.autoLayoutHorizontal1}>
                      <div className={styles.frame3}>
                        <img
                          className={styles.award21}
                          alt=""
                          src="/award-2-1@2x.png"
                        />
                      </div>
                      <div className={styles.goals}>Goals</div>
                    </div>
                    <div className={styles.autoLayoutHorizontal2}>
                      <div className={styles.frame3}>
                        <div className={styles.frame5}>
                          <img
                            className={styles.planning1Icon}
                            alt=""
                            src="/planning-1@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.tasks}>Tasks</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame6}>
                  <div className={styles.frame7}>
                    <div className={styles.frame8} />
                  </div>
                  <img
                    className={styles.statistics1Icon}
                    alt=""
                    src="/statistics-1@2x.png"
                  />
                  <div className={styles.dashboard}>Dashboard</div>
                  <div className={styles.frame9} />
                </div>
                <div className={styles.frame10}>
                  <div className={styles.rectangle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame11}>
          <div className={styles.frame12}>
            <div className={styles.frame13}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
            </div>
          </div>
          <div className={styles.autoLayoutHorizontal3}>
            <div className={styles.autoLayoutVertical4}>
              <div className={styles.frame14}>
                <b className={styles.yourTasks}>Your Tasks</b>
                <div className={styles.frame15}>
                  <div className={styles.frame16}>
                    <div className={styles.autoLayoutHorizontal4}>
                      <b className={styles.allTasks}>All Tasks</b>
                    </div>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frame17}>
                  <img
                    className={styles.heroiconsSolidplus}
                    alt=""
                    src="/heroiconssolidplus@2x.png"
                  />
                  <div className={styles.addTask}>Add Task</div>
                </div>
              </div>
              <div className={styles.dataTable}>
                <button onClick={console.log("yo")}>
                <div className={styles.customer}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236526</div>
                  <div className={styles.kadinHerwitz}>Ann Culhane</div>
                  <div className={styles.div5}>1</div>
                  <input
                    className={styles.checkbox}
                    required={true}
                    type="checkbox"
                  />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                </button>
                <div className={styles.customer1}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236536</div>
                  <div className={styles.kadinHerwitz}>Tatiana Mango</div>
                  <div className={styles.div5}>11</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer2}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236527</div>
                  <div className={styles.kadinHerwitz}>Ahmad Rosser</div>
                  <div className={styles.div5}>2</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer3}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236537</div>
                  <div className={styles.kadinHerwitz}>Phillip Stanton</div>
                  <div className={styles.div5}>12</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer4}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$20.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236528</div>
                  <div className={styles.kadinHerwitz}>Zain Calzoni</div>
                  <div className={styles.div5}>3</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer5}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$20.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236538</div>
                  <div className={styles.kadinHerwitz}>Craig Lipshutz</div>
                  <div className={styles.div5}>13</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag5}>
                    <div className={styles.info}>Due</div>
                  </div>
                </div>
                <div className={styles.customer6}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$600.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236529</div>
                  <div className={styles.kadinHerwitz}>Leo Stanton</div>
                  <div className={styles.div5}>4</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag6}>
                    <div className={styles.info}>Inactive</div>
                  </div>
                </div>
                <div className={styles.customer7}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$600.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236539</div>
                  <div className={styles.kadinHerwitz}>Wilson Dorwart</div>
                  <div className={styles.div5}>14</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer8}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$350.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236530</div>
                  <div className={styles.kadinHerwitz}>Kaiya Vetrovs</div>
                  <div className={styles.div5}>5</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer9}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$350.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236540</div>
                  <div className={styles.kadinHerwitz}>Zain Lubin</div>
                  <div className={styles.div5}>15</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer10}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236531</div>
                  <div className={styles.kadinHerwitz}>Ryan Westervelt</div>
                  <div className={styles.div5}>6</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer11}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236541</div>
                  <div className={styles.kadinHerwitz}>Abram Bothman</div>
                  <div className={styles.div5}>16</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag6}>
                    <div className={styles.info}>Inactive</div>
                  </div>
                </div>
                <div className={styles.customer12}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$30.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236532</div>
                  <div className={styles.kadinHerwitz}>Corey Stanton</div>
                  <div className={styles.div5}>7</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag5}>
                    <div className={styles.info}>Due</div>
                  </div>
                </div>
                <div className={styles.customer13}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$30.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236542</div>
                  <div className={styles.kadinHerwitz}>Omar Levin</div>
                  <div className={styles.div5}>17</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer14}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236533</div>
                  <div className={styles.kadinHerwitz}>Adison Aminoff</div>
                  <div className={styles.div5}>8</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer15}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div2}>-$270.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236543</div>
                  <div className={styles.kadinHerwitz}>Haylie Donin</div>
                  <div className={styles.div5}>18</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer16}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$460.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236534</div>
                  <div className={styles.kadinHerwitz}>Alfredo Aminoff</div>
                  <div className={styles.div5}>9</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag6}>
                    <div className={styles.info}>Inactive</div>
                  </div>
                </div>
                <div className={styles.customer17}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div12}>$460.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236544</div>
                  <div className={styles.kadinHerwitz}>Brandon Dokidis</div>
                  <div className={styles.div5}>19</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag1}>
                    <div className={styles.info}>Paid</div>
                  </div>
                </div>
                <div className={styles.customer18}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div92}>$0.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236535</div>
                  <div className={styles.kadinHerwitz}>Allison Botosh</div>
                  <div className={styles.div5}>10</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.customer19}>
                  <div className={styles.cad}>CAD</div>
                  <div className={styles.div1}>$500.00</div>
                  <div className={styles.cad1}>CAD</div>
                  <div className={styles.div92}>$0.00</div>
                  <div className={styles.cad2}>CAD</div>
                  <div className={styles.div3}>$70.00</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla...
                  </div>
                  <div className={styles.div4}>5684236545</div>
                  <div className={styles.kadinHerwitz}>Wilson Vetrovs</div>
                  <div className={styles.div5}>20</div>
                  <div className={styles.checkbox1} />
                  <div className={styles.tag}>
                    <div className={styles.info}>Open</div>
                  </div>
                </div>
                <div className={styles.rectangle1} />
                <div className={styles.tablePagination}>
                  <div className={styles.of97}>1-10 of 97</div>
                  <div className={styles.tablePaginationInner}>
                    <div className={styles.rowsPerPageParent}>
                      <div className={styles.info}>Rows per page:</div>
                      <div className={styles.parent}>
                        <div className={styles.div101}>10</div>
                        <img
                          className={styles.downIcon}
                          alt=""
                          src="/down@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tablePaginationChild}>
                    <div className={styles.buttonParent}>
                      <div className={styles.button}>
                        <img
                          className={styles.leftIcon}
                          alt=""
                          src="/left@2x.png"
                        />
                      </div>
                      <div className={styles.info}>
                        <span>1</span>
                        <span className={styles.span}>/10</span>
                      </div>
                      <div className={styles.button1}>
                        <div className={styles.button2}>
                          <img
                            className={styles.leftIcon}
                            alt=""
                            src="/right@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dataTableChild} />
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox20} />
                  <div className={styles.columnHeader}>
                    <div className={styles.name}>#</div>
                    <Select className={styles.columnSorting} />
                  </div>
                  <div className={styles.columnHeader1}>
                    <div className={styles.name}>name</div>
                    <img
                      className={styles.leftIcon}
                      alt=""
                      src="/columnsorting@2x.png"
                    />
                  </div>
                  <div className={styles.columnHeader2}>
                    <div className={styles.name}>description</div>
                  </div>
                  <div className={styles.columnHeader3}>
                    <div className={styles.name}>Status</div>
                    <img
                      className={styles.leftIcon}
                      alt=""
                      src="/columnsorting@2x.png"
                    />
                  </div>
                  <div className={styles.columnHeader4}>
                    <div className={styles.name}>Rate</div>
                  </div>
                  <div className={styles.columnHeader4}>
                    <div className={styles.name}>Balance</div>
                  </div>
                  <div className={styles.columnHeader4}>
                    <div className={styles.name}>Deposit</div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <img
                    className={styles.leftIcon}
                    alt=""
                    src="/filter@2x.png"
                  />
                </div>
                <div className={styles.input}>
                  <img
                    className={styles.leftIcon}
                    alt=""
                    src="/search@2x.png"
                  />
                  <div className={styles.search}>Search...</div>
                </div>
                <img
                  className={styles.dataTableItem}
                  alt=""
                  src="/vector-1@2x.png"
                />
                <img
                  className={styles.dataTableInner}
                  alt=""
                  src="/vector-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
