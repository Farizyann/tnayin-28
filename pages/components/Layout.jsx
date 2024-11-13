import Link from "next/link"

export const Layout = ({ children }) => {

    return (
        <div>
            <ul>
                <li> <Link href={'/'}>All User</Link></li>
                <li> <Link href={'/male'}>Male</Link></li>
                <li> <Link href={'/female'}>Female</Link></li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}