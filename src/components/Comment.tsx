import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
      onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

 return (
    <div className={styles.comment}>
        <Avatar 
         hasBorder={false} 
         src="https://i.ibb.co/gDg4J3m/Lionel-Messi.png" 
         alt="" 
        />

    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Lionel Messi</strong>
                    <time title="17 de abril às 17h08" dateTime="2023-04-12">Cerca de 1h atrás</time>    
                </div>

                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24}/>
                </button>

            </header>   
                 <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
    </div>
</div>
    )
}