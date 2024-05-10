import java.io.*;

import javax.servlet.http.HttpSession;
import javax.servlet.http.*;
import javax.servlet.*;

// This servlet handles Logout, invalidating the 
// sessione and redirecting to the login page
public class Logout extends HttpServlet {
 
  protected void doGet (HttpServletRequest req,
  		     HttpServletResponse res)
     throws ServletException, IOException
  {

    HttpSession session = req.getSession(false);

    req.setAttribute("OK", "Logout eseguito con successo!");
    req.setAttribute("description", "Ci dispiace vederti andare via cosi presto :< e noi di TOMTickets speriamo di rivederti molto presto!");
    req.getRequestDispatcher("/OK").forward(req, res);

    // Check if the session exists
    if (session != null) {
      session.invalidate();
    }
    
  }
}
