import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Child from '../components/Child';

// dynamic with urly url: /post?title=Hello%20Next.js
export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>{ router.query.id }</h1>
      <Child myProp="Post ne" />
      <Link href="/">Back to home</Link>
    </div>
  );
};
