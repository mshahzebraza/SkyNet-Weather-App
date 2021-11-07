import styles from './FormInput.module.scss';

// Component Body
export default function FormInput({ label, type, id, placeholder, errorText, isReq, value, setValue }) {


  console.log(label);
  console.log(!!label);

  return (
    <div className={styles.formInput}>


      {label &&
        <label htmlFor={id} className={styles.label} >
          {label}
        </label>}

      <input
        id={id}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
        required={isReq}
        className={styles.input}
      />

      {/* Error Text */}
      {/* {
        errorText &&
        <p className={styles.errorText}>
          {errorText}
        </p>
      } */}

    </div>
  )
}