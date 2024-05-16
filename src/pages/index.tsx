import { useState } from 'react';
import styles from './index.module.css';
const Home = () => {
  // const directions = [
  //   [-1, 0],
  //   [-1, -1],
  //   [0, -1],
  //   [1, -1],
  //   [1, 0],
  //   [1, 1],
  //   [0, 1],
  //   [-1, 1],
  // ];
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  // const bombCount = 10;
  //0->ボム無し
  //1->ボム有り
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  // const isFailure = userInputs.some((row, y) =>
  //   row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  // );

  //-1->石
  //0->画像なしセル
  //1~8->数字セル
  //9->石+はてな
  //10->石+旗
  //11->ボムセル
  const board: number[][] = [];
  board.push(
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1]
  );
  const clickcell = (x: number, y: number) => {
    console.log(x, y);
    const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    if (userInputs[y][x] === 0) {
      newUserInputs[y][x] = 1;
    }
    setUserInputs(newUserInputs);
  };
  console.log(userInputs);
  console.log(bombMap);
  console.log(board);
  // for (let yb = 0; yb <= 8; yb += 1) {
  //   for (let xb = 0; xb <= 8; xb += 1) {
  //     if (bombMap[yb][xb] === 1) {
  //       bomb_number += 1;
  //     }
  //   }
  // }
  // const bombNumber = 0;
  // const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
  let bomb_number = 0;
  let count = 0;
  for (let yb = 0; yb <= 8; yb += 1) {
    for (let xb = 0; xb <= 8; xb += 1) {
      if (bombMap[yb][xb] === 1) {
        count += 1;
      }
    }
  }
  if (count === 0) {
    while (bomb_number < 10) {
      const random_y = Math.floor(Math.random() * 9);
      const random_x = Math.floor(Math.random() * 9);
      if (userInputs[random_y][random_x] === 0 && bombMap[random_y][random_x] === 0) {
        bombMap[random_y][random_x] = 1;
        bomb_number += 1;
        // for (let yb = 0; yb <= 8; yb += 1) {
        //   for (let xb = 0; xb <= 8; xb += 1) {
        //     if (bombMap[yb][xb] === 1) {
        //       bomb_number += 1;
        //     }
        //   }
        // }
      }
    }
    // setBombMap(newBombMap);
  }
  // const bombNumber = 0;
  // for (let yaa = 0; yaa <= 8; yaa += 1) {
  //   for (let xaa = 0; xaa <= 8; xaa += 1) {
  //     if (userInputs[yaa][xaa] === 1 && bombMap[yaa][xaa] === 1) {
  //       board[yaa][xaa] = 11;
  //     }
  //   }
  // }
  for (let yaa = 0; yaa <= 8; yaa += 1) {
    for (let xaa = 0; xaa <= 8; xaa += 1) {
      let bombNumber = 0;
      if (userInputs[yaa][xaa] === 1) {
        if (bombMap[yaa][xaa] === 1) {
          for (let y_aa = 0; y_aa <= 8; y_aa += 1) {
            for (let x_aa = 0; x_aa <= 8; x_aa += 1) {
              if (bombMap[y_aa][x_aa] === 1) {
                board[y_aa][x_aa] = 11;
              }
            }
          }
        } else {
          for (let y_a = -1; y_a <= 1; y_a += 1) {
            for (let x_a = -1; x_a <= 1; x_a += 1) {
              if (
                yaa + y_a >= 0 &&
                yaa + y_a < bombMap.length &&
                xaa + x_a >= 0 &&
                xaa + x_a < bombMap[yaa + y_a].length
              ) {
                if (bombMap[yaa + y_a][xaa + x_a] === 1) {
                  bombNumber += 1;
                }
              }
            }
          }

          if (bombNumber === 0) {
            board[yaa][xaa] = 0;
          } else {
            board[yaa][xaa] = bombNumber;
          }
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <>
              {board[y][x] === -1 ? (
                <div
                  className={styles.cell}
                  key={`cell-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                />
              ) : (
                <div
                  className={styles.hoge}
                  key={`hoge-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                  style={{
                    backgroundPosition: 30 * (1 - board[y][x]),
                  }}
                />
              )}
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
