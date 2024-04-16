import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface logoprops {
  url?: string;
}
interface props {
  item: {
    id: string;
    name: string;
    brandBg: string;
    logo: logoprops;
    backgroundColor: string;
  };
}

export default function LinkedImage(props: props) {
  return (
    <Link
      href={`/work/${props.item.id}`}
      key={props.item.id}
      className={clsx(
        "group relative aspect-[1.618/1] overflow-hidden",
        props.item.brandBg
      )}
      style={{ backgroundColor: props.item.backgroundColor }}
      title={`${props.item.name} case study`}
    >
      <img
        className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:scale-105 sm:w-40 md:w-48 lg:w-40"
        src={props.item.logo.url}
        alt={props.item.name}
      />
      <div className="absolute inset-0 scale-150 bg-gradient-to-tr from-transparent to-white/15 opacity-0 duration-300 group-hover:opacity-100"></div>
    </Link>
  );
}
