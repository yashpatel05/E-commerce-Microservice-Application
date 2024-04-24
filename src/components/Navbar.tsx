import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();


    return (
        <nav className="sticky top-20 bg-gray-200 flex flex-col z-10">
            <div className="container mx-auto mt-4"> {/* Added top padding to account for header height */}
                <ul className="flex flex-col">
                    <li className="my-2">
                        <Link href="/">
                            <span className={`block text-blue-600 hover:text-yellow-600 p-2 text-center text-lg ${pathname === '/' ? 'active' : ''}`}>Home</span>
                        </Link>
                    </li>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <li className="my-2">
                        <Link href="/products">
                            <span className={`block text-blue-600 hover:text-yellow-600 p-2 text-center text-lg ${pathname === '/products' ? 'active' : ''}`}>Products</span>
                        </Link>
                    </li>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <li className="my-2">
                        <Link href="/cart">
                            <span className={`block text-blue-600 hover:text-yellow-600 p-2 text-center text-lg ${pathname === '/cart' ? 'active' : ''}`}>Cart</span>
                        </Link>
                    </li>
                    <hr className="my-2 border-t-2 border-gray-300" />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
