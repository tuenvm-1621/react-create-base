// [title].js helps it a dynamic route
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Child from '../../components/Child';

export default () => {
  const router = useRouter();
  return (
    <div>
      <h1>{ router.query.title }</h1>
      <Child myProp="Post ID ne" />
      <Link href="/">Back to home</Link>
    </div>
  );
};
