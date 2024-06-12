package com.lenigir.tomtickets;

import com.lenigir.tomtickets.beans.*;
import com.lenigir.tomtickets.DAO.*;
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.Connection;

// This servlet is used to delete an event
public class DeleteEvent extends HttpServlet {

  @Override
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    res.setCharacterEncoding("UTF-8");
    // Do not create a new session,
    // assuming we already have one
    HttpSession session = req.getSession(false);
    SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");

    String titolo = (String) req.getParameter("titolo");
    
    try {

      if (scon == null) {
          throw new Exception("Connessione non stabilita");
      }

      Connection connection = scon.getConnection();
      
      if (titolo == null) {
        throw new Exception("Titolo non specificato");
      }

      EventoBean evento = EventoDAO.GetEvento(titolo, connection);
      if (evento == null) {
        throw new Exception("Evento non trovato");
      }

      
      ServletContext sc = getServletContext();
      String path = sc.getRealPath("/immagini");
      EventoDAO.EliminaImmagine(evento, path);
      EventoDAO.EliminaEvento(evento, connection);

      res.setStatus(HttpServletResponse.SC_OK);
      res.getWriter().write("OK, evento eliminato: ");

    }
    catch(Exception e) {

      res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      res.getWriter().write("ERROR: " + e.getMessage());
      return;
    }

  }

  @Override
  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
