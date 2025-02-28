import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";

import styles from "./modal.module.scss";

interface ModalProps {
  close?: (...args: any) => void | Promise<void>;

  title?: string;
  children: ReactNode;

  showCloseBtn?: boolean;
}
export default function Modal({
  close,
  title,
  children,
  showCloseBtn = true,
}: ModalProps) {
  const handleWrapperClick = (event) =>
    event.target.classList?.[0] === styles["modal-wrapper"] && close();

  return createPortal(
    <div className={styles["modal-wrapper"]} onClick={handleWrapperClick}>
      <div className={styles["modal-container"]}>
        <div className={styles["modal-header"]}>
          <h3>{title}</h3>
          {showCloseBtn && (
            <button onClick={close} className={`${styles["btn-close"]} reset`}>
              <GrClose />
            </button>
          )}
        </div>
        <div className={styles["modal-body"]}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
