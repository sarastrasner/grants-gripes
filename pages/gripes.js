import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {useState} from 'react';

function Gripes() {
  const [gripes, updateGripes] = useState([
    "why is it so hard to find men's fashion?",
    'I hate everything',
    'meow',
  ]);

  
  return (
    <>
      <h1>You are on the gripes pages!</h1>
      <div>
        {gripes.map((gripe, idx) =>(
          <p key={idx}>{gripe}</p>
        ))}
      </div>
      <footer className={styles.footer}>
        <Link href="/">
          <a>I want to go to home</a>
        </Link>
      </footer>
    </>
  );
}

export default Gripes;
