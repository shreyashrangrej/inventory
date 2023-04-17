import { Button } from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import { CustomNextPage } from '../../types/CustomNextPage';

const Home: CustomNextPage = () => {
  const {data, status} = useSession();

  return (
    <div>
      {data?.user?.name || <Link href='auth/signin'>GO TO SING IN</Link>}{" "}
      {status === 'authenticated' && (
        <Button onClick={() => signOut()}>SIGN OUT</Button>
      )}
      <Link href='/catagories'>PROTECTED PAGE</Link>
    </div>
  )
}

export default Home