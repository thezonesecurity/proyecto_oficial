import React from "react";

export const SubSidebarID = () => {
  return (
    <div className="profile clearfix">
      <h4>DOCENTE</h4>
      <br />
      <div className="profile_pic">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/115/377/258/anime-demon-slayer-kimetsu-no-yaiba-nezuko-kamado-hd-wallpaper-preview.jpg"
          width="90"
          height="100"
          alt=""
        />
      </div>
      <br />
      <div className="profile_info">
        <span>Bienvenido,</span>
        <h2> Ing. Limber</h2>
      </div>
      <br />
      <div className="col-20">
        <ul>
          <a>
            <b>Nombre:</b>Limber
          </a>
          <br />
          <a>
            <b>Apellidos:</b>Ruiz Molina
          </a>
          <br />
          <a>
            <b>Email:</b> limber@gmail.com
          </a>
          <br />
          <a>
            <b>Direccion:</b>Calle Oruro N°458
          </a>
          <br />
        </ul>
      </div>
    </div>
  );
};
