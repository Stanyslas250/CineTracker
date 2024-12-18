'use client';
import { Button } from 'flowbite-react';
import React from 'react';

export default function page() {
  return (
    <div>
      Account{' '}
      <form action="/auth/signout" method="post">
        <button className="btn btn-primary" type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
}
