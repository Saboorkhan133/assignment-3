import Link from "next/link"

export default function Header(){
    return(
        <div className = "header">
            <ul className = "header-buttons">              
              <Link href={"/"}>              
                <li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>about us</li>
                </Link>
                <Link href={"/jobs"}>
                <li>jobs</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>contact us</li>
                </Link>
            </ul>  
        </div>
    )
}