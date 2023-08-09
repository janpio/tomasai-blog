'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export type AuthProps = {
	children: ReactNode;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
