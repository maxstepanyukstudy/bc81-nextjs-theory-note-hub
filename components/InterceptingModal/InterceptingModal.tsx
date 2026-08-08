"use client";

import { useRouter } from "next/navigation";

import css from './InterceptingModal.module.css'

type Props = {
  children: React.ReactNode;
};

const InterceptingModal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back(); // because it is for Intercepting

  return (
    <div className={css.modal}>
      <h2>This is an InterceptingModal (reload the page and see the effect)</h2>
      <button onClick={close}>Close</button>
      {children}
    </div>
  );
};

export default InterceptingModal;
