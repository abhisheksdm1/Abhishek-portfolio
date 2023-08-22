import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="m-5">
      <h1 className="text-gray-200 text-3xl mt-8 mb-5 sm:text-4xl">About</h1>
      <br />
      <h3 className="text-gray-200 text-2xl mt-8 mb-5 sm:text-4xl">Hellooo</h3>
      <p className="text-gray-200 text-xl sm:text-3xl">
        Thanks for stopping by! I&apos;m Abhishek, a Software Engineer based in
        India. I&apos;ve been working in the Tech Industry for quite sometime(2+ yrs
        to be precise). My day-to-day activity mostly involves building UI&apos;s,
        handling state and cache, working with APIs integration and backend with
        nodejs & MYSQL.
      </p>
      <br />
      <p className="text-gray-200 text-xl sm:text-3xl">
        Apart from my usual work, I am passionate about Open-source, Web perf
        and JavaScript all around.
      </p>
      <br></br>
      <p className="text-gray-200 text-xl sm:text-3xl">
        Below you can find out where I&apos;ve worked in the past and my brief
        contribution :
      </p>
      <br />
      <br />
      <div className="flex">
        <Image src="/self.jpg" width={100} height={30} alt="self-employed"/>
        <div className="ml-3">
          <h1 className="text-gray-200 text-1xl sm:text-2xl">Self-Employed.</h1>
          <h2 className="text-gray-200 text-1xl sm:text-2xl">
            Software developer
          </h2>
          <h3 className="text-slate-600 sm:text-2xl">
            <i>Nov 2022 - present</i>
          </h3>
        </div>
      </div>
      <br />
      <p className="text-slate-600 sm:text-2xl">Self made Projects</p>
      <Link href="https://react-comfy-sloth-store.vercel.app/">
        <p className="text-gray-200 sm:text-2xl">
          - https://react-comfy-sloth-store.vercel.app/
        </p>
      </Link>
      <Link href="https://spotify-project-henna.vercel.app/">
        <p className="text-gray-200 sm:text-2xl">
          - https://spotify-project-henna.vercel.app/
        </p>
      </Link>
      <Link href="https://counter-react-redux-orpin.vercel.app">
        <p className="text-gray-200 sm:text-2xl">
          - https://counter-react-redux-orpin.vercel.app
        </p>
      </Link>
      <br></br>
      <div className="flex">
        <Image src="/hungama.jpg" width={100} height={30} alt="hungama"/>
        <div className="ml-3">
          <h1 className="text-gray-200 text-1xl sm:text-2xl">
            Hungama music private Ltd.
          </h1>
          <h2 className="text-gray-200 text-1xl sm:text-2xl">
            Software developer
          </h2>
          <h3 className="text-slate-600 sm:text-2xl">
            <i>April 2022 - Nov 2022</i>
          </h3>
        </div>
      </div>
      <br />
      <p className="text-slate-600 sm:text-2xl">
        - Developed full stack web Application using modern UI libraries like
        ReactJs and backend with NodeJS and MYSQL
      </p>
      <br />
      <div className="flex">
        <Image
          src="/simplyfi.jpg"
          width={100}
          height={30}
          style={{ height: "65px" }}
          alt="simplyfi"
        />
        <div className="ml-3">
          <h1 className="text-gray-200 text-1xl sm:text-2xl">
            Simplyfi Softech.
          </h1>
          <h2 className="text-gray-200 text-1xl sm:text-2xl">
            ReactJS developer
          </h2>
          <h3 className="text-slate-600 sm:text-2xl">
            <i>Sept 2021 - Feb 2022</i>
          </h3>
        </div>
      </div>
      <br />
      <p className="text-slate-600 sm:text-2xl">
        - Frontend development with react bootstrap designing css3 ,scss , Api
        Integration and using 3rd party Library
      </p>
      <p className="text-slate-600 sm:text-2xl">- Solving problem on web</p>
      <br />
      <div className="flex">
        <Image src="/jspider.jpg" width={100} height={30} alt="jsider"/>
        <div className="ml-3">
          <h1 className="text-gray-200 text-1xl sm:text-2xl">
            JSpider Institute.
          </h1>
          <h2 className="text-gray-200 text-1xl sm:text-2xl">Mern Stack</h2>
          <h3 className="text-slate-600 sm:text-2xl">
            <i>Sept 2020- Sept 2021</i>
          </h3>
        </div>
      </div>
      <br />
      <p className="text-slate-600 sm:text-2xl">
        - Mern Stack certified from JSpider
      </p>
      <Link href="https://abhisheksdm1.github.io/Tea-station/">
        <p className="text-gray-200 sm:text-2xl">
          - https://abhisheksdm1.github.io/Tea-station/
        </p>
      </Link>
      <br />
      <div className="flex">
        <Image src="/accenture.jpg" width={100} height={30}  alt="accenture"/>
        <div className="ml-3">
          <h1 className="text-gray-200 text-1xl sm:text-2xl">Accenture.</h1>
          <h2 className="text-gray-200 text-1xl sm:text-2xl">
            Associate Software Engineer
          </h2>
          <h3 className="text-slate-600 sm:text-2xl">
            <i>June 2019- Sept 2020</i>
          </h3>
        </div>
      </div>
      <br />
      <p className="text-slate-600 sm:text-2xl">
        - Worked as a Associate Software Enginer
      </p>
      <p className="text-slate-600 sm:text-2xl">
        - Software tiesting , functional Testing , austomation testing (TOSCA)
        .also automation specialist certified by tosca , Agile project , JIRA
      </p>
    </div>
  );
}
