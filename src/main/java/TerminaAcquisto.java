import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import com.google.gson.*;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

// This servlet is used to load the buy event page
public class TerminaAcquisto extends HttpServlet {

  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {


      // Increase the number of acquisti
      
      // Get connection from session,
      // Assuming that the connection is already established
      HttpSession session = req.getSession(false);
      SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");
      String username = (String) session.getAttribute("username");

      String numeroAcquisti = req.getParameter("quantita");

      try {

        if (scon == null) {
          throw new Exception();
        }

        // Getting the profile bean from the dao
        ProfiloBean profilo = ProfiloDAO.GetProfiloBean(username, scon.getConnection());

        // Increase the number of acquisti
        ProfiloDAO.IncreaseAcquisti(profilo, scon.getConnection(), Integer.valueOf(numeroAcquisti));

        req.setAttribute("OK", "Tutto e' andato bene");
        req.setAttribute("description", "Il pagamento e' andato a buon fine");

	    // Forwarding the request to the Profile.jsp
        req.getRequestDispatcher("/OK").forward(req, res);

      } catch (Exception e) {
        req.setAttribute("error", "(Termina Acquisto) Errore di connessione al database, " + e.getMessage());
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
