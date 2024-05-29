import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import com.google.gson.*;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

// This servlet is used to load the buy event page
public class AcquistaEvento extends HttpServlet {

  @Override
  public void init(ServletConfig config) throws ServletException {
    super.init(config);

    // Loading the driver
    try {

      Class.forName("org.apache.derby.jdbc.ClientDriver");
    }
    catch (ClassNotFoundException e) {

      throw new ServletException("Driver not found");
    }
  }

  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    String titolo = req.getParameter("titolo");

    HttpSession session = req.getSession(false);
    String username = (String) session.getAttribute("username");
    SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");

    try {

      if (titolo == null) {
        throw new Exception("Titolo non specificato");
      }

      if (scon == null) {
         throw new Exception("Connessione non disponibile");
      }
      
      Connection con = scon.getConnection();

      // Get the event from the database
      EventoBean evento = EventoDAO.GetEvento(titolo, con);
      req.setAttribute("titolo", titolo);

      // Get the number of tickets bought by the user
      ProfiloBean profilo = ProfiloDAO.GetProfiloBean(username, con);
      req.setAttribute("numeroAcquisti", profilo.getAcquisti());

	  // Forwarding the request to the Profile.jsp
      req.getRequestDispatcher("/WEB-INF/jsp/AcquistaEvento.jsp").forward(req, res);
    }
    catch (Exception e) {
        req.setAttribute("error", "(Visualizza Evento) Errore: " + e.getMessage());
        req.getRequestDispatcher("/error").forward(req, res);
    }
  }

  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
