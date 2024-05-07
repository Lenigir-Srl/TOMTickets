import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

// Check that the user making the request has a session
// If that's not the case, It blocks acces to the page
//
// TODO: Redirect to error page
public class AuthenticationFilter implements Filter {

  public void init(FilterConfig fConfig) throws ServletException {}
  
  public void destroy() {}

  public void doFilter (ServletRequest req,
                     ServletResponse res,
                     FilterChain chain)
    throws ServletException, IOException
  {

    HttpServletRequest http_req = (HttpServletRequest) req;

    try {
        if (http_req.getSession(false) == null) {
            throw new Exception();
        }

        HttpSession session = http_req.getSession(false);
        if (session.getAttribute("sessionconnection") == null) {
            throw new Exception();
        }
        
        if (session.getAttribute("username") == null) {
            throw new Exception();
        }

        chain.doFilter(req, res);

    }
    catch (Exception e) {

        req.setAttribute("error", "Utente non autenticato"); //Set error message
        req.getRequestDispatcher("/error").forward(req,res); //Redirect to Error.java
    }
  }
}
