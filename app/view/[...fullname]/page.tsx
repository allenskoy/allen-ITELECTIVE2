import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function ProfilePage({ params }: { params: Promise<{ fullname: string[] }> }) {
  const { fullname } = await params;

  // As if Database Response
  const userDb = [
    {
      id: "allen",
      name: "Allen Inoc",
      section: "BSIT - 3A",
      email: "inocallen2@gmail.com",
      hobbies: ["Watching Anime", "Playing Online Games", "Basketball"]
    }
  ]

  for (const currentSlug of fullname) {
    if (currentSlug === "hobbies") {
      return (
        <div className="border p-4 mb-4 rounded-md">
          <h1>Hobby Page</h1>
          {userDb[0].hobbies.map((hobby) => (
            <ul key={hobby}>
              <li>{hobby}</li>
            </ul>
          ))}
        </div>
      )
    }
  }

  // Validation
  const checkValidUser: Boolean = userDb[0].id === fullname[0];
  console.log(checkValidUser)
  // If not Valid User
  if (!checkValidUser) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        Not Found User
      </div>
    )
  }

  // If Valid User -> Render actual page
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-6">
        <div key={userDb[0].id} className="border p-4 mb-4 rounded-md">
          <h1>{userDb[0].name}</h1>
          <h2>{userDb[0].section}</h2>
          <p className='mb-4'>Email: {userDb[0].email}</p>
          <Link href="./allen/hobbies">
            <Button>View Hobbies</Button>
          </Link>
        </div>
      </div>
    </Suspense>
  )
}