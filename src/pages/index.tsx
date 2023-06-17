import { posix } from 'path';
import styles from './index.module.css';
import { useState } from 'react';
const Home = () => {
  const directions = [[-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
  const [userInputs, setUserInputs] = useState<(0|1|2|3)[][]>([
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
  ])
  const bombCount=10;
  const [bombMap, setbombMap]=useState([
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,0,0,0,],
  ])
  const isPlaying =userInputs.some((row)=>row.some((input)=>input !==0));
  const isFailure =userInputs.some((row,y)=>
    row.some((input,x)=>input===1&&bombMap[y][x]===1) 
  );
  const board:number[][]=[];
  
const number = 3

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div 
          className={styles.hoge}
          style={{backgroundPosition:30*(1-number)}}
        />
      </main>
    </div>
  );
};

export default Home;
