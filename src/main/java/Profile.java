import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

// Profile page, should be accessible only
// when logged in, It shows the session Attributes
public class Profile extends HttpServlet {

  @Override
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    res.setCharacterEncoding("UTF-8");
    // Do no create a new session
    HttpSession session = req.getSession(false);
    
    // Thread Safe
    synchronized(session) {
        req.getRequestDispatcher("./Profile.jsp").include(req, res);
    }
  }
}
