import styles from "./ScamAlert.module.scss"

const ScamAlert = () => {
  return (
    <article className={styles.page}>
      <h1>SCAM ALERT</h1>

      <p>
        You are trying to visit <strong>{document.referrer}</strong> which is a
        known scam website.
      </p>

      {document.referrer && (
        <a href={document.referrer} className="button">
          Visit anyway
        </a>
      )}
    </article>
  )
}

export default ScamAlert
