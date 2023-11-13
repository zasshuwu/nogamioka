import Image from "next/image";

const Intro = () => {
  const year = new Date().getFullYear();

  return <div className="prose prose-lg dark:prose-invert mx-auto my-4">
    <h1>{"My name is Anh H Nguyen,"}</h1>
    <p>{`or just simply "Anh". I am a struggling engineering student by day and powerhouse of a dev by night.`}</p>
    <div className="relative h-32 w-32 rounded-full border">
      <Image className="rounded-full m-0 p-1" src="/apple-touch-icon.png" fill={true} alt="A photo of Anh"></Image>
    </div>
    <p>{`Ever since I got bitten by the radioactive coding bug in 2018, I have had my deft fingers on a lot of pies that are in production on both the frontend, the backend, and the middle-end (a.k.a. middleware).`}</p>
    <p>{`I spend the rest of my unallocated time doing homework (duh!), reading technical books (e.g., the System Design Interview), discovering new technology stacks through my homelab that has a 3-node kubernetes cluster, enjoying a "relaxing" time gaming with friends, and on (un)healthy amounts of sleep.`}</p>
    <blockquote>{`- Anh, circa ${year}`}</blockquote>
  </div>
}

export default Intro;