// client/src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ status }) { // NOVO: Recebe 'status' como prop
  const imageUrl = "";

  return (
    <div className="header">
      <img src={imageUrl} alt="Foto de Perfil" className="profile-pic" />
      <div className="chat-info">
        <div className="chat-name-container">
          <span className="chat-name">Ana Beatriz</span>
          <img
            src="https://i.imgur.com/xqL6Jxx.jpeg"
            alt="Selo de Verificado"
            className="verified-badge"
          />
        </div>
        {/* NOVO: Exibe o status dinâmico. Adiciona a classe 'typing' para o efeito de cor */}
        <span className={`chat-status ${status !== 'online' ? 'typing' : ''}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

export default Header;
