// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";

// Objects & Styles

// Components
import Welcome from '../../components/Welcome/Welcome';
import Highlights from '../../components/Highlights/Highlights';
import Search from '../../components/Search/Search';
import WeekForecast from '../../components/WeekForecast/WeekForecast';
import AirQuality from '../../components/AirQuality/AirQuality';
import Rainfall from '../../components/Rainfall/Rainfall';
import SolarTime from '../../components/SolarTime/SolarTime';


// Function
export default function Home(props) {
  return (
    <>
      {/* TOOLBOX */}
      {/*
        <ul className="toolbox">
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
        </ul>
      */}
      <main className={styles.dashboard}>
        <section className={styles.sec1}>
          <Welcome />
        </section>
        <section className={styles.sec2}>
          <Highlights />
        </section>
        <section className={styles.sec3}>
          <Search />
        </section>
        <section className={styles.sec4}>
          <WeekForecast />
        </section>
        <section className={styles.sec5}>
          <AirQuality />
        </section>
        <section className={styles.sec6}>
          <Rainfall />
        </section>
        <section className={styles.sec7}>
          <SolarTime />
        </section>
      </main>
    </>
  );
}
Home.displayName = `Home`;

// export function getServerSideProps(pageContext) {
//   return {
//     props: {}
//   }
// }


{/* 
      <div>
        <main className="window">
          <div className="windowHead"></div>
          <div className="windowBody">
            
            <section className="airQuality card">
              <div className="airQualityHeader">
                <h3 className="airQualityTitle">Air Quality Index</h3>
                <div className="airQualitySearch"></div>
              </div>
              <div className="airQualityHighlight">
                <div className="airQualityBrief">
                  <img src="/" alt="air quality" className="airQualityIcon" />
                  <p className="airQualityText">
                    {" "}
                    <span className="airQualityCondition">Good</span> A perfect
                    day for a walk!
                  </p>
                </div>
              </div>
              <div className="airQualityDetail">
                <ul className="airQualityList">
                  <li className="airQualityItem">
                    <span className="airQualityAmount">78</span>
                    <small className="airQualityTrace">
                      NO<sub>2</sub>
                    </small>
                  </li>
                  <li className="airQualityItem">
                    <span className="airQualityAmount">78</span>
                    <small className="airQualityTrace">
                      NO<sub>2</sub>
                    </small>
                  </li>
                  <li className="airQualityItem">
                    <span className="airQualityAmount">78</span>
                    <small className="airQualityTrace">
                      NO<sub>2</sub>
                    </small>
                  </li>
                  <li className="airQualityItem">
                    <span className="airQualityAmount">78</span>
                    <small className="airQualityTrace">
                      NO<sub>2</sub>
                    </small>
                  </li>
                  <li className="airQualityItem">
                    <span className="airQualityAmount">78</span>
                    <small className="airQualityTrace">
                      NO<sub>2</sub>
                    </small>
                  </li>
                </ul>
              </div>
            </section>
            <section className="rain card">
              <div className="rainHeader">
                <h3 className="rainTitle">Monthly Rainfall</h3>
                <div className="rainLeg">
                  <p className="rainLegItem">
                    <span className="rainLegBox rainLegBoxRed"></span> Legend
                    Red
                  </p>
                  <p className="rainLegItem">
                    <span className="rainLegBox rainLegBoxBlue"></span> Legend
                    Blue
                  </p>
                </div>
              </div>
              <div className="rainStats">
                <div className="ranStatItem">
                  <span className="rainStatBlue"></span>
                  <span className="rainStatRed"></span>
                </div>
                <div className="ranStatItem">
                  <span className="rainStatBlue"></span>
                  <span className="rainStatRed"></span>
                </div>
                <div className="ranStatItem">
                  <span className="rainStatBlue"></span>
                  <span className="rainStatRed"></span>
                </div>
                <div className="ranStatItem">
                  <span className="rainStatBlue"></span>
                  <span className="rainStatRed"></span>
                </div>
                <div className="ranStatItem">
                  <span className="rainStatBlue"></span>
                  <span className="rainStatRed"></span>
                </div>
              </div>
            </section>
            <section className="sun card">
              <div className="sunHeader">
                <h3 className="sunTitle">Sunrise & Sunset</h3>
                <div className="sunAddHighlight">AddImage</div>
              </div>
              <div className="sunHighlights">
                <div className="sunHl card">
                  <div className="hlHeader">
                    <img src="./loc" alt="location" className="hlLocImage" />
                    <p className="hlLoc">Dhaka</p>
                  </div>
                  <div className="hlBody">
                    <div className="hlRise">
                      <img src="./rise" alt="sunrise" className="hlImage" />
                      <div className="hlInfo">
                        <p className="hlLabel">Sunrise</p>
                        <p className="hlTime">4:40 AM</p>
                      </div>
                    </div>
                    <div className="hlSet">
                      <img src="./set" alt="sunset" className="hlImage" />
                      <div className="hlInfo">
                        <p className="hlLabel">Sunset</p>
                        <p className="hlTime">6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sunHl card">
                  <div className="hlHeader">
                    <img src="./loc" alt="location" className="hlLocImage" />
                    <p className="hlLoc">Tokyo</p>
                  </div>
                  <div className="hlBody">
                    <div className="hlRise">
                      <img src="./rise" alt="sunrise" className="hlImage" />
                      <div className="hlInfo">
                        <p className="hlLabel">Sunrise</p>
                        <p className="hlTime">4:40 AM</p>
                      </div>
                    </div>
                    <div className="hlSet">
                      <img src="./set" alt="sunset" className="hlImage" />
                      <div className="hlInfo">
                        <p className="hlLabel">Sunset</p>
                        <p className="hlTime">6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sunExtended">
                <div className="sunEx card">
                  <div className="exTitle">
                    <img src="./loc" alt="location" className="exLoc" />
                    <p className="exLocation">Kabul</p>
                  </div>
                  <div className="exRise">
                    <img src="./rise" alt="sunrise" className="exImage" />
                    <p className="exTime">4:40 AM</p>
                  </div>
                  <div className="exSet">
                    <img src="./set" alt="sunset" className="exImage" />
                    <p className="exTime">6:00 AM</p>
                  </div>
                </div>
                <div className="sunEx card">
                  <div className="exTitle">
                    <img src="./loc" alt="location" className="exLoc" />
                    <p className="exLocation">Kabul</p>
                  </div>
                  <div className="exRise">
                    <img src="./rise" alt="sunrise" className="exImage" />
                    <p className="exTime">4:40 AM</p>
                  </div>
                  <div className="exSet">
                    <img src="./set" alt="sunset" className="exImage" />
                    <p className="exTime">6:00 AM</p>
                  </div>
                </div>
                <div className="sunEx card">
                  <div className="exTitle">
                    <img src="./loc" alt="location" className="exLoc" />
                    <p className="exLocation">Kabul</p>
                  </div>
                  <div className="exRise">
                    <img src="./rise" alt="sunrise" className="exImage" />
                    <p className="exTime">4:40 AM</p>
                  </div>
                  <div className="exSet">
                    <img src="./set" alt="sunset" className="exImage" />
                    <p className="exTime">6:00 AM</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <aside className="dashboard"></aside>
      </div> 
    */}