import React, { useState } from "react";

import WhatsAppSvg from "assets/whatsapp.svg";
import InputTel from "components/InputTel";

import * as S from "./syles";

function App() {
  const [numero, setNumero] = useState<string>("");

  const url = `https://wa.me/55${String(numero).replace(/[^0-9]/g, "")}`;

  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperIcon>
          <S.IconWhatsApp src={WhatsAppSvg} />
          <S.Title>
            Abrir conversa de <br /> numero do WhatsApp
          </S.Title>
        </S.WrapperIcon>
        <S.Body>
          <InputTel value={numero} onChangeValue={setNumero} type="tel" />
          {url.length > 26 && (
            <S.ButtonIr href={url}>Ir para o WhatsApp</S.ButtonIr>
          )}
          {url.length > 26 && (
            <S.Details>
              ou acesse o link{" "}
              <a href={url} rel="noreferrer">
                {url}
              </a>
            </S.Details>
          )}
        </S.Body>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
