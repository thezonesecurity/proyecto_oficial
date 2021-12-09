import React from "react";

export const SidebarMenuIE = () => {
  return (
    <div className="col-3 col-s-3 menu">
      <div className="perfil">
        <h4 className="titleRol">ESTUDIANTE</h4>
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
              <br /> Karina
            </td>
          </tr>
        </table>
        <div className="profile_info">
          <b>Nombre:</b>Karina
          <br />
          <b>Apellidos</b>Molina Mendez
          <br />
          <b>C.I.:</b>10485p
          <br />
          <b>Email:</b>Karina@gmial.com
          <br />
          <b>Direccion:</b> Oruro 22
        </div>
        <br />
      </div>
    </div>
  );
};

/*
 <div className="col-2 card">
      <div className="nav nav-tabs card-header-tabs">
        <SubSidebarIE />
      </div>
    </div>
*/
