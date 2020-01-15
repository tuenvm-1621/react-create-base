import React from 'react';
import Link from 'next/link';

import Child from '../components/Child';

export default () => (
  <div>
    <Child myProp="HEYHEYHEY" />
    <Link href="/">
      Back to home
    </Link>
  </div>
);
