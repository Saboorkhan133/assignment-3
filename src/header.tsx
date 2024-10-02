import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
             <ul className="header-buttons">
                <li>Home</li>
                <Link href={"/about-us"}>
                <li>about us</li></Link>
                <li>contact us</li>
                <li>jobs</li>
            </ul>
        </div>
           
    )
}