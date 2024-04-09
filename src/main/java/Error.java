import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

public class Error extends HttpServlet {
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {
    PrintWriter out = res.getWriter();

    req.getRequestDispatcher("/Errorpage.html").include(req, res);

    String error = req.getParameter("error");
    out.close();
  }
}
