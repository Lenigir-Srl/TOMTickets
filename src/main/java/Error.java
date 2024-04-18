import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

public class Error extends HttpServlet {
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {
    res.setCharacterEncoding("UTF-8");

    req.getRequestDispatcher("./Errorpage.jsp").include(req, res); //Print the jasper page

        
  }
}
