import styles from "../../styles/BookList.module.css";  
import Link from "next/dist/client/link"; 

const Book_list=({recommended_books_data})=>{ 

    return(
        <>
        {recommended_books_data.map((e,index)=>{ 
            if(index%2 ==0){
            return(
                <div className={styles.book_section}>
                <div className={styles.book_section_1_even}>
                    <img src={e.image} className={styles.book_image}></img>
                </div>
                
                <div className={styles.book_section_2}>
                    <span className={styles.book_id}>{e.id}. </span>
                    <Link href="/book/[id]" as={`book/${e.id}`}>
                        <span className={styles.book_title}>{e.title}</span>
                    </Link>
                </div>
                
                </div>
            )
            }else{
            return(
                <div className={styles.book_section}>
                    <div className={styles.book_section_2}> 
                        <span className={styles.book_id}>{e.id}. </span>
                        <Link href="/book/[id]" as={`book/${e.id}`}>
                            <span className={styles.book_title}>{e.title}</span>
                        </Link>
                    </div>
                <div className={styles.book_section_1_odd}>
                    <img src={e.image} className={styles.book_image}></img>
                </div>
                
                </div>
            )
            }
            
        })}
            </>
    )
}

export default Book_list

