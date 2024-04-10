import java.io.*;

import javax.servlet.http.HttpSession;
import javax.servlet.http.*;
import javax.servlet.*;

import java.util.HashMap;

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
    
    res.sendRedirect("/risto89-1.0/");
  }
}
