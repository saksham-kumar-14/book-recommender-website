import s from "../../styles/layout.module.css"; 
import Link from "next/dist/client/link"; 

const Layout=({children})=>{ 
    return(
        <>
            <div className={s.navbar}>
                <Link href="/">
                <a className={s.navbar_text}>
                    Home
                </a>
                </Link>

                <Link target="_blank" href="https://github.com/saksham-kumar-14">
                <a className={s.links} target="_blank">
                    Github
                </a>
                </Link>
                <Link href="https://stackoverflow.com">
                <a className={s.links} target="_blank">
                    Stackoverflow
                </a>
                </Link>
                <Link href="https://google.com">
                <a className={s.links} target="_blank">
                    Google
                </a>
                </Link>
                <Link href="/about">
                <a className={s.links} target="_blank">
                    About
                </a>
                </Link>
            </div>

            <div className={s.container}>
                {children}
            </div>
        </>
    )
}

export default Layout 