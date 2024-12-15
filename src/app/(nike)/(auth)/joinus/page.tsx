import Link from "next/link";
import Image from "next/image";

const JoinUs = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-[80vh] p-3 text-[#8D8D8D]">
            <div className="sm:w-[400px] w-full flex justify-center items-center flex-col sm:gap-6 gap-4">
                <div className="w-14 h-10">
                    <Image src={"/logo.webp"} alt="" width={600} height={600} className="w-full h-full object-contain" />
                </div>
                <h1 className="sm:text-4xl text-3xl font-medium text-center px-2 text-[#111]">BECOME A NIKE MEMBER</h1>
                <p className="text-center sm:text-sm text-xs">
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                </p>
                <form className="mt-6 space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:outline-none"
                    />
                    <div>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:outline-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Get a Nike Member Reward every year on your Birthday.
                        </p>
                    </div>
                    <select
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:outline-none"
                    >
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none hover:bg-gray-100"
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none hover:bg-gray-100"
                        >
                            Female
                        </button>
                    </div>
                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            className="mt-1 border border-gray-300 rounded-sm text-black focus:ring-black"
                        />
                        <p className="text-xs text-gray-600">
                            Sign up for emails to get updates from Nike on products, offers and your Member benefits.
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 px-3 text-center">
                        By creating an account, you agree to Nike&apos;s<br/>
                        <Link href="#" className="underline">
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="underline">
                            Terms of Use
                        </Link>.
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-black text-white rounded-md px-4 py-2 text-sm font-semibold focus:outline-none hover:bg-gray-800"
                    >
                        JOIN US
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-6">
                    Already a Member?&nbsp;
                    <Link href="/signin" className="underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default JoinUs;
