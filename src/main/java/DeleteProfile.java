
import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.Connection;
import java.sql.SQLException;

// Profile page, should be accessible only
// when logged in, It shows the session Attributes
public class DeleteProfile extends HttpServlet {

  @Override
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    res.setCharacterEncoding("UTF-8");
    // Do no create a new session,
    // assuming we already have one
    HttpSession session = req.getSession(false);
    String username = (String) session.getAttribute("username");
    SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");

    try {

      if (scon == null) {
          throw new SQLException();
      }

      Connection connection = scon.getConnection();

      // Getting the profile bean from the dao
      ProfiloBean profilo = ProfiloDAO.GetProfiloBean(username, connection);
    
      // Deleting the profile
      ProfiloDAO.EliminaProfilo(profilo, connection);


      // Invalidating the session
      session.invalidate();

      
      req.setAttribute("title", "Info");
      req.setAttribute("error", "Profilo eliminato con successo!");
      req.setAttribute("description", "Direi che questo per noi sia un addio...<br><br>Ma noi di TOMTickets non gettiamo mai la spugna, e sappiamo che<br>prima o poi ritornerai sotto un altro nome...fino ad allora.");
      req.getRequestDispatcher("/error").forward(req, res);

    }
    catch(SQLException e) {

      // If there is an error, we redirect to the error page
      req.setAttribute("error", "Errore di connessione al database");
      req.setAttribute("description", e.getMessage());
      req.getRequestDispatcher("/error").forward(req, res);
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
