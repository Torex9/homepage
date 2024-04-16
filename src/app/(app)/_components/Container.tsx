import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export interface ContainerProps {
  className?: string;
}

export default function Container({ className, children }: PropsWithChildren<ContainerProps>) {
  return <div className={clsx('mx-auto w-full max-w-page px-4 md:px-6', className)}>{children}</div>;
}
