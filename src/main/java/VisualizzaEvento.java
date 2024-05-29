import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import com.google.gson.*;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

// This servlet is used to redirect to an event page
public class VisualizzaEvento extends HttpServlet {

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
    String url = "jdbc:derby://localhost:1527/DerbyDB";

    try {

      if (titolo == null) {
        throw new Exception("Titolo non specificato");
      }

      
      // Connect to DB
      // We are not useing the session since this servlet
      // can be accessed by anyone
      Connection con = DriverManager.getConnection(url);

      EventoBean evento = EventoDAO.GetEvento(titolo, con);
      req.setAttribute("titolo", titolo);

      // Increase the number of clicks
      EventoDAO.IncreaseClickNumber(evento, con); 

	  // Forwarding the request to the Profile.jsp
      req.getRequestDispatcher("/jsp/Evento.jsp").forward(req, res);
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
