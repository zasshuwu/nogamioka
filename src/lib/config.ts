import { Owner, OwnerSchema } from "@/data/commons"

export default function getConfig() {

  const ownerData: Owner = {
    firstName: 'Anh',
    middleName: 'Hoang',
    lastName: 'Nguyen',
    github: 'aaanh',
    linkedin: 'aaanh',
    jobTitle: 'Software Developer',
    homepage: 'https://aaanh.com'
  }

  const { data, error } = OwnerSchema.safeParse(ownerData)

  if (error) {
    throw new Error("Invalid owner data. Unable to parse: ", error)
  }

  return { owner: data }
}

