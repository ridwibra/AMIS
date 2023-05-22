import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - AMIS" : "AMIS"}</title>
        <meta
          name="description"
          content="Anwar Al Majd International School is the school your child needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between md:justify-evenly px-4 shadow-md bg-white">
            <Link href="/" className="mr-1 text-lg font-bold">
              <Image
                src="/logo.jpeg"
                alt="School's logo"
                height={50}
                width={50}
              />
            </Link>
            <div className="flex-1 flex justify-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="bg-white shadow-inner">
          {/* <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <div className="flex flex-col w-full sm:w-1/2">
              <h3 className="font-bold text-gray-700 mb-2">Column 1</h3>
              <ul className="list-none mb-6">
                <li className="mb-2">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    Item 1
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    Item 2
                  </Link>
                </li>
                <li className="">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    Item 3
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <h3 className="font-bold text-gray-700 mb-2">Column 2</h3>
              <ul className="list-none mb-6">
                <li className="mb-2">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    Item 1
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#">Item 2</Link>
                </li>
                <li className="">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    Item 3
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Horizontal line */}
          <hr />

          {/* Copyright */}
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center text-center text-sm text-gray-600 mt-4">
            Anwar Al-Majd International School © {new Date().getFullYear()} -
            All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
