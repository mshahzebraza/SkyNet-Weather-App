import styles from './FormInput.module.scss';

// Component Body
export default function FormInput({ label, type, id, placeholder, errorText, isReq, value, setValue }) {



  return (
    <div className={styles.group}>

      {/* Label & Input */}
      <div className={styles.control} >

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

      </div >

      {/* Error Text */}
      {
        errorText &&
        <p className={styles.errorText}>
          {errorText}
        </p>
      }

    </div>
  )
}