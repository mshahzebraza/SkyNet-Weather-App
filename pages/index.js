// Dependency imports 
import Head from 'next/head'
import styles from '../styles/Home.module.scss';

// Objects & Styles


// Components


// Function
export default function Home(props) {

  return (
    <>
      <ul className="toolbox">
        <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
        <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
        <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
        <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
      </ul>

      <div className={styles.container} >
        <main className="window">
          <div className="windowHead"></div>
          <div className="windowBody">
            <section className="week">
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
              <ul className="weekList"><li className="weekItem card"><img className="weekIcon" src="/" alt="weather condition" /><span className="weekDay">Sun</span><span className="weekTemp">28 <sup>o</sup> </span></li></ul>
            </section>
            <section className="airQuality card">
              <div className="airQualityHeader">
                <h3 className="airQualityTitle">Air Quality Index</h3>
                <div className="airQualitySearch"></div>
              </div>
              <div className="airQualityHighlight">
                <div className="airQualityBrief"><img src="/" alt="air quality" className="airQualityIcon" /><p className="airQualityText"> <span className="airQualityCondition">Good</span> A perfect day for a walk!</p></div>
              </div>
              <div className="airQualityDetail">
                <ul className="airQualityList">
                  <li className="airQualityItem"><span className="airQualityAmount">78</span><small className="airQualityTrace">NO<sub>2</sub></small></li>
                  <li className="airQualityItem"><span className="airQualityAmount">78</span><small className="airQualityTrace">NO<sub>2</sub></small></li>
                  <li className="airQualityItem"><span className="airQualityAmount">78</span><small className="airQualityTrace">NO<sub>2</sub></small></li>
                  <li className="airQualityItem"><span className="airQualityAmount">78</span><small className="airQualityTrace">NO<sub>2</sub></small></li>
                  <li className="airQualityItem"><span className="airQualityAmount">78</span><small className="airQualityTrace">NO<sub>2</sub></small></li>
                </ul>
              </div>
            </section>
            <section className="rain card">
              <div className="rainHeader">
                <h3 className="rainTitle">Monthly Rainfall</h3>
                <div className="rainLeg">
                  <p className="rainLegItem"><span className="rainLegBox rainLegBoxRed"></span> Legend Red</p>
                  <p className="rainLegItem"><span className="rainLegBox rainLegBoxBlue"></span> Legend Blue</p>
                </div>
              </div>
              <div className="rainStats">
                <div className="ranStatItem"><span className="rainStatBlue"></span><span className="rainStatRed"></span></div>
                <div className="ranStatItem"><span className="rainStatBlue"></span><span className="rainStatRed"></span></div>
                <div className="ranStatItem"><span className="rainStatBlue"></span><span className="rainStatRed"></span></div>
                <div className="ranStatItem"><span className="rainStatBlue"></span><span className="rainStatRed"></span></div>
                <div className="ranStatItem"><span className="rainStatBlue"></span><span className="rainStatRed"></span></div>
              </div>
            </section>


          </div>
        </main>
        <aside className="dashboard"></aside>
      </div>
    </>
  );
}
Home.displayName = `Home`