import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>Table of Content</p>
      <Link href="/token/erc20">
        <a title="ERC20">ERC20</a>
      </Link>
    </div>
  );
}
