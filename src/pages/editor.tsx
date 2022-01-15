import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume } from 'src/core/containers/Resume';
import { LeftNav } from 'src/core/layout/LeftNav';
import { RightNav } from 'src/core/layout/RightNav';
import { FlexHC } from 'src/styles/styles';

const Editor: NextPage = () => {
  return (
    <FlexHC>
      <Head>
        <title>Resume Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftNav />
      <Resume />
      <RightNav />
    </FlexHC>
  );
};

export default Editor;
