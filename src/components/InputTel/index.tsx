import React, { InputHTMLAttributes } from "react";
import { celularMask } from "masks-br";

import { Input } from "./syles";

export type InputTelProps = {
  onChangeValue: (v: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputTel({
  value,
  onChangeValue,
  ...restProps
}: InputTelProps) {
  function telefoneEmpresaMask(objValue: string): string {
    const ret = String(objValue);

    if (
      !["0800", "0300"].includes(
        ret.replace(/\D/g, "").padStart(11, "0").substr(0, 4)
      )
    ) {
      return celularMask(ret);
    }

    return ret
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{3})(\d{3})/, "$1 $2")
      .replace(/(\s\d{4})\d?$/, "$1");
  }

  function handleonChangeValue(
    objValue: React.ChangeEvent<HTMLInputElement>
  ): void {
    onChangeValue(telefoneEmpresaMask(objValue.target.value));
  }

  return (
    <Input
      autoFocus
      typeof="number"
      value={value}
      placeholder="(__) _____-____"
      onChange={handleonChangeValue}
      {...restProps}
    />
  );
}
