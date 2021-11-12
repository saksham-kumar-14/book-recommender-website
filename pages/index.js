import Head from "next/head"; 
import styles from "../styles/Home.module.css";  
import Book_list from "./components/book_list"; 
import Books_api from "../books_api"; 

const Home=({recommended_books_data})=>{
  return(
    <>
      <Head>
        <title>Book Recommendations</title>
      </Head>
      <h1 className={styles.heading}>Gonna be recommending some books!</h1> 
      <Book_list recommended_books_data={recommended_books_data} />

    </>
  )
}

export default Home 

export const getStaticProps = () => { 
  const recommended_books_data = Books_api
  
  return{
    props: {
      recommended_books_data
    }
  }
}
