import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Work in progress',
};

const Wip = () => {
  redirect('/');
};

export default Wip;