import { Trash } from 'phosphor-react'
import styles from './Comment.module.css';


export function Comment () {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/thiagoss1.png" alt="" />

      <div className={styles.commentBox}>
        <header>
          <div className={styles.commentContent}>
            <strong>Thiago</strong>

            <time title='22 de julho às 17:55' dateTime="2022-07-22 17:55:00">Cera de 1h atras</time>
          </div>

          <button title='Deletar comentario'>
            <Trash />
          </button>
        </header>

        <p>Muito bom Devon, parabéns !!</p>
      </div>


      <footer>
        Aplaudir
      </footer>
    </div>
  )
}     