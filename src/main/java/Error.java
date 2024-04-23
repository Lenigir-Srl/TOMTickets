import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

// This Servlet handles the error page
// You need to pass the error message as a parameter
// like so:
//
// req.setAttribute("error", "Non hai ancora fatto il login!");
// req.getRequestDispatcher("./error").forward(req,res);
public class Error extends HttpServlet {

  @Override
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    res.setCharacterEncoding("UTF-8");
    req.getRequestDispatcher("/Errorpage.jsp").include(req, res);
  }

  @Override
  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
