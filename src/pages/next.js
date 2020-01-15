// @flow
import React from 'react';
import Link from 'next/link';

type Props = {
  title: String,
  league: String,
};

// 'as' props create dynamic route
const PostLink = ({ title }: Props) => (
  <li>
    <Link href="/post/[title]" as={`/post/${title}`}>
    {/* <Link href={`/post/?title=${title}`}> */}
      {title}
    </Link>
  </li>
);

const PremierLeague = ({ league }: Props) => (
  <Link href="/leagueTable/[league]" as={`/leagueTable/${league}`}>
    { league }
  </Link>
);

export default () => (
  <div>
    <h1>HELLO, THIS IS MY SSR PAGE</h1>
    <p>For further information, click the below</p>
    <br />
    <Link href='/about'>About Page</Link>
    <Link href='/home'>Home Page</Link>
    <br />
    <h2>Post Section</h2>
    <ul>
      <PostLink title='hello-nextjs' />
      <PostLink title='learn-nextjs' />
    </ul>
    <hr />
    <h2>English Premier League Table</h2>
    <PremierLeague league='Premier League' leagueId={524} />
  </div>
);
