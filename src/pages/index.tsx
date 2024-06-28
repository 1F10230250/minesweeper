import { useEffect, useState } from 'react';
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
  //0 なし
  //1 左クリック
  //2 はてな
  //3 旗
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

  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (userInputs.some((row) => row.some((input) => input !== 0))) {
      if (!timerId) {
        const id = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
        setTimerId(id);
      }
    } else {
      setTime(0);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
  }, [userInputs, timerId]);

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

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
  const resetGame = () => {
    setUserInputs([
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
    setBombMap([
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
    setTime(0);
    stopTimer();
  };
  let allBomb = 0;
  let findBomb = 0;
  const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
  const chain = (y: number, x: number) => {
    for (let y_i = -1; y_i <= 1; y_i++) {
      for (let x_i = -1; x_i <= 1; x_i++) {
        const newY = y + y_i;
        const newX = x + x_i;
        if (newY >= 0 && newY <= 8 && newX >= 0 && newX <= 8 && y_i * x_i === 0) {
          if (userInputs[newY][newX] === 0) {
            newUserInputs[newY][newX] = 1;
            setUserInputs(newUserInputs);
            if (board[newY][newX] === 0) {
              chain(newX, newY);
            }
          }
        }
      }
    }
  };
  const clickcell = (x: number, y: number) => {
    if (allBomb === 0) {
      const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
      if (userInputs[y][x] === 0 || userInputs[y][x] === 2 || userInputs[y][x] === 3) {
        newUserInputs[y][x] = 1;
      }
      setUserInputs(newUserInputs);
      console.log(userInputs, '1回目');
      console.log(y, x);
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
        console.log('ボム作成！');
        console.log('ボムuserInputs', newUserInputs);
        const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
        while (bomb_number < 10) {
          const random_y = Math.floor(Math.random() * 9);
          const random_x = Math.floor(Math.random() * 9);
          if (newUserInputs[random_y][random_x] === 0 && bombMap[random_y][random_x] === 0) {
            newBombMap[random_y][random_x] = 1;
            bomb_number += 1;
          }
          setBombMap(newBombMap);
        }
        console.log('bomb_number', bomb_number);
      }
    }
  };
  // for (let yb = 0; yb <= 8; yb += 1) {
  //   for (let xb = 0; xb <= 8; xb += 1) {
  //     if (bombMap[yb][xb] === 1) {
  //       bomb_number += 1;
  //     }
  //   }
  // }
  // const bombNumber = 0;
  // const bombNumber = 0;
  // for (let yaa = 0; yaa <= 8; yaa += 1) {
  //   for (let xaa = 0; xaa <= 8; xaa += 1) {
  //     if (userInputs[yaa][xaa] === 1 && bombMap[yaa][xaa] === 1) {
  //       board[yaa][xaa] = 11;
  //     }
  //   }
  // }
  //ゲームオーバー
  for (let yaa = 0; yaa <= 8; yaa += 1) {
    for (let xaa = 0; xaa <= 8; xaa += 1) {
      let bombNumber = 0;
      if (userInputs[yaa][xaa] === 1) {
        if (bombMap[yaa][xaa] === 1) {
          for (let y_aa = 0; y_aa <= 8; y_aa += 1) {
            for (let x_aa = 0; x_aa <= 8; x_aa += 1) {
              if (bombMap[y_aa][x_aa] === 1) {
                board[y_aa][x_aa] = 11;
                allBomb = 2;
                stopTimer();
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
      // 空白連鎖
      if (userInputs[yaa][xaa] === 1 && board[yaa][xaa] === 0) {
        console.log('ok');
        chain(yaa, xaa);
      }
    }
  }

  let findBlock = 0;
  for (let yb = 0; yb <= 8; yb += 1) {
    for (let xb = 0; xb <= 8; xb += 1) {
      if (userInputs[yb][xb] === 1) {
        findBlock += 1;
      }
      //旗カウント
      if (userInputs[yb][xb] === 3) {
        findBomb += 1;
      }
    }
  }
  if (findBlock === 71) {
    allBomb = 1;
    stopTimer();
  }

  const handleRightClick = (x: number, y: number, event: React.MouseEvent) => {
    event.preventDefault();
    const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
    if (userInputs[y][x] === 0) {
      newUserInputs[y][x] = 2;
    }
    if (userInputs[y][x] === 2) {
      newUserInputs[y][x] = 3;
    }
    if (userInputs[y][x] === 3) {
      newUserInputs[y][x] = 0;
    }
    setUserInputs(newUserInputs);
  };

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (userInputs[y][x] === 2) {
        board[y][x] = 9;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 10;
      } else if (userInputs[y][x] === 0 && bombMap[y][x] === 0) {
        board[y][x] = -1;
      }
    }
  }

  console.log('最後userInput', userInputs);
  console.log('最後board', board);
  console.log('最後bombMap', bombMap);

  return (
    <div className={styles.container}>
      <div className={styles.option}>
        <div className={styles.bomb}>
          <div className={styles.bombnum}>{10 - findBomb}</div>
        </div>
        <button
          className={styles['reset-button']}
          onClick={resetGame}
          style={{
            backgroundPosition: allBomb === 1 ? -360 : allBomb === 0 ? -330 : -390,
          }}
        />
        <div className={styles.timer}>{time}</div>
      </div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <>
              {board[y][x] === -1 ? (
                <div
                  className={styles.cell}
                  key={`cell-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                  onContextMenu={(event) => handleRightClick(x, y, event)} //右クリック
                />
              ) : board[y][x] === 9 ? (
                <div
                  className={styles.sign}
                  key={`cell-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                  onContextMenu={(event) => handleRightClick(x, y, event)} //右クリック
                  style={{
                    backgroundPosition: -165,
                  }}
                />
              ) : board[y][x] === 10 ? (
                <div
                  className={styles.sign}
                  key={`cell-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                  onContextMenu={(event) => handleRightClick(x, y, event)} //右クリック
                  style={{
                    backgroundPosition: -185,
                  }}
                />
              ) : (
                <div
                  className={styles.hoge}
                  key={`hoge-${x}-${y}`}
                  onClick={() => clickcell(x, y)}
                  onContextMenu={(event) => handleRightClick(x, y, event)} //右クリック
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
