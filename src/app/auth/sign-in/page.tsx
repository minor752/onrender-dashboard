import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { SignInForm } from '@/components/auth/sign-in-form';

export const metadata = { title: `Sign in | Auth | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Box sx={{ maxWidth: '450px', width: '100%' }}>
        <GuestGuard>
          <SignInForm />
        </GuestGuard>
      </Box>
    </Box>
  );
}
