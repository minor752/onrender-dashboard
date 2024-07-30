import * as React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SignUpForm } from '@/components/auth/sign-up-form';

export const metadata = { title: `Sign up | Auth | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  redirect('/auth/sign-in');

  // return (
  //   <Layout>
  //     <GuestGuard>
  //       <SignUpForm />
  //     </GuestGuard>
  //   </Layout>
  // );
}
