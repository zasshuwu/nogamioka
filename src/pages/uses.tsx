import Head from "next/head"
import HomeLayout from "~/layouts/HomeLayout"


const Uses = () => {
  return <>
    <Head>
      <title>{"AAANH's Uses"}</title>
      <meta name="description" content="Anh Hoang Nguyen's portfolio site :)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeLayout currentView="Uses">
      <div className="flex justify-center my-8">
        <div className="prose bg-white dark:bg-neutral-900 z-10 p-4 dark:prose-invert rounded-lg">
          <h1>/uses</h1>
          <h2>Hardware Capabilities</h2>
          <h3>Strike Group, Amphibious Assault, and Unconventional Warfare</h3>
          <ul>
            <li>MacBook Pro 16 in., 10-Core Apple M1 Pro, 16-Core GPU, 16GB LPDDR5 RAM, 512GB SSD.</li>
            <li>Framework Laptop 13 in., 8-Core Intel i7-1165G7, Iris Xe iGPU, 48GB @ 3200MHz RAM, 1TB NVME SSD.</li>
            <li>Dell Precision 5530, Intel i7-8850H, nVidia Quadro M2000M, 32GB RAM, 1TB NVME SSD</li>
            <li>MacBook Air 13 in., Apple M1, 8GB RAM, 512GB SSD.</li>
            <li>Dell 7390 2-in-1 13 in., Intel i7-8650U, 16GB RAM, 256GB NVME SSD.</li>
            <li>iPad Pro 11 in. Wi-Fi, Apple M1, 128GB SSD.</li>
          </ul>
          <h3>R&D, Defense, and HQ</h3>
          <ul>
            <li>AMD Ryzen 9 3900X, nVidia RTX 3070 Ti 8GB, 32GB @ 3200MHz RAM.</li>
            <li>AMD Ryzen 5 3600, nVidia GTX 1080 8GB + nVidia Tesla 24GB, 16GB @ 3200MHz RAM</li>
          </ul>
          <h3>Reconnaissance and Intelligence</h3>
          <ul>
            <li>Sony α7 II</li>
            <li>Sony ZV-E10</li>
            <li>Nikon D700</li>
            <li>Sigma Art 24-70mm, f2.8, DG DN</li>
            <li>Sigma Art 30mm, f2.8, DN</li>
            <li>Nikkor 28-70mm f2.8 ED</li>
            <li>Nikkor 24-86mm f3.5-4.5 VR</li>
            <li>Nikkor 50mm f1.8 VR</li>
            <li>Nikkor 70-300mm f4.5-5.6</li>
            <li>Nikon Speedlight SB-300</li>
          </ul>

          <h2>Software Capabilities</h2>
          <h3>Research & Development</h3>
          <ul>
            <li>Visual Studio Code
              <ul>
                <li>Theme: <a href="https://marketplace.visualstudio.com/items?itemName=aaanh.artoria-theme">Artoria Themes</a></li>
                <li>Font: Fantasque Sans Mono</li>
              </ul>
            </li>
            <li><s>Postman</s>{" "}<s>Insomnia</s>{" "}<a href="https://usebruno.com">Bruno</a></li>
            <li>{`Yeah, I think that's all I technically need to survive in today's tech scene. Of course there are a lot more DX tools, but like, honestly, do you need them all? Give me a Terminal and I'll give you the world, babe.`}</li>
          </ul>
        </div>
      </div>
    </HomeLayout>
  </>
}

export default Uses