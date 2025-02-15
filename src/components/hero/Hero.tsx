import React from "react";
import * as S from "./styles";

const Hero: React.FC = () => {
  return (
    <>
      <S.sectionContainer>
        <S.div>
          <S.title>Parabéns!!! Você foi convocado para o meu aniversário</S.title>
          <S.p>
            Será no dia 22/02/2025 (isso mesmo, sábado que vem) na nossa
            grandiosissima Feira de São Cristovão 
          </S.p>
          <S.p>Horário: às 19:00 (não sei se serei pontual, mas estarei a caminho)</S.p>
          <S.title>Endereço para você nao se perder 📍:</S.title>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.42604949944!2d-43.2202037!3d-22.897651199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7c8128ce67%3A0x214edf88e557057e!2sCentro%20Luiz%20Gonzaga%20de%20Tradi%C3%A7%C3%B5es%20Nordestinas!5e0!3m2!1spt-BR!2sbr!4v1739589032556!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </S.div>
        <S.div>
          <S.title> Ponto de encontro:</S.title>
          <S.titleTwo>O aclamado Bar do frangão </S.titleTwo>
          <S.img src="/FRANGAO.jpg"></S.img>
        </S.div>

        <S.div>
          <S.title> Te aguardo lá 🤙🏽🤙🏽🤙🏽🤙🏽 </S.title>
          <S.img src="/minha.jpg"></S.img>
        </S.div>

      </S.sectionContainer>
    </>
  );
};

export default Hero;
