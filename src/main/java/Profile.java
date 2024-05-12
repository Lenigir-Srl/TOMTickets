import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.Connection;
import java.sql.SQLException;

// Profile page, should be accessible only
// when logged in, It shows the user's profile
public class Profile extends HttpServlet {

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

      // Getting the profile bean from the dao
      ProfiloBean profilo = ProfiloDAO.GetProfiloBean(username, scon.getConnection());


      // Setting the profile bean as an attribute
      req.setAttribute("profilo", profilo);


      // Forwarding the request to the Profile.jsp
      req.getRequestDispatcher("/WEB-INF/jsp/Profile.jsp").forward(req, res);
    }
    catch(SQLException e) {

      // If there is an error, we redirect to the error page
      req.setAttribute("error", "Errore di connessione al database");
      req.getRequestDispatcher("/error").forward(req, res);
      return;
    }

  }
}
