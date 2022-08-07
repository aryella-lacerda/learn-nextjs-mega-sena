import type { NextPage } from 'next'
import styles from './index.module.css'
import { Guesses } from '../components/guesses'
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { MegaSena } from '../domain/mega-sena'

const Home: NextPage = () => {
  const [guesses, setGuesses] = useState<Array<number>>([])
  const [numOfGuesses, setNumOfGuesses] = useState(6)

  const updateNumOfGuesses: ChangeEventHandler<HTMLInputElement> = (e) =>
    setNumOfGuesses(Number(e.target.value))

  const generateGuesses = useCallback(() => {
    const guesses = MegaSena.generate(numOfGuesses)
    setGuesses(guesses)
  }, [numOfGuesses])

  useEffect(() => {
    generateGuesses()
  }, [numOfGuesses, generateGuesses])

  return (
    <div className={styles.container}>
      <h1>Mega Sena</h1>
      <div className={styles.guesses}>
        {guesses.map((guess, index) => (
          <Guesses number={guess} key={index} />
        ))}
      </div>
      <button className={styles.generate} onClick={generateGuesses}>
        Generate
      </button>

      <footer className={styles.footer}>
        <h4>Number of Guesses: {numOfGuesses}</h4>

        <input
          type={'range'}
          min={6}
          max={15}
          value={numOfGuesses}
          onChange={updateNumOfGuesses}
        />
      </footer>
    </div>
  )
}

export default Home
