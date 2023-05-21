import client from '@/plugins/sanity.js'

export const getSkills = async () => {
  const query = '*[_type == "skills"]'
  const skills = await client.fetch(query)
  return skills
}
