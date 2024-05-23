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

    // Check if the session exists
    if (session != null) {
      session.invalidate();
    }

    req.setAttribute("title", "Info");
    req.setAttribute("error", "Sei uscito dal tuo profilo!");
    req.setAttribute("description", "Ci dispiace vederti andare via...<br>Noi di TOMTickets speriamo di incontrarti di nuovo molto presto!");
    req.getRequestDispatcher("/error").forward(req, res);

    
  }
}
