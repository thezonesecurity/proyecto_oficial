import React from "react";

export const SidebarMenuID = () => {
  return (
    <div className="col-3 col-s-3 menu">
      <div className="perfil">
        <h4 className="titleRol">DOCENTE</h4>
        <table>
          <tr>
            <td>
              <img
                src="https://p4.wallpaperbetter.com/wallpaper/115/377/258/anime-demon-slayer-kimetsu-no-yaiba-nezuko-kamado-hd-wallpaper-preview.jpg"
                width="100"
                height="100"
                className="avatar"
              />
            </td>
            <td className="perfilSaludo">
              <b>Bienvenido</b>
              <br /> Limber
            </td>
          </tr>
        </table>
        <div className="profile_info">
          <b>Nombre:</b>Limber
          <br />
          <b>Apellidos</b>Ruiz Molina
          <br />
          <b>C.I.:</b>10278485p
          <br />
          <b>Email:</b>Limber@gmial.com
          <br />
          <b>Direccion:</b> Oruro 23
        </div>
        <br />
      </div>
    </div>
  );
};

/*
<div className="col-3 card">
      <div className="nav nav-tabs card-header-tabs">
        <SubSidebarID />
      </div>
    </div>
*/
