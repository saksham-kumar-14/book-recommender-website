import Link from "next/link"; 

const NotFound=()=>{
    return(
        <>
        <span>You have lost your way </span>
        <span>Go to the Home page <Link href="/"><a>Home</a></Link></span>
        </>
    )
}

export default NotFound