'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <Link href="/customer/login">Customer Login</Link>
      <Link href="/merchant/login">Merchant Login</Link>
    </main>
  );
}
