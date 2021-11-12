import Books_api from "../../books_api"; 
import styles from "../../styles/book.module.css"; 
import Link from "next/link"; 

const book = ({book_details}) => {  
    return(
        <>
        <div className={styles.book_details}>
            <h2 className={styles.heading}> {book_details.title} </h2>
            <p className={styles.description}> {book_details.description} </p>   
            <Link href={book_details.purchasing_link}>
            <a className={styles.purchasing_link} target="_blank"> Get it! </a>
            </Link>
        </div>
        <div className={styles.image_div}>
            <img className={styles.image} src={book_details.image}></img>
        </div>
        </>
    )
}

export default book 

export const getServerSideProps = (context) => {
    let book_details; 
    for(let i=0;i<Books_api.length;i++){
        if(Books_api[i].id == context.params.id){
            book_details = Books_api[i]; 
            break; 
        }
    }
    
    return{
        props :{
            book_details
        }
    }
}