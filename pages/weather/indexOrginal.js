// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
// Objects & Styles

// Components
import Panel from '../../components/AppSections/Panel/Panel';
import Welcome from '../../components/AppSections/Welcome/Welcome';
import Highlights from '../../components/AppSections/Highlights/Highlights';
import Search from '../../components/AppSections/Search/Search';
import WeekForecast from '../../components/AppSections/WeekForecast/WeekForecast';
import AirQuality from '../../components/AppSections/AirQuality/AirQuality';
import Rainfall from '../../components/AppSections/Rainfall/Rainfall';
import SolarTime from '../../components/AppSections/SolarTime/SolarTime';
import useStore from "../../store/StoreContext";
import { useEffect } from "react";
import { segregateProps } from "../../lib/helpers";

// Function
export default function Weather(props) {
    console.log(`-----------Rendering WEATHER---PAGE`);
    const { state } = useStore()
    console.log('state');
    console.log(state);

    const segregatedProps = state.isValid ? segregateProps(state) : {};
    // For a failed request
    // segregatedProps = 'notAvailable'
    // segregatedProps.weekly = undefined



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
            <div className={`${styles.page} pageContainer`}>
                <main className={`${styles.dashboard}`}>
                    <section className={styles.sec1}>
                        <Panel />
                    </section>
                    <section className={styles.sec2}>
                        <Welcome
                            segProps={segregatedProps.welcome}
                        />
                    </section>
                    <section className={styles.sec3}>
                        <Highlights
                            segProps={segregatedProps.highlights}
                        />
                    </section>
                    <section className={styles.sec4}>
                        <Search />
                    </section>
                    <section className={styles.sec5}>
                        <WeekForecast
                            segProps={segregatedProps.weekly}
                        />
                    </section>
                    <section className={styles.sec6}>
                        <AirQuality
                            segProps={segregatedProps.airQuality}
                        />
                    </section>
                    <section className={styles.sec7}>
                        <Rainfall
                            segProps={segregatedProps.rainfall}
                        />
                    </section>
                    <section className={styles.sec8}>
                        <SolarTime
                            segProps={segregatedProps.solar}
                        />
                    </section>
                </main>
            </div>
        </>
    );
}
Weather.displayName = `Weather`;

export function getServerSideProps(pageContext) {
    // const { state } = useStore()

    return {
        props: {}
    }
}
