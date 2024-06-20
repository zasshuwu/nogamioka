"use server"

const BASE_URI = "https://raw.githubusercontent.com/aaanh/homepage"
const branch = process.env.REPOSITORY_BRANCH

function generateUri({ branch, component }: { branch: string, component: string }) {
  const normalizedComponent = component.charAt(0).toUpperCase() + component.slice(1) + '.tsx'


  if (branch) {
    return `${BASE_URI}/${branch}/src/components/${normalizedComponent}`
  } else {
    return undefined
  }
}

export async function getSourceCode(component: string) {
  const uri = generateUri({
    branch: branch ?? '',
    component: component
  })

  if (uri) {
    const res = await fetch(uri)
    const data = await res.text()

    return data
  }
}