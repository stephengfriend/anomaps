import { signIn, signOut, useSession } from 'next-auth/client'

import Button from '~/components/button'
import Input from '~/components/input'
import Label from '~/components/label'
import StackedList from '~/components/stacked-list'

export default function Page() {
  const [session, loading] = useSession()

  return (
    <div className="w-1/2 mx-auto my-16">
      <h1 className="text-center">Anomaps</h1>
      <h3 className="text-center">All of this just to spawn a Scout</h3>

      <div className="my-4">
        <Label htmlFor="system" hidden>
          System Search
        </Label>
        <Input name="system" id="system" placeholder="Search..." />
      </div>
      <div className="my-4">
        <h3>Recently updated systems</h3>
        <StackedList />
      </div>
      <article>
        <h3 className="text-gray-50">Authentication Information:</h3>
        {!session && (
          <p>
            <span className="text-gray-50">Not signed in</span>
            <br />
            <Button className="text-gray-50" onClick={() => signIn()}>
              Sign in
            </Button>
          </p>
        )}
        {session && (
          <p>
            <span className="text-gray-50">Signed in as {session.user.email}</span>
            <br />
            <Button className="text-gray-50" onClick={() => signOut()}>
              Sign out
            </Button>
          </p>
        )}
      </article>
    </div>
  )
}
