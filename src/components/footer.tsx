import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#111] text-[#7E7E7E] text-sm pt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                    <h3 className="font-semibold mb-4 text-[#FFFFFF]">FIND A STORE</h3>
                    <ul className="space-y-4 text-[#FFFFFF]">
                        <li><Link href="/membership" className="hover:underline">BECOME A MEMBER</Link></li>
                        <li><Link href="/" className="hover:underline">SIGN UP FOR EMAIL</Link></li>
                        <li><Link href="/contact" className="hover:underline">Send Us Feedback</Link></li>
                        <li><Link href="/" className="hover:underline">STUDENT DISCOUNTS</Link></li>
                        <li><Link href="/internship" className="hover:underline">INTERNSHIPS</Link></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-semibold mb-4 text-[#FFFFFF]">GET HELP</h3>
                    <ul className="space-y-4">
                        <li><Link href="/" className="hover:underline">Order Status</Link></li>
                        <li><Link href="/" className="hover:underline">Delivery</Link></li>
                        <li><Link href="/" className="hover:underline">Returns</Link></li>
                        <li><Link href="/" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="/" className="hover:underline">Contact Us On Nike.com Inquiries</Link></li>
                        <li><Link href="/" className="hover:underline">Contact Us On All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-semibold mb-4 text-[#FFFFFF]">ABOUT NIKE</h3>
                    <ul className="space-y-4">
                        <li><Link href="/" className="hover:underline">News</Link></li>
                        <li><Link href="/" className="hover:underline">Careers</Link></li>
                        <li><Link href="/" className="hover:underline">Investors</Link></li>
                        <li><Link href="/" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col md:items-end space-y-5 text-2xl">
                    <div className="flex space-x-4">
                        <Link href="/" className="hover:opacity-75">
                            <FaTwitter />
                        </Link>
                        <Link href="/" className="hover:opacity-75">
                            <FaFacebook />
                        </Link>
                        <Link href="https://www.youtube.com/@n8xeditz561" className="hover:opacity-75">
                            <FaYoutube />
                        </Link>
                        <Link href="/" className="hover:opacity-75">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#7E7E7E] text-[#7E7E7E] mt-10 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-[#FFFFFF] flex items-center gap-2"><FaLocationDot /> Pakistan</span>
                        <span>© 2023 Nike, Inc. All Rights Reserved</span>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
                        <Link href="/" className="hover:underline">Guides</Link>
                        <Link href="/" className="hover:underline">Terms of Sale</Link>
                        <Link href="/" className="hover:underline">Terms of Use</Link>
                        <Link href="/" className="hover:underline">Nike Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

