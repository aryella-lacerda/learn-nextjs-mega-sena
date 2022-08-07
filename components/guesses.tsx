import styles from './guesses.module.css'

type Props = {
  number: number
}

export const Guesses = ({ number }: Props) => {
  return <div className={styles.container}>{number}</div>
}
