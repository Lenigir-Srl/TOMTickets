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


    // Get Session Attributes
    
    // Do no create a new session
    HttpSession session = req.getSession(false);
    
    // Thread Safe
    synchronized(session) {

        String name = (String) session.getAttribute("name");

        // Write output
        PrintWriter out = res.getWriter();
        out.println("Hello " + name + ", welcome to your profile page!");
        out.close();
    }
  }
}
