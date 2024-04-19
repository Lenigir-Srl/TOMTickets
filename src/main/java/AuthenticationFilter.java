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

    // Check session
    if (http_req.getSession(false) == null) {
        
        req.setAttribute("error", "Non hai ancora fatto il login!"); //Set error message
        
        req.getRequestDispatcher("./error").forward(req,res); //Redirect to Error.java
       
    }
    else {

        // Continue
        chain.doFilter(req, res);
    }
  }
}
