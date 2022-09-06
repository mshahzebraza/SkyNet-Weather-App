import styles from './Loader.module.scss';

export const Loader = () => {
    // SOURCE
    // https://cssfx.netlify.app/
    return (
        <div className={styles.fullCenter} ><div className={styles.cssFxLoader}></div>
        </div>
    )
}