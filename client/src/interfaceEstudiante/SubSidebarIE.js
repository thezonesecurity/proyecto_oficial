import React from "react";

export const SubSidebarIE = () => {
  return (
    <div className="profile clearfix">
      <h4>ESTUDIANTE</h4>
      <br />
      <div class="profile_pic">
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
        <h2>Juan</h2>
      </div>
      <br />
      <div className="col-30">
        <ul>
          <a>
            <b>Nombre:</b>Juan
          </a>
          <br />
          <a>
            <b>Apellidos:</b>Molina
          </a>
          <br />
          <a>
            <b>Email:</b> juan@gmail.com
          </a>
          <br />
          <a>
            <b>Direccion:</b>Calle Bustillos N°5
          </a>
          <br />
        </ul>
      </div>
    </div>
  );
};
