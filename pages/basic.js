import Head from 'next/head'

export default function Basic() {

  return (
    <>
      <Head>
        <title>Basic Mode</title>
        <meta name="description" content="No frills" />
      </Head>

      <article className='prose lg:prose-x prose-slate m-auto my-4'>
        <h1>Anh H Nguyen Portfolio</h1>
        <div>
          <h2>Introduction</h2>
          <p>Anh is an undergraduate student in Computer Engineering at Concordia University, Montreal, QC. Cohort of 2024.</p>
          <p>He is a software developer specialized in web, cloud, and MLOps.</p>
          <p>With a keen explorer&apos;s attitude, Anh builds a distributed homelab in order to test out the coolest and latest technologies in the enterprise market.</p>
        </div>
        <div>
          <h2>Experience</h2>
          <ul>
            <li>Software Developer Intern at Genetec Inc. (Summer 2022)
              <p>Worked on the Azure Platform to create build &amp; release pipelines for the company&apos;s software stack.</p>
              <p>Completed 2 intern projects in 3 months to migrate the team's legacy build process to the automated CI/CD pipelines, which include an internal language tool and a build status alert web application.</p>
              <p>Completed 2 intern projects in 3 months to migrate the team's legacy build process to the automated CI/CD pipelines, which include an internal language tool and a build status alert web application.</p>
            </li>
            
            
          </ul>
        </div>
        
      </article>
    </>
  )
}


