import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col box-border p-5 totalwidth">
      <h1 className="text-gray-200 pt-5 pb-12 font-medium text-7xl sm:text-9xl">
        Hi I'm
        <br />
        Abhishek
      </h1>
      <p className="text-gray-200 text-1xl sm:text-2xl">
        2+ years of experience in buliding visually appealing web experience. I
        mostly work with <span></span> React <span></span> Javascript{" "}
        <span></span> nodeJS <span></span> MYSQL{" "} & Web tools.
        <br/>
          <spna className="text-slate-600 sm:text-2xl">learm more</spna>
      </p>

      <h1 className="text-gray-200 text-3xl mt-8 mb-5 sm:text-4xl" >Featured Posts</h1>
      <Link href="/ReactBlog"><div className="w-1/3 bg-[#2e3039] h-1/3  container "><h1 className="text-xl sm: text-2xl ">The Power of react</h1></div></Link>
      {/* work experience */}
      <h1 className="text-gray-200 text-3xl mt-8 mb-5 sm:text-4xl">Work experience</h1>
      <div className="flex">
      <img src="/hungama.jpg" width={100} height={30}/>
      <div className="ml-3">
      <h1 className="text-gray-200 text-1xl sm:text-2xl">Hungama music private Ltd.</h1>
      <h2 className="text-gray-200 text-1xl sm:text-2xl">Software developer</h2>
      <h3 className="text-slate-600 sm:text-2xl"><i>April 2022 - Nov 2022</i></h3>
      </div>
      </div>
      <br/>
      <p className="text-slate-600 sm:text-2xl">- Developed full stack web Application using modern UI libraries like ReactJs and backend with NodeJS</p>
      <Link href="/Experience"><p className="text-slate-600 mb-5 sm:text-2xl">see past experience</p></Link>
    </main>
  );
}
